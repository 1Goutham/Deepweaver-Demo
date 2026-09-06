import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/motion/reveal";
import { StaggerList, StaggerItem } from "@/components/motion/stagger";
import Facts from "@/components/ui/facts";
import Cta from "@/components/sections/cta";
import { vision, mission, howWeShowUp, values, regions, verticals } from "@/content/about";

export const metadata: Metadata = {
  title: "About",
  description: "Vision, mission, how we show up and core values; two regions and one deep tech practice; and the exclusive partnership with Nunnari Labs.",
  alternates: { canonical: "/about" },
};

/**
 * About opens on Vision and reads as four brand statements — vision, mission,
 * how we show up, core values — each on its own ground and scale, then the two
 * regions (Australia first) and the partnership. No introductory section.
 */
export default function AboutPage() {
  return (
    <>
      {/* 01 Vision — opens the page. One line, at hero scale, on the dark ground the nav expects. */}
      <section data-theme="dark" id="vision" className="bg-ink pb-20 pt-[152px] text-white md:pb-28 md:pt-[184px] lg:pb-36 lg:pt-[208px]">
        <div className="mx-auto max-w-wide px-gutter">
          <div className="grid-12 gap-y-12">
            <div className="col-span-12 lg:col-span-9">
              <Reveal>
                <p className="eyebrow">Vision</p>
              </Reveal>
              <Reveal delay={0.06}>
                <h1 className="mt-8 max-w-[18ch] text-display-xl text-white lg:mt-10">{vision}</h1>
              </Reveal>
            </div>
            <Reveal delay={0.14} className="col-span-12 lg:col-span-5 lg:col-start-7">
              <Facts items={[["Australia", "Sydney · Melbourne"], ["India", "Coimbatore · Chennai"], ["Certified", "ISO/IEC 42001"], ["Verticals", verticals.join(" · ")]]} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 02 Mission — four commitments on the second edge. */}
      <Section theme="light" pad="lg" id="mission">
        <div className="mx-auto max-w-wide px-gutter">
          <div className="grid-12 gap-y-10">
            <Reveal className="col-span-12 lg:col-span-4">
              <p className="eyebrow">Mission</p>
              <p className="mt-6 max-w-[24ch] text-lead font-light text-fg-muted">What we set out to do, in every engagement.</p>
            </Reveal>
            <StaggerList as="ol" className="col-span-12 border-t border-line lg:col-span-7 lg:col-start-6">
              {mission.map((m, i) => (
                <StaggerItem as="li" key={m} className="grid grid-cols-[2.5rem_1fr] items-baseline gap-4 border-b border-line py-6 sm:py-7">
                  <span className="font-display text-sm text-accent">0{i + 1}</span>
                  <p className="max-w-[26ch] text-display-sm text-fg">{m}</p>
                </StaggerItem>
              ))}
            </StaggerList>
          </div>
        </div>
      </Section>

      {/* 03 How we show up — six statements, three across. */}
      <Section theme="lilac" pad="lg" id="how-we-show-up">
        <div className="mx-auto max-w-wide px-gutter">
          <SectionHeader eyebrow="How we show up" title="What you can expect from the people in the room." />
          <StaggerList as="ul" className="mt-16 grid gap-x-8 gap-y-12 border-t border-line pt-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-y-16">
            {howWeShowUp.map((h, i) => (
              <StaggerItem as="li" key={h}>
                <span className="font-display text-sm text-accent">0{i + 1}</span>
                <p className="mt-4 max-w-[16ch] text-display-sm text-fg">{h}</p>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </Section>

      {/* 04 Core values — four words, at display scale. */}
      <Section theme="paper" pad="lg" id="values">
        <div className="mx-auto max-w-wide px-gutter">
          <Reveal>
            <p className="eyebrow">Core values</p>
          </Reveal>
          <StaggerList as="ul" className="mt-10 grid border-t border-line sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
            {values.map((v, i) => (
              <StaggerItem as="li" key={v} className="border-b border-line py-8 sm:py-10 lg:border-b-0 lg:border-r lg:pr-6 lg:last:border-r-0 lg:[&:nth-child(n+2)]:pl-6">
                <span className="font-display text-sm text-fg-soft">0{i + 1}</span>
                <p className="mt-6 text-display-lg text-fg lg:mt-10">{v}</p>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </Section>

      {/* Where we operate — Australia first. */}
      <Section theme="mist" id="regions">
        <div className="mx-auto max-w-wide px-gutter">
          <SectionHeader eyebrow="Where we operate" title="Two regions, one practice." />
          <div className="mt-14 grid-12 gap-y-14 border-t border-line pt-12 lg:mt-20 lg:pt-16">
            {regions.map((r, i) => (
              <Reveal key={r.country} delay={0.08 * i} className={i === 0 ? "col-span-12 lg:col-span-5" : "col-span-12 lg:col-span-5 lg:col-start-8"}>
                <p className="eyebrow">{r.role}</p>
                <h3 className="mt-4 text-display-lg text-fg">{r.country}</h3>
                <p className="mt-1 text-sm text-fg-muted">{r.cities}</p>
                <ul className="mt-8 divide-y divide-line border-y border-line">
                  {r.points.map((p) => (
                    <li key={p} className="py-3.5 text-[0.9375rem] sm:text-base">
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
        <div className="mx-auto max-w-wide px-gutter">
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
              <h2 className="max-w-[16ch] text-display-md text-fg">One delivery team across Australia and India.</h2>
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
