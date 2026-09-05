import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/sections/page-hero";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/motion/reveal";
import Stat from "@/components/ui/stat";
import Tag from "@/components/ui/tag";
import Facts from "@/components/ui/facts";
import Cta from "@/components/sections/cta";
import CaseStudies from "@/components/sections/case-studies";
import { flagships, caseStudies } from "@/content/work";

export const metadata: Metadata = {
  title: "Work",
  description: "Flagship stories from ARB Corporation, Landcom and HearSight, plus eighteen case studies across government, hospitality, retail, industrial, financial and platform work.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Proof"
        title="Production systems in enterprise and government, and the agents behind them."
        aside={<Facts items={[["Flagships", "3"], ["Case studies", String(caseStudies.length)], ["Regions", "Australia · India"]]} />}
      />

      <Section theme="light" pad="lg" id="flagships">
        <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
          <SectionHeader eyebrow="Flagship stories" title="Three systems, three domains." />
          <ol className="mt-14 divide-y divide-line border-y border-line">
            {flagships.map((f, i) => (
              <Reveal as="li" key={f.id} id={f.id} delay={0.05 * i} className="grid-12 gap-y-8 py-12">
                <div className="col-span-12 lg:col-span-5">
                  <p className="eyebrow">{f.pillar} · {f.region}</p>
                  <h3 className="mt-3 text-display-md">{f.client}</h3>
                  <p className="mt-1 text-sm text-fg-muted">{f.kicker}</p>
                  {f.logo && (
                    <span className="mt-6 inline-block rounded-xs bg-white px-3 py-2 shadow-[0_0_0_1px_var(--line)]">
                      <Image src={f.logo.src} alt="" width={f.logo.w} height={f.logo.h} className="h-8 w-auto" />
                    </span>
                  )}
                  {f.image && (
                    <div className="mt-6 overflow-hidden bg-ink p-6">
                      <Image src={f.image.src} alt={f.image.alt} width={f.image.w} height={f.image.h} className="mx-auto w-full max-w-[280px]" />
                    </div>
                  )}
                </div>
                <div className="col-span-12 lg:col-span-6 lg:col-start-7">
                  <p className="max-w-[48ch] text-lead font-light text-fg-muted">{f.summary}</p>
                  {f.metrics.length > 0 && f.id !== "hearsight" && (
                    <div className="mt-8 grid grid-cols-2 gap-6 border-t border-line pt-6 sm:grid-cols-3">
                      {f.metrics.map((m) => (
                        <Stat key={m.label} value={m.value} prefix={m.prefix} suffix={m.suffix} decimals={m.decimals} label={m.label} />
                      ))}
                    </div>
                  )}
                  <ul className="mt-8 flex flex-wrap gap-2">
                    {f.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </ul>
                  <p className="mt-5 text-xs text-fg-soft">Built on {f.builtOn}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      <Section theme="dark" pad="lg" id="case-studies">
        <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
          <SectionHeader eyebrow="Case studies" title="Eighteen engagements, three sectors." />
          <Reveal className="mt-12" delay={0.1}>
            <CaseStudies />
          </Reveal>
        </div>
      </Section>

      <Cta />
    </>
  );
}
