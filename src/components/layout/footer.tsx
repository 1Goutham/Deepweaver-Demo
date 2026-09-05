import Link from "next/link";
import Logo from "./logo";
import { footerNav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer data-theme="deep" className="relative bg-bg text-fg">
      <div className="mx-auto max-w-wide px-5 pb-10 pt-20 sm:px-8 lg:px-12 lg:pt-28">
        <div className="grid-12 gap-y-12">
          <div className="lg:col-span-4">
            <Logo variant="white" />
            <p className="mt-6 max-w-[34ch] text-[0.9375rem] font-light leading-relaxed text-fg-muted">
              Frontier and sovereign AI, across the physical and digital worlds.
            </p>
            <a href={`mailto:${site.email}`} className="link-wipe mt-6 inline-block text-[0.9375rem] font-medium text-fg">
              {site.email}
            </a>
            <p className="mt-8 text-xs text-fg-soft">ISO/IEC 42001 certified · NIST AI RMF · EU AI Act aligned · National AI Centre listed</p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-6 lg:col-start-7">
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
            <div>
              <p className="eyebrow">Where we operate</p>
              <ul className="mt-5 space-y-2.5 text-[0.9375rem] text-fg-muted">
                {site.offices.map((o) => (
                  <li key={o.country}>
                    <span className="text-fg">{o.country}</span>
                    <br />
                    <span className="text-sm">{o.cities.join(" · ")}</span>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-6 text-xs text-fg-soft sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.legalName}. ISO/IEC 42001 certified. Responsible AI by design.</p>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="link-wipe hover:text-fg">
            LinkedIn
          </a>
        </div>
      </div>

    </footer>
  );
}
