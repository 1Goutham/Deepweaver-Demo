import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/page-hero";
import Section from "@/components/ui/section";
import { termsOfUse } from "@/content/legal";

export const metadata: Metadata = { title: "Terms of Use", alternates: { canonical: "/legal/terms" }, robots: { index: false } };

/** Renders one paragraph, linking the Privacy Policy mention to the policy page. */
function Para({ text }: { text: string }) {
  const parts = text.split("Privacy Policy");
  if (parts.length === 1) return <p>{text}</p>;
  return (
    <p>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && (
            <Link href="/legal/privacy" className="link-wipe text-fg">
              Privacy Policy
            </Link>
          )}
        </span>
      ))}
    </p>
  );
}

export default function TermsPage() {
  const [intro, ...rest] = termsOfUse;
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Use." size="md" lead="DeepWeaver Technologies Pty Ltd. These terms govern your use of deepweaver.ai." />
      <Section theme="light" pad="md">
        <div className="mx-auto max-w-wide px-gutter">
          <div className="grid-12 gap-y-12">
            <div className="col-span-12 space-y-5 text-[0.9375rem] leading-relaxed text-fg-muted lg:col-span-8 lg:col-start-3">
              {intro.paras.map((p) => (
                <Para key={p.slice(0, 40)} text={p} />
              ))}
            </div>
            {rest.map((s) => (
              <section key={s.heading} className="col-span-12 grid-12 border-t border-line pt-8">
                <h2 className="col-span-12 text-display-xs text-fg lg:col-span-3">{s.heading}</h2>
                <div className="col-span-12 mt-4 space-y-5 text-[0.9375rem] leading-relaxed text-fg-muted lg:col-span-8 lg:col-start-5 lg:mt-0">
                  {s.intro && <p>{s.intro}</p>}
                  {s.bullets && (
                    <ul className="space-y-3">
                      {s.bullets.map((b) => (
                        <li key={b.slice(0, 40)} className="flex gap-3">
                          <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-fg-soft" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {s.paras.map((p) => (
                    <Para key={p.slice(0, 40)} text={p} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
