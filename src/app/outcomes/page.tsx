import type { Metadata } from "next";
import PageHero from "@/components/sections/page-hero";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/motion/reveal";
import Tag from "@/components/ui/tag";
import Facts from "@/components/ui/facts";
import Cta from "@/components/sections/cta";
import Image from "next/image";
import Link from "next/link";
import { stories, engagements, flagshipStories } from "@/content/outcomes";

export const metadata: Metadata = {
  title: "Outcomes",
  description: "Production AI systems in operation across regulated and public sector, manufacturing, healthcare, and retail — in India and Australia.",
  alternates: { canonical: "/outcomes" },
};

export default function OutcomesPage() {
  return (
    <>
      <PageHero
        eyebrow="Outcomes"
        title="Outcomes we delivered for enterprises and factories."
        lead="Across regulated and public sector, manufacturing, healthcare, and retail, where AI has to hold up under audit and on the floor."
        aside={<Facts items={[["Sectors", "Public sector · Manufacturing · Health · Retail"], ["Regions", "Australia · India"]]} />}
      />

      <Section theme="paper" id="flagship">
        <div className="mx-auto max-w-wide px-gutter">
          <SectionHeader eyebrow="Flagship customer stories" title="Named clients, measured outcomes." />
          <ol className="mt-14 border-t border-line lg:mt-20">
            {flagshipStories.map((f, i) => (
              <Reveal as="li" key={f.client} delay={0.05 * i} className="border-b border-line py-10 lg:py-12">
                <Link href={f.href} className="group grid-12 gap-y-8">
                  <div className="col-span-12 lg:col-span-3">
                    <Image src={f.logo} alt={f.client} width={600} height={200} className="h-9 w-auto max-w-[160px] object-contain brightness-0 opacity-85" />
                    <p className="mt-6 font-medium text-fg">{f.client}</p>
                    <p className="mt-1 text-sm text-fg-muted">{f.pillar}</p>
                  </div>
                  <div className="col-span-12 grid gap-8 md:grid-cols-3 lg:col-span-9 lg:col-start-4">
                    {([["Problem", f.problem], ["Solution", f.solution], ["Outcome", f.outcome]] as const).map(([t, b]) => (
                      <div key={t}>
                        <p className="eyebrow">{t}</p>
                        <p className={t === "Outcome" ? "mt-3 text-[0.9375rem] leading-relaxed text-fg" : "mt-3 text-[0.9375rem] leading-relaxed text-fg-muted"}>{b}</p>
                      </div>
                    ))}
                  </div>
                </Link>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      <Section theme="light" id="stories">
        <div className="mx-auto max-w-wide px-gutter">
          <ol className="grid gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-2">
            {stories.map((s, i) => (
              <Reveal as="li" key={s.slug} id={s.slug} delay={0.04 * (i % 2)} className="flex h-full flex-col bg-bg p-6 sm:p-8 lg:p-9">
                <p className="text-[0.8125rem] text-fg-muted">{s.industry}</p>
                <h2 className="mt-4 max-w-[26ch] text-display-sm text-fg">{s.title}</h2>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-fg-muted">{s.description}</p>
                <ul className="mt-auto flex flex-wrap gap-2 pt-7">
                  <Tag className="border-line-strong text-fg">{s.system}</Tag>
                  {s.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      <Section theme="mist" id="engagements">
        <div className="mx-auto max-w-wide px-gutter">
          <Reveal>
            <p className="eyebrow">More engagements</p>
          </Reveal>
          <Reveal delay={0.1} className="mt-12 lg:mt-16">
            <ol className="grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {engagements.map((e, i) => (
                <li key={`${e.client}-${i}`} className="flex h-full flex-col bg-bg p-6">
                  <p className="eyebrow">{e.sector}</p>
                  <h3 className="mt-3 text-display-xs text-fg">{e.client}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-fg-muted">{e.body}</p>
                  <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                    {e.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Section>

      <Cta />
    </>
  );
}
