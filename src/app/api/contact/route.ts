import { NextResponse } from "next/server";
import { validateContact, contactSubject, contactBody } from "@/lib/contact";
import { mailConfig, sendMail } from "@/lib/mail";
import { site } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BODY = 32 * 1024;

// Best-effort rate limit: 5 enquiries per address per 10 minutes. The map is
// per server instance, so on serverless hosts it bounds bursts per instance
// rather than globally; the honeypot and validation carry the rest.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

function json(status: number, body: Record<string, unknown>) {
  return NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

/** Browsers send Origin on cross-site POSTs; when present it must match this host. */
function crossSite(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return false;
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? "";
  try {
    return new URL(origin).host !== host;
  } catch {
    return true;
  }
}

export async function POST(request: Request) {
  if (!(request.headers.get("content-type") ?? "").includes("application/json")) {
    return json(415, { ok: false, error: "Send the enquiry as JSON." });
  }
  if (crossSite(request)) return json(403, { ok: false, error: "Enquiries must come from this site." });

  let raw: Record<string, unknown>;
  try {
    const text = await request.text();
    if (text.length > MAX_BODY) return json(413, { ok: false, error: "That enquiry is too long." });
    raw = JSON.parse(text) as Record<string, unknown>;
    if (!raw || typeof raw !== "object" || Array.isArray(raw)) throw new Error("not an object");
  } catch {
    return json(400, { ok: false, error: "The enquiry could not be read." });
  }

  // Honeypot: real people never see or fill this field.
  if (typeof raw.website === "string" && raw.website.trim() !== "") {
    return json(200, { ok: true });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (limited(ip)) return json(429, { ok: false, error: "Too many enquiries in a short time. Please try again shortly." });

  const { data, errors } = validateContact(raw);
  if (Object.keys(errors).length) return json(422, { ok: false, error: "Please check the highlighted fields.", errors });

  const cfg = mailConfig(process.env, site.email);
  if (!cfg.ok) {
    // Names only, never values.
    console.error("[contact] not configured; missing or invalid:", cfg.missing.join(", "));
    return json(503, { ok: false, error: "Enquiries cannot be sent right now." });
  }

  const result = await sendMail(
    { to: cfg.to, from: cfg.from, replyTo: data.email, subject: contactSubject(data), text: contactBody(data) },
    cfg.key,
    cfg.url,
  );
  if (!result.ok) {
    console.error("[contact] send failed:", result.reason, result.detail);
    return json(502, { ok: false, error: "Your enquiry could not be sent. Please try again or email us directly." });
  }
  return json(200, { ok: true });
}

export function GET() {
  return json(405, { ok: false, error: "Method not allowed." });
}
