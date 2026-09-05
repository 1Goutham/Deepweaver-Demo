import Link from "next/link";
import Image from "next/image";
import Logo from "./logo";
import { footerNav, site } from "@/lib/site";

const trust = [
  { src: "/logos/iso-42001.png", alt: "ISO/IEC 42001 certified" },
  { src: "/logos/nist-ai-rmf.png", alt: "NIST AI RMF" },
  { src: "/logos/eu-ai-act.png", alt: "EU AI Act aligned" },
  { src: "/logos/national-ai-centre.png", alt: "National AI Centre listed" },
];

export default function Footer() {
  return (
    <footer data-theme="deep" className="relative overflow-hidden bg-bg text-fg">
      <div className="mx-auto max-w-wide px-5 pb-10 pt-20 sm:px-8 lg:px-12 lg:pt-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo variant="white" />
            <p className="mt-6 max-w-[34ch] text-[0.9375rem] leading-relaxed text-fg-muted">
              Two worlds, one stack, governed end to end and human-led — already in production with enterprise and government.
            </p>
            <a href={`mailto:${site.email}`} className="link-wipe mt-6 inline-block text-[0.9375rem] font-medium text-fg">
              {site.email}
            </a>
            <ul className="mt-8 flex flex-wrap items-center gap-4 opacity-80">
              {trust.map((t) => (
                <li key={t.src} className="rounded-xs bg-white p-1">
                  <Image src={t.src} alt={t.alt} width={64} height={64} className="size-9 object-contain" />
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-6 lg:col-start-6">
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

      {/* Wordmark bleed — the deck's own white mark, huge, mostly off-canvas. */}
      <div aria-hidden className="pointer-events-none relative h-[22vw] max-h-[280px] min-h-[120px] w-full select-none overflow-hidden">
        <Image
          src="/brand/deepweaver-lockup-white.png"
          alt=""
          width={2048}
          height={402}
          className="absolute left-1/2 top-[18%] w-[96vw] max-w-none -translate-x-1/2 opacity-[0.06]"
        />
      </div>
    </footer>
  );
}
