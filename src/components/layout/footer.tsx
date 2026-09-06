"use client";

import Link from "next/link";
import Logo from "./logo";
import { openConsent } from "./consent";
import { footerNav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer data-theme="deep" className="relative bg-bg text-fg">
      <div aria-hidden className="bg-brand-gradient h-px w-full" />
      <div className="mx-auto max-w-wide px-5 pb-10 pt-20 sm:px-8 lg:px-12 lg:pt-28">
        <div className="grid-12 gap-y-12">
          <div className="col-span-12 lg:col-span-4">
            <Logo variant="white" />
            <p className="mt-6 text-[0.9375rem] text-fg">
              {site.regions.join(" | ")}
            </p>
            <p className="mt-3 flex flex-wrap items-center gap-x-3 text-[0.9375rem]">
              <a href={`mailto:${site.email}`} className="link-wipe font-medium text-fg">
                {site.email}
              </a>
              <span aria-hidden className="text-fg-soft">|</span>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="link-wipe font-medium text-fg">
                LinkedIn
              </a>
            </p>
          </div>

          <nav aria-label="Footer" className="col-span-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-6 lg:col-start-7">
            {Object.entries(footerNav).map(([group, links]) => (
              <div key={group}>
                <p className="eyebrow">{group}</p>
                <ul className="mt-5 space-y-2.5">
                  {links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="link-wipe text-[0.9375rem] text-fg-muted hover:text-fg">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-6 text-sm text-fg-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.legalName}</p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <li>
              <Link href="/legal/privacy" className="link-wipe hover:text-fg">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/legal/terms" className="link-wipe hover:text-fg">
                Terms of Use
              </Link>
            </li>
            <li>
              <button type="button" onClick={openConsent} className="link-wipe cursor-pointer hover:text-fg">
                Cookie settings
              </button>
            </li>
          </ul>
        </div>
      </div>

    </footer>
  );
}
