/**
 * Contact enquiry: shape, limits and validation shared by the form (client)
 * and the route handler (server). Pure TypeScript, no framework imports, so
 * it is unit-testable with `node --test`.
 */
export const INTERESTS = ["Digital AI", "Physical AI", "Frontier AI", "Sovereign AI", "AI Governance", "Factory Brain", "Not sure yet"] as const;
export type Interest = (typeof INTERESTS)[number];

export type ContactInput = {
  name: string;
  org: string;
  email: string;
  message: string;
  interest: Interest;
};

export const LIMITS = { name: 120, org: 160, email: 254, message: 5000 } as const;

/** Practical email check: one @, no spaces, a dot in the domain, sane length. */
export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export type FieldErrors = Partial<Record<keyof ContactInput, string>>;

function clean(v: unknown, max: number) {
  return typeof v === "string" ? v.replace(/\r\n?/g, "\n").trim().slice(0, max) : "";
}

/** Normalise raw input (form data or JSON) and report field errors. */
export function validateContact(raw: Record<string, unknown>): { data: ContactInput; errors: FieldErrors } {
  const data: ContactInput = {
    name: clean(raw.name, LIMITS.name),
    org: clean(raw.org, LIMITS.org),
    email: clean(raw.email, LIMITS.email).toLowerCase(),
    message: clean(raw.message, LIMITS.message),
    interest: (INTERESTS as readonly string[]).includes(String(raw.interest)) ? (raw.interest as Interest) : "Not sure yet",
  };
  const errors: FieldErrors = {};
  if (data.name.length < 2) errors.name = "Please enter your name.";
  if (!data.email) errors.email = "Please enter your work email.";
  else if (!EMAIL_RE.test(data.email)) errors.email = "That email address does not look right.";
  if (data.message.length < 10) errors.message = "Tell us a little more — at least a sentence.";
  return { data, errors };
}

export function contactSubject(d: ContactInput) {
  return `Enquiry · ${d.interest} · ${d.org || d.name}`;
}

/** Plain-text body for the notification email. */
export function contactBody(d: ContactInput) {
  return [
    `Interest: ${d.interest}`,
    `Name: ${d.name}`,
    `Organisation: ${d.org || "—"}`,
    `Email: ${d.email}`,
    "",
    "Message:",
    d.message,
  ].join("\n");
}
