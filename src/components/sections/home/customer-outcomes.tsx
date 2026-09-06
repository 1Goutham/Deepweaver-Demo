import Link from "next/link";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/motion/reveal";
import Tag from "@/components/ui/tag";
import { StaggerList, StaggerItem } from "@/components/motion/stagger";
import { customerOutcomes } from "@/content/home";

/** Four flagship stories, one per domain, on the single navy block of the page. */
export default function CustomerOutcomes() {
  const { eyebrow, title, sub, stories } = customerOutcomes;
  return (
    <Section id="outcomes" theme="dark">
      <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
        <div className="grid-12 gap-y-8 lg:items-end">
          <div className="col-span-12 lg:col-span-8">
            <SectionHeader eyebrow={eyebrow} title={title} lead={sub} />
          </div>
          <Reveal delay={0.1} className="col-span-12 lg:col-span-4 lg:justify-self-end">
            <Link href="/outcomes" className="link-wipe inline-flex items-center gap-2 text-[0.9375rem] font-medium text-fg">
              View all outcomes <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>

        <StaggerList className="mt-12 grid gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-2 lg:mt-16">
          {stories.map((s) => (
            <StaggerItem key={s.slug} className="flex h-full flex-col bg-bg p-6 sm:p-8 lg:p-10">
              <div className="flex items-baseline justify-between gap-4">
                <p className="eyebrow">{s.domain}</p>
                <p className="text-[0.8125rem] text-fg-muted">{s.industry}</p>
              </div>
              <h3 className="mt-5 max-w-[22ch] text-display-sm text-fg">{s.headline}</h3>
              <p className="mt-3 max-w-[48ch] text-[0.9375rem] leading-relaxed text-fg-muted">{s.detail}</p>
              <div className="mt-7 flex flex-wrap items-baseline gap-x-4 gap-y-1 border-t border-line pt-6">
                <span className="font-display text-display-md text-fg">{s.metric}</span>
                <span className="text-sm text-fg-muted">{s.metricLabel}</span>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                <Tag className="border-line-strong text-fg">{s.system}</Tag>
                {s.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </StaggerList>
      </div>
    </Section>
  );
}
