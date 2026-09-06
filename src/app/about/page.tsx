import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/sections/page-hero";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/motion/reveal";
import Facts from "@/components/ui/facts";
import Cta from "@/components/sections/cta";
import { vision, mission, howWeShowUp, values, outcomes, regions, verticals } from "@/content/about";

export const metadata: Metadata = {
  title: "About",
  description: "Who we are: vision, mission and outcomes, two regions and one deep tech practice, and the exclusive partnership with Nunnari Labs.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title="Two regions, one deep tech practice."
        lead="Enterprise trust in Australia, research-led engineering in India. Pure-play AI experts, ethical and responsible by design, accountable for results rather than effort."
        aside={<Facts items={[["Australia", "Sydney · Melbourne"], ["India", "Coimbatore · Chennai"], ["Certified", "ISO/IEC 42001"], ["Verticals", verticals.join(" · ")]]} />}
      />

      <Section theme="light">
        <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
          <div className="grid-12 gap-y-12">
            <Reveal className="col-span-12 lg:col-span-5">
              <p className="eyebrow">Vision</p>
              <p className="mt-5 max-w-[20ch] text-display-md text-fg">{vision}</p>
              <p className="eyebrow mt-12">Mission</p>
              <ul className="mt-5 divide-y divide-line border-y border-line">
                {mission.map((m) => (
                  <li key={m} className="py-3.5 text-[0.9375rem]">
                    {m}
                  </li>
                ))}
              </ul>
            </Reveal>
            <div className="col-span-12 grid gap-12 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
              <Reveal delay={0.08}>
                <p className="eyebrow">How we show up</p>
                <ul className="mt-5 space-y-2.5 text-[0.9375rem]">
                  {howWeShowUp.map((h) => (
                    <li key={h} className="flex gap-3">
                      <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-fg-soft" />
                      {h}
                    </li>
                  ))}
                </ul>
                <p className="eyebrow mt-10">Core values</p>
                <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-display text-display-xs">
                  {values.map((v) => (
                    <li key={v}>{v}</li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.16} className="rail-amber pl-5">
                <p className="eyebrow text-amber">Outcomes</p>
                <p className="mt-4 text-display-xs font-display">We own the outcome end to end.</p>
                <ul className="mt-5 space-y-2.5 text-[0.9375rem] text-fg-muted">
                  {outcomes.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </Section>

      <Section theme="mist" id="regions">
        <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
          <SectionHeader eyebrow="Where we operate" title="Two regions, one practice." />
          <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-2 lg:mt-16">
            {regions.map((r, i) => (
              <Reveal key={r.country} delay={0.08 * i} className="bg-bg p-6 sm:p-8 lg:p-10">
                <p className="eyebrow">{r.role}</p>
                <h3 className="mt-3 text-display-md text-fg">{r.country}</h3>
                <p className="mt-1 text-sm text-fg-muted">{r.cities}</p>
                <ul className="mt-7 divide-y divide-line border-y border-line">
                  {r.points.map((p) => (
                    <li key={p} className="py-3 text-[0.9375rem]">
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section theme="paper" id="partnership">
        <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
          <div className="grid-12 gap-y-10">
            <Reveal className="col-span-12 lg:col-span-6">
              <p className="eyebrow">Exclusive partnership</p>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-5">
                <Image src="/brand/deepweaver-lockup-navy.png" alt="DeepWeaver" width={2048} height={402} className="h-8 w-auto sm:h-9" />
                <span aria-hidden className="font-display text-display-sm font-light text-fg-soft">×</span>
                <Image src="/partners/nunnari-labs-navy.png" alt="Nunnari Labs" width={274} height={322} className="h-16 w-auto sm:h-20" />
              </div>
            </Reveal>
            <Reveal delay={0.08} className="col-span-12 lg:col-span-5 lg:col-start-7">
              <h2 className="max-w-[16ch] text-display-md text-fg">One delivery team across India and Australia.</h2>
              <p className="mt-6 max-w-[44ch] text-lead font-light text-fg-muted">
                DeepWeaver leads client engagement in Australia and New Zealand from Sydney. Nunnari Labs leads research and engineering from Coimbatore. One project history, one governance layer, no hand-offs between companies.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.14} className="mt-14 lg:mt-20">
            <div className="grid-12 gap-y-10 border-t border-line pt-10">
              <div className="col-span-12 lg:col-span-5">
                <h3 className="font-display text-display-sm text-fg">DeepWeaver</h3>
                <p className="mt-1 text-sm text-fg-muted">Sydney · Melbourne</p>
                <p className="mt-5 max-w-[40ch] text-[0.9375rem] leading-relaxed text-fg-muted">
                  Enterprise and public-sector relationships. AI consulting, governance and risk frameworks. Cloud and frontier-model partner channels.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-5 lg:col-start-7">
                <h3 className="font-display text-display-sm text-fg">Nunnari Labs</h3>
                <p className="mt-1 text-sm text-fg-muted">Coimbatore · Chennai</p>
                <p className="mt-5 max-w-[40ch] text-[0.9375rem] leading-relaxed text-fg-muted">
                  Research-led AI engineering, ISO/IEC 42001 certified. Digital AI build, plus Physical AI, edge and robotics. The AI Tamil Nadu community as a talent pipeline.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Cta />
    </>
  );
}
