"use client";

import { useState } from "react";
import Button from "@/components/ui/button";
import { site } from "@/lib/site";

const interests = ["Digital AI", "Physical AI", "Frontier AI", "Sovereign AI", "AI Governance", "Factory Brain", "Not sure yet"];

/**
 * No backend is wired yet: the form composes a mail to contact@deepweaver.ai
 * with the fields in the body. Swap the submit handler for a route handler
 * when a CRM or mail service is chosen.
 */
export default function ContactForm() {
  const [interest, setInterest] = useState(interests[6]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "");
    const org = String(fd.get("org") ?? "");
    const email = String(fd.get("email") ?? "");
    const message = String(fd.get("message") ?? "");
    const subject = encodeURIComponent(`Enquiry · ${interest} · ${org || name}`);
    const body = encodeURIComponent(`${message}\n\n—\n${name}\n${org}\n${email}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  const field = "w-full rounded-sm border border-line bg-surface px-4 py-3 text-[0.9375rem] text-fg placeholder:text-fg-soft focus:border-fg focus:outline-none";

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <fieldset>
        <legend className="eyebrow mb-3">What are you looking at</legend>
        <div className="flex flex-wrap gap-2">
          {interests.map((i) => (
            <label key={i} className="cursor-pointer">
              <input type="radio" name="interest" value={i} checked={interest === i} onChange={() => setInterest(i)} className="peer sr-only" />
              <span className="inline-flex h-9 items-center rounded-full border border-line px-4 text-sm text-fg-muted transition-colors peer-checked:border-fg peer-checked:bg-fg peer-checked:text-bg peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-amber">
                {i}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm">
          <span className="eyebrow">Name</span>
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="grid gap-2 text-sm">
          <span className="eyebrow">Organisation</span>
          <input name="org" autoComplete="organization" className={field} />
        </label>
      </div>
      <label className="grid gap-2 text-sm">
        <span className="eyebrow">Work email</span>
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className="grid gap-2 text-sm">
        <span className="eyebrow">Where is the programme stuck</span>
        <textarea name="message" rows={5} required className={field} placeholder="Pilots without an owner, data that cannot leave, a plant that plans in spreadsheets…" />
      </label>
      <div className="flex flex-wrap items-center gap-5 pt-2">
        <Button type="submit" size="lg">
          Send enquiry
        </Button>
        <p className="text-xs text-fg-muted">Opens your mail client addressed to {site.email}.</p>
      </div>
    </form>
  );
}
