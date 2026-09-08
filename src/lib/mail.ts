/**
 * Sends the contact notification through Resend's HTTP API. No SDK: one
 * fetch, and every secret stays in server-side environment variables.
 *
 *   RESEND_API_KEY      required — the provider key
 *   CONTACT_TO_EMAIL    optional — inbox that receives enquiries (default: site email)
 *   CONTACT_FROM_EMAIL  optional — sender; must be on a domain verified with the provider
 *   RESEND_API_URL      optional — override for tests
 */
export type MailMessage = { to: string; from: string; replyTo: string; subject: string; text: string };

export type SendResult = { ok: true; id?: string } | { ok: false; reason: "not-configured" | "provider" | "network"; detail?: string };

export function mailConfig(defaultTo: string) {
  const key = process.env.RESEND_API_KEY?.trim();
  return {
    key: key || null,
    to: process.env.CONTACT_TO_EMAIL?.trim() || defaultTo,
    from: process.env.CONTACT_FROM_EMAIL?.trim() || "DeepWeaver Website <onboarding@resend.dev>",
    url: process.env.RESEND_API_URL?.trim() || "https://api.resend.com/emails",
  };
}

export async function sendMail(msg: MailMessage, key: string, url: string): Promise<SendResult> {
  let res: Response;
  try {
    res = await fetch(url, {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: msg.from, to: [msg.to], reply_to: msg.replyTo, subject: msg.subject, text: msg.text }),
      signal: AbortSignal.timeout(15_000),
    });
  } catch (err) {
    return { ok: false, reason: "network", detail: err instanceof Error ? err.message : String(err) };
  }
  if (!res.ok) {
    let detail = `${res.status}`;
    try {
      const body = (await res.json()) as { message?: string; name?: string };
      detail = `${res.status} ${body.name ?? ""} ${body.message ?? ""}`.trim();
    } catch {}
    return { ok: false, reason: "provider", detail };
  }
  let id: string | undefined;
  try {
    id = ((await res.json()) as { id?: string }).id;
  } catch {}
  return { ok: true, id };
}
