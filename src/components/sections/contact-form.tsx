"use client";

import { useId, useState } from "react";
import Button from "@/components/ui/button";
import { site } from "@/lib/site";
import { INTERESTS, LIMITS, validateContact, type FieldErrors, type Interest } from "@/lib/contact";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "sent" | "error";

/**
 * Posts the enquiry to /api/contact, which emails it to the contact inbox.
 * Validation runs here first (same rules as the server), the button locks
 * while a request is in flight, and every outcome is announced in the form.
 */
export default function ContactForm() {
  const [interest, setInterest] = useState<Interest>("Not sure yet");
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const id = useId();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    const form = e.currentTarget;
    const fd = new FormData(form);
    const raw = Object.fromEntries(fd.entries());
    const { data, errors: fieldErrors } = validateContact({ ...raw, interest });
    setErrors(fieldErrors);
    setServerError(null);
    if (Object.keys(fieldErrors).length) {
      const first = Object.keys(fieldErrors)[0];
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, website: String(fd.get("website") ?? "") }),
      });
      const body = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string; errors?: FieldErrors };
      if (res.ok && body.ok) {
        setStatus("sent");
        return;
      }
      if (body.errors) setErrors(body.errors);
      setServerError(body.error ?? "Your enquiry could not be sent.");
      setStatus("error");
    } catch {
      setServerError("Your enquiry could not be sent. Check your connection and try again.");
      setStatus("error");
    }
  }

  const busy = status === "submitting";
  const field = "w-full rounded-sm border bg-surface px-4 py-3 text-[0.9375rem] text-fg placeholder:text-fg-soft focus:border-fg focus:outline-none disabled:opacity-60";
  const ok = "border-line";
  const bad = "border-amber";

  if (status === "sent") {
    return (
      <div role="status" aria-live="polite" className="rounded-md border border-line bg-surface p-8 sm:p-10">
        <p className="eyebrow">Enquiry sent</p>
        <p className="mt-4 max-w-[30ch] text-display-sm text-fg">Thank you. Your enquiry is on its way to {site.email}.</p>
        <p className="mt-4 max-w-[52ch] text-[0.9375rem] leading-relaxed text-fg-muted">We will reply to the address you gave us. If it is urgent, email us directly.</p>
        <a href={`mailto:${site.email}`} className="link-wipe mt-6 inline-block text-sm font-medium text-fg">
          {site.email}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5" aria-busy={busy}>
      <fieldset disabled={busy}>
        <legend className="eyebrow mb-3">What are you looking at</legend>
        <div className="flex flex-wrap gap-2">
          {INTERESTS.map((i) => (
            <label key={i} className="cursor-pointer">
              <input type="radio" name="interest" value={i} checked={interest === i} onChange={() => setInterest(i)} className="peer sr-only" />
              <span className="inline-flex h-9 items-center rounded-full border border-line px-4 text-sm text-fg-muted transition-colors peer-checked:border-fg peer-checked:bg-fg peer-checked:text-bg peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-amber">
                {i}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Honeypot: hidden from people, filled by bots. */}
      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden>
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm">
          <span className="eyebrow">Name</span>
          <input name="name" required maxLength={LIMITS.name} autoComplete="name" disabled={busy} aria-invalid={!!errors.name} aria-describedby={errors.name ? `${id}-name` : undefined} className={cn(field, errors.name ? bad : ok)} />
          {errors.name && <span id={`${id}-name`} className="text-xs text-amber">{errors.name}</span>}
        </label>
        <label className="grid gap-2 text-sm">
          <span className="eyebrow">Organisation</span>
          <input name="org" maxLength={LIMITS.org} autoComplete="organization" disabled={busy} className={cn(field, ok)} />
        </label>
      </div>
      <label className="grid gap-2 text-sm">
        <span className="eyebrow">Work email</span>
        <input name="email" type="email" required maxLength={LIMITS.email} autoComplete="email" inputMode="email" disabled={busy} aria-invalid={!!errors.email} aria-describedby={errors.email ? `${id}-email` : undefined} className={cn(field, errors.email ? bad : ok)} />
        {errors.email && <span id={`${id}-email`} className="text-xs text-amber">{errors.email}</span>}
      </label>
      <label className="grid gap-2 text-sm">
        <span className="eyebrow">Where is the programme stuck</span>
        <textarea name="message" rows={5} required maxLength={LIMITS.message} disabled={busy} aria-invalid={!!errors.message} aria-describedby={errors.message ? `${id}-message` : undefined} className={cn(field, errors.message ? bad : ok)} placeholder="Pilots without an owner, data that cannot leave, a plant that plans in spreadsheets…" />
        {errors.message && <span id={`${id}-message`} className="text-xs text-amber">{errors.message}</span>}
      </label>

      <div className="flex flex-wrap items-center gap-5 pt-2">
        <Button type="submit" size="lg" disabled={busy} icon={!busy}>
          {busy ? "Sending…" : "Send enquiry"}
        </Button>
        <p className="text-xs text-fg-muted">Goes to {site.email}. We reply to the address you give.</p>
      </div>

      <div role="alert" aria-live="assertive" className={cn("text-sm", serverError ? "rounded-sm border border-amber/60 bg-surface px-4 py-3 text-fg" : "sr-only")}>
        {serverError && (
          <>
            {serverError}{" "}
            <a href={`mailto:${site.email}`} className="link-wipe font-medium">
              Email {site.email}
            </a>
          </>
        )}
      </div>
    </form>
  );
}
