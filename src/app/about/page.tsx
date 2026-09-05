import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/sections/page-hero";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/motion/reveal";
import Facts from "@/components/ui/facts";
import Cta from "@/components/sections/cta";
import { vision, mission, howWeShowUp, values, outcomes, regions, verticals } from "@/content/about";
import { alliances, trustMarks } from "@/content/home";

export const metadata: Metadata = {
  title: "About",
  description: "Who we are: vision, mission, values, two regions and one deep tech practice — enterprise trust in Australia, research-led engineering in India — with alliances built for enterprise AI.",
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

      <Section theme="light" pad="lg">
        <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
          <div className="grid-12 gap-y-12">
            <Reveal className="lg:col-span-5">
              <p className="eyebrow">Vision</p>
              <p className="mt-5 text-display-md font-display">{vision}</p>
              <p className="eyebrow mt-12">Mission</p>
              <ul className="mt-5 divide-y divide-line border-y border-line">
                {mission.map((m) => (
                  <li key={m} className="py-3.5 text-[0.9375rem]">
                    {m}
                  </li>
                ))}
              </ul>
            </Reveal>
            <div className="grid gap-12 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
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

      <Section theme="dark" pad="lg" id="regions">
        <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
          <SectionHeader eyebrow="Where we operate" title="Two regions, one practice." />
          <div className="mt-14 grid gap-px border-y border-line bg-line md:grid-cols-2">
            {regions.map((r, i) => (
              <Reveal key={r.country} delay={0.08 * i} className="bg-bg p-7 lg:p-10">
                <p className="eyebrow">{r.role}</p>
                <h3 className="mt-3 text-display-md">{r.country}</h3>
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

      <Section theme="light" pad="lg" id="alliances">
        <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
          <SectionHeader eyebrow="Alliances" title="Partnerships built for enterprise AI." />
          <Reveal className="mt-14" delay={0.1}>
            <ol className="grid gap-px border-y border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {alliances.map((a) => (
                <li key={a.name} className="flex flex-col bg-surface p-6 lg:p-7">
                  <div className="flex h-12 items-center">
                    <Image src={a.src} alt={a.name} width={a.w} height={a.h} className="h-7 w-auto max-w-[140px] object-contain" />
                  </div>
                  <p className="eyebrow mt-6">{a.role}</p>
                  <p className="mt-2 text-[0.9375rem]">{a.detail}</p>
                </li>
              ))}
            </ol>
            <ul className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <li className="eyebrow">Responsible AI by design</li>
              {trustMarks.map((t) => (
                <li key={t.label} className="flex items-center gap-2.5 text-sm">
                  <Image src={t.src} alt="" width={64} height={64} className="size-8 rounded-full object-contain" />
                  <span>
                    {t.label} <span className="text-fg-muted">{t.sub}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Cta />
    </>
  );
}
