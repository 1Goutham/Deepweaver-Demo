import type { Metadata } from "next";
import PageHero from "@/components/sections/page-hero";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/motion/reveal";
import { StaggerList, StaggerItem } from "@/components/motion/stagger";
import Facts from "@/components/ui/facts";
import Disclosure from "@/components/ui/disclosure";
import Cta from "@/components/sections/cta";
import { fde } from "@/content/fde";

export const metadata: Metadata = {
  title: "AI FDE",
  description: "AI forward-deployed engineers who sit inside your team, take frontier AI from pilot to production and leave behind people who can run it.",
  alternates: { canonical: "/ai-fde" },
};

export default function AiFdePage() {
  const { intro, areas, who, disciplines, engagement, outcomes, cta } = fde;
  return (
    <>
      <PageHero eyebrow={fde.eyebrow} title={fde.title} lead={fde.lead} aside={<Facts items={fde.facts} />} />

      {/* What our FDEs do */}
      <Section theme="light" pad="lg" id="what">
        <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
          <div className="grid-12 gap-y-12">
            <div className="col-span-12 lg:col-span-5">
              <SectionHeader eyebrow={intro.eyebrow} title={intro.title} />
              <Reveal delay={0.08} className="mt-8">
                <p className="max-w-[44ch] text-[0.9375rem] leading-relaxed text-fg-muted sm:text-base">{intro.body}</p>
                <p className="eyebrow mt-10">Core skills</p>
                <p className="mt-3 max-w-[44ch] text-[0.9375rem] leading-relaxed text-fg">{intro.coreSkills.join(" · ")}</p>
              </Reveal>
            </div>
            <StaggerList as="ol" className="col-span-12 border-t border-line lg:col-span-6 lg:col-start-7">
              {intro.whatWeDo.map(([t, b], i) => (
                <StaggerItem as="li" key={t} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-line py-6">
                  <span className="pt-1 font-display text-sm text-accent">0{i + 1}</span>
                  <div>
                    <h3 className="text-display-xs text-fg">{t}</h3>
                    <p className="mt-2 max-w-[52ch] text-[0.9375rem] leading-relaxed text-fg-muted">{b}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerList>
          </div>
        </div>
      </Section>

      {/* Six areas of work */}
      <Section theme="mist" pad="lg" id="areas">
        <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
          <SectionHeader eyebrow={areas.eyebrow} title={areas.title} lead={areas.sub} />
          <StaggerList as="ol" className="mt-14 grid gap-x-8 border-t border-line md:grid-cols-2 lg:mt-20">
            {areas.items.map(([t, b], i) => (
              <StaggerItem as="li" key={t} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-line py-6">
                <span className="pt-1 font-display text-sm text-accent">0{i + 1}</span>
                <div>
                  <h3 className="text-display-xs text-fg">{t}</h3>
                  <p className="mt-2 max-w-[48ch] text-[0.9375rem] leading-relaxed text-fg-muted">{b}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </Section>

      {/* Who needs one */}
      <Section theme="paper" pad="lg" id="who">
        <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
          <SectionHeader eyebrow={who.eyebrow} title={who.title} lead={who.sub} />
          <StaggerList as="ol" className="mt-14 grid gap-x-8 gap-y-10 border-t border-line pt-10 md:grid-cols-3 lg:mt-20">
            {who.segments.map(([t, b], i) => (
              <StaggerItem as="li" key={t}>
                <span className="font-display text-sm text-fg-soft">0{i + 1}</span>
                <h3 className="mt-4 max-w-[16ch] text-display-sm text-fg">{t}</h3>
                <p className="mt-4 max-w-[40ch] text-[0.9375rem] leading-relaxed text-fg-muted">{b}</p>
              </StaggerItem>
            ))}
          </StaggerList>
          <Reveal delay={0.1} className="mt-16 grid-12 border-t border-line pt-10 lg:mt-20">
            <div className="col-span-12 lg:col-span-9">
              <p className="eyebrow">{who.threadEyebrow}</p>
              <p className="mt-5 max-w-[34ch] text-display-md text-fg">{who.thread}</p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* One engineer, five disciplines */}
      <Section theme="lilac" pad="lg" id="disciplines">
        <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
          <div className="grid-12 gap-y-12">
            <div className="col-span-12 lg:col-span-5">
              <SectionHeader eyebrow={disciplines.eyebrow} title={disciplines.title} />
              <Reveal delay={0.08} className="mt-8">
                <p className="max-w-[44ch] text-[0.9375rem] leading-relaxed text-fg-muted sm:text-base">{disciplines.body}</p>
                <div className="rail-amber mt-10 pl-5">
                  <p className="eyebrow text-amber">{disciplines.costEyebrow}</p>
                  <p className="mt-3 max-w-[44ch] text-[0.9375rem] leading-relaxed text-fg">{disciplines.cost}</p>
                </div>
              </Reveal>
            </div>
            <StaggerList as="ol" className="col-span-12 border-t border-line lg:col-span-6 lg:col-start-7">
              {disciplines.items.map(([t, b], i) => (
                <StaggerItem as="li" key={t} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-line py-5">
                  <span className="pt-0.5 font-display text-sm text-accent">0{i + 1}</span>
                  <div>
                    <p className="font-medium text-fg">{t}</p>
                    <p className="mt-1 text-[0.9375rem] text-fg-muted">{b}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerList>
          </div>
        </div>
      </Section>

      {/* How an engagement runs — six steps, progressively disclosed */}
      <Section theme="light" pad="lg" id="engagement">
        <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
          <SectionHeader eyebrow={engagement.eyebrow} title={engagement.title} />
          <Reveal delay={0.1} className="mt-14 grid-12 lg:mt-20">
            <div className="col-span-12 lg:col-span-9">
              {engagement.steps.map(([t, b], i) => (
                <Disclosure key={t} code={`0${i + 1}`} title={t} defaultOpen={i === 0}>
                  <p className="max-w-[60ch]">{b}</p>
                </Disclosure>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* What you get */}
      <Section theme="paper" pad="lg" id="outcomes">
        <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
          <Reveal>
            <p className="eyebrow">{outcomes.eyebrow}</p>
          </Reveal>
          <StaggerList as="ul" className="mt-10 grid gap-x-8 gap-y-10 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.items.map(([t, b]) => (
              <StaggerItem as="li" key={t}>
                <h3 className="max-w-[14ch] text-display-sm text-fg">{t}</h3>
                <p className="mt-4 max-w-[30ch] text-[0.9375rem] leading-relaxed text-fg-muted">{b}</p>
              </StaggerItem>
            ))}
          </StaggerList>
          <Reveal delay={0.1}>
            <p className="eyebrow mt-16 text-amber">{outcomes.tail}</p>
          </Reveal>
        </div>
      </Section>

      <Cta eyebrow={cta.eyebrow} title={cta.title} body={cta.body} />
    </>
  );
}
