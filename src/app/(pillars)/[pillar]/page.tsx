import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/sections/page-hero";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/motion/reveal";
import Cta from "@/components/sections/cta";
import { pillars, pillarBySlug } from "@/content/pillars";
import DigitalDeep from "@/components/sections/pillars/digital-deep";
import PhysicalDeep from "@/components/sections/pillars/physical-deep";
import FrontierDeep from "@/components/sections/pillars/frontier-deep";
import SovereignDeep from "@/components/sections/pillars/sovereign-deep";

export const dynamicParams = false;

export function generateStaticParams() {
  return pillars.map((p) => ({ pillar: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ pillar: string }> }): Promise<Metadata> {
  const { pillar } = await params;
  const p = pillarBySlug(pillar);
  if (!p) return {};
  return {
    title: p.name,
    description: p.short,
    alternates: { canonical: `/${p.slug}` },
    openGraph: { title: `${p.name} — DeepWeaver`, description: p.short, url: `/${p.slug}` },
  };
}

const DEEP = {
  "digital-ai": DigitalDeep,
  "physical-ai": PhysicalDeep,
  "frontier-ai": FrontierDeep,
  "sovereign-ai": SovereignDeep,
} as const;

export default async function PillarPage({ params }: { params: Promise<{ pillar: string }> }) {
  const { pillar } = await params;
  const p = pillarBySlug(pillar);
  if (!p) notFound();
  const Deep = DEEP[p.slug];
  const idx = pillars.findIndex((x) => x.slug === p.slug);
  const next = pillars[(idx + 1) % pillars.length];
  // Definitions are written "Layer name: what it covers" — split for display.
  const [defTitle, ...defRest] = p.definition.split(": ");
  const defLead = defRest.join(": ");
  const richApps = p.applications.some((a) => a.body);

  return (
    <>
      <PageHero eyebrow={p.name} title={p.headline} lead={p.intro} />

      <Section theme="light" pad="lg">
        <div className="mx-auto max-w-wide px-gutter">
          <div className="grid-12 gap-y-12">
            <div className="col-span-12 lg:col-span-5">
              <SectionHeader eyebrow="What it means" title={defTitle} lead={defLead} size="md" as="h2" />
              <Reveal delay={0.08} className="rail-amber mt-10 max-w-[40ch] pl-5">
                <p className="eyebrow text-amber">Outcome</p>
                <p className="mt-3 text-display-xs font-display text-fg">{p.outcome}</p>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{p.outcomeDetail}</p>
              </Reveal>
            </div>
            <Reveal className="col-span-12 lg:col-span-6 lg:col-start-7" delay={0.1}>
              <p className="eyebrow mb-2">{p.capabilitiesEyebrow}</p>
              <ol className="divide-y divide-line border-y border-line">
                {p.capabilities.map((c, i) => (
                  <li key={c.name} className="grid gap-2 py-6 md:grid-cols-[2rem_1fr] md:gap-x-6">
                    <span className="font-display text-sm text-fg-soft">0{i + 1}</span>
                    <div>
                      <h3 className="text-display-xs">{c.name}</h3>
                      <p className="mt-2 max-w-[48ch] text-[0.9375rem] leading-relaxed text-fg-muted">{c.body}</p>
                      {c.outcome && <p className="mt-2 max-w-[48ch] text-[0.9375rem] leading-relaxed text-fg">{c.outcome}</p>}
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section theme="mist" pad="md">
        <div className="mx-auto max-w-wide px-gutter">
          <div className="grid-12 gap-y-12">
            <div className="col-span-12 lg:col-span-5">
              <SectionHeader eyebrow={p.applicationsEyebrow} title={p.applicationsTitle} />
              <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
                {p.related.map((r) => (
                  <li key={r.href}>
                    <Link href={r.href} className="link-wipe text-sm font-medium text-fg">
                      {r.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <Reveal className="col-span-12 lg:col-span-6 lg:col-start-7" delay={0.1}>
              <ul className="divide-y divide-line border-y border-line">
                {p.applications.map((a) => (
                  <li key={a.name} className={richApps ? "py-5" : "flex items-baseline gap-4 py-4 text-[0.9375rem]"}>
                    {richApps ? (
                      <>
                        <p className="text-display-xs text-fg">{a.name}</p>
                        {a.body && <p className="mt-1.5 max-w-[52ch] text-[0.9375rem] leading-relaxed text-fg-muted">{a.body}</p>}
                      </>
                    ) : (
                      <>
                        <span aria-hidden className="h-px w-4 shrink-0 bg-violet" />
                        {a.name}
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Section>

      <Deep />

      <Section theme="light" pad="sm" className="border-t border-line">
        <div className="mx-auto flex max-w-wide items-center justify-between gap-6 px-gutter">
          <p className="eyebrow">Next domain</p>
          <Link href={`/${next.slug}`} className="group text-right">
            <span className="link-wipe font-display text-display-sm">{next.name}</span>
          </Link>
        </div>
      </Section>

      <Cta />
    </>
  );
}
