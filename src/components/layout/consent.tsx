"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";
import Button from "@/components/ui/button";

/**
 * Analytics-cookie consent, after the partner site's pattern: ask once,
 * remember the answer, load Google Analytics only when granted, and let the
 * footer reopen the choice. The measurement ID comes from the environment
 * (NEXT_PUBLIC_GA_ID); with none set, the choice is still recorded and no
 * script is loaded.
 */
const KEY = "dw-consent";
const OPEN_EVENT = "dw-consent-open";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

type Choice = "granted" | "denied";

function readChoice(): Choice | null {
  try {
    const v = window.localStorage.getItem(KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

export function openConsent() {
  if (typeof window !== "undefined") window.dispatchEvent(new Event(OPEN_EVENT));
}

export default function Consent() {
  const [choice, setChoice] = useState<Choice | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const c = readChoice();
    const reopen = () => setOpen(true);
    // Deferred so the first paint matches the server-rendered markup.
    const t = window.setTimeout(() => {
      setChoice(c);
      setOpen(c === null);
    }, 0);
    window.addEventListener(OPEN_EVENT, reopen);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener(OPEN_EVENT, reopen);
    };
  }, []);

  function decide(value: Choice) {
    try {
      window.localStorage.setItem(KEY, value);
    } catch {}
    setChoice(value);
    setOpen(false);
  }

  return (
    <>
      {choice === "granted" && GA_ID ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { anonymize_ip: true });`}
          </Script>
        </>
      ) : null}

      {open ? (
        <div role="dialog" aria-labelledby="consent-title" data-theme="dark" className="fixed inset-x-0 bottom-0 z-[70] px-gutter pb-4 sm:pb-6">
          <div className="mx-auto flex max-w-wide flex-col gap-5 rounded-md border border-line bg-ink p-5 text-fg shadow-[0_20px_60px_rgba(8,25,37,0.45)] sm:p-6 md:flex-row md:items-center md:gap-8">
            <div className="flex-1">
              <p id="consent-title" className="font-medium text-fg">
                Analytics cookies
              </p>
              <p className="mt-1 max-w-[64ch] text-sm leading-relaxed text-fg-muted">
                We use Google Analytics to understand how this site is used. No advertising cookies, and the site works the same either way.{" "}
                <Link href="/legal/privacy" className="link-wipe text-fg">
                  Privacy Policy
                </Link>
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap items-center gap-3">
              <Button variant="ghost" size="sm" icon={false} onClick={() => decide("denied")}>
                Decline
              </Button>
              <Button variant="light" size="sm" icon={false} onClick={() => decide("granted")}>
                Accept analytics
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
