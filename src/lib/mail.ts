/**
 * Sends the contact notification through Resend's HTTP API. No SDK: one
 * fetch, and every value comes from server-side environment variables, so
 * the same code runs in any environment (staging, production) unchanged.
 *
 *   RESEND_API_KEY      required — provider key for that environment
 *   CONTACT_FROM_EMAIL  required — sender on a domain verified in that Resend
 *                       account, e.g. "DeepWeaver Website <website@deepweaver.ai>"
 *   CONTACT_TO_EMAIL    optional — inbox(es) that receive enquiries, comma-
 *                       separated; defaults to the site contact address
 *   RESEND_API_URL      optional — local testing only; never set in a deployment
 *
 * Nothing is defaulted to a provider test sender: a deployment without a
 * verified sender is treated as not configured rather than sending from an
 * address the business does not own.
 */
export type MailMessage = { to: string[]; from: string; replyTo: string; subject: string; text: string };

export type MissingVar = "RESEND_API_KEY" | "CONTACT_FROM_EMAIL" | "CONTACT_TO_EMAIL";
export type MailConfig = { ok: true; key: string; to: string[]; from: string; url: string } | { ok: false; missing: MissingVar[] };

export type SendResult = { ok: true; id?: string } | { ok: false; reason: "provider" | "network"; detail: string };

const ADDRESS_RE = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]{2,}$/;
/** "Name <addr@example.com>" or a bare address. */
const SENDER_RE = /^(?:[^<>]+<[^\s@<>]+@[^\s@<>]+\.[^\s@<>]{2,}>|[^\s@<>]+@[^\s@<>]+\.[^\s@<>]{2,})$/;

export function mailConfig(env: NodeJS.ProcessEnv, defaultTo: string): MailConfig {
  const key = env.RESEND_API_KEY?.trim() ?? "";
  const from = env.CONTACT_FROM_EMAIL?.trim() ?? "";
  const to = (env.CONTACT_TO_EMAIL?.trim() || defaultTo)
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const missing: MissingVar[] = [];
  if (!key) missing.push("RESEND_API_KEY");
  if (!SENDER_RE.test(from)) missing.push("CONTACT_FROM_EMAIL");
  if (!to.length || !to.every((a) => ADDRESS_RE.test(a))) missing.push("CONTACT_TO_EMAIL");
  if (missing.length) return { ok: false, missing };
  return { ok: true, key, to, from, url: env.RESEND_API_URL?.trim() || "https://api.resend.com/emails" };
}

/** Provider call. The key is used for the request header only and never returned or logged. */
export async function sendMail(msg: MailMessage, key: string, url: string): Promise<SendResult> {
  let res: Response;
  try {
    res = await fetch(url, {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: msg.from, to: msg.to, reply_to: msg.replyTo, subject: msg.subject, text: msg.text }),
      // Well inside the default function timeout on Vercel and Netlify.
      signal: AbortSignal.timeout(8_000),
    });
  } catch (err) {
    return { ok: false, reason: "network", detail: err instanceof Error ? err.name : "fetch failed" };
  }
  if (!res.ok) {
    let detail = String(res.status);
    try {
      const body = (await res.json()) as { message?: string; name?: string };
      detail = `${res.status} ${body.name ?? ""} ${body.message ?? ""}`.trim().slice(0, 200);
    } catch {}
    return { ok: false, reason: "provider", detail };
  }
  let id: string | undefined;
  try {
    id = ((await res.json()) as { id?: string }).id;
  } catch {}
  return { ok: true, id };
}
