import type { Metadata } from "next";
import PageHero from "@/components/sections/page-hero";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/motion/reveal";
import Facts from "@/components/ui/facts";
import Disclosure from "@/components/ui/disclosure";
import Cta from "@/components/sections/cta";
import { governanceWorkflow, sixPillars, threeLevels, governanceModules, accelerators, governanceServices } from "@/content/governance";

export const metadata: Metadata = {
  title: "AI Governance",
  description: "Governance run as a workflow: discovery, gap assessment, process governance and implementation — six pillars at three levels, with modular G1–G6 engagements mapped to ISO/IEC 42001, NIST AI RMF and the local regulator.",
  alternates: { canonical: "/ai-governance" },
};

export default function GovernancePage() {
  return (
    <>
      <PageHero
        eyebrow="AI Governance"
        title="Governance, run as a workflow."
        lead="ISO/IEC 42001 certified, NIST AI RMF and EU AI Act aligned — with audit evidence produced as a by-product of running the system, not bolted on afterwards."
        aside={<Facts items={[["Certified", "ISO/IEC 42001"], ["Aligned", "NIST AI RMF · EU AI Act"], ["Listed", "National AI Centre"], ["Tooling", "watsonx · Credo AI"]]} />}
      />

      <Section theme="light" pad="lg" id="services">
        <div className="mx-auto max-w-wide px-gutter">
          <div className="grid-12 gap-y-10">
            <div className="col-span-12 lg:col-span-5">
              <SectionHeader eyebrow="Governance services" title="The same workflow, pillars and evidence we run ourselves." lead="Packaged so a public-sector agency or an enterprise can get from an unmanaged AI estate to an audit-ready one in months, not years." />
            </div>
            <Reveal delay={0.1} className="col-span-12 lg:col-span-6 lg:col-start-7">
              <ol className="divide-y divide-line border-y border-line">
                {governanceServices.map((g, i) => (
                  <li key={g} className="grid grid-cols-[2.5rem_1fr] items-baseline gap-4 py-4">
                    <span className="font-display text-sm text-accent">0{i + 1}</span>
                    <p className="text-[0.9375rem] text-fg sm:text-base">{g}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section theme="paper" pad="lg">
        <div className="mx-auto max-w-wide px-gutter">
          <SectionHeader eyebrow="The workflow" title="Four steps, then it runs." />
          <Reveal className="mt-14" delay={0.1}>
            <ol className="grid gap-px border-y border-line bg-line md:grid-cols-4">
              {governanceWorkflow.map((w) => (
                <li key={w.step} className="relative bg-surface p-6 lg:p-8">
                  <span className="font-display text-sm text-fg-soft">{w.step}</span>
                  <h3 className="mt-3 text-display-xs">{w.name}</h3>
                  <p className="mt-2 text-[0.9375rem] text-fg-muted">{w.body}</p>
                  <span aria-hidden className="absolute right-4 top-6 hidden text-fg-soft md:block last:hidden">→</span>
                </li>
              ))}
            </ol>
            <p className="mt-4 text-sm text-fg-muted">Framework refreshed annually against regulatory change.</p>
          </Reveal>
        </div>
      </Section>

      <Section theme="mist" pad="lg">
        <div className="mx-auto max-w-wide px-gutter">
          <SectionHeader eyebrow="Six pillars hold it up" title="Leadership, policies, risk, controls, training, reporting." />
          <div className="grid-12 gap-y-12 mt-14">
            <div className="col-span-12">
              <Reveal delay={0.1}>
                <ol className="grid gap-px border-y border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
                  {sixPillars.map((p) => (
                    <li key={p.name} className="bg-bg p-6">
                      <h3 className="text-display-xs">{p.name}</h3>
                      <p className="mt-2 text-[0.875rem] text-fg-muted">{p.body}</p>
                      <p className="mt-4 border-t border-line pt-3 text-[0.8125rem] text-fg">{p.proof}</p>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>
            <Reveal className="col-span-12 lg:col-span-6 lg:col-start-7" delay={0.16}>
              <p className="eyebrow">Established at three levels</p>
              <ol className="mt-5 divide-y divide-line border-y border-line">
                {threeLevels.map((l) => (
                  <li key={l.name} className="py-4">
                    <p className="font-medium">{l.name}</p>
                    <p className="text-sm text-fg-muted">{l.body}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section theme="light" pad="lg" id="modules">
        <div className="mx-auto max-w-wide px-gutter">
          <SectionHeader
            eyebrow="Modular governance solutions"
            title="Packaged engagements with fixed scope, milestones and deliverables."
            lead="Each mapped to ISO/IEC 42001, NIST AI RMF and the local regulator."
          />
          <Reveal className="mt-14" delay={0.1}>
            <div>
              {governanceModules.map((m) => (
                <Disclosure key={m.code} code={m.code} title={m.name} meta={m.weeks} summary={m.body}>
                  <div className="rail-amber pl-4">
                    <p className="eyebrow text-amber">Deliverables</p>
                    <p className="mt-2 text-fg">{m.deliverables}</p>
                  </div>
                </Disclosure>
              ))}
            </div>
            <div className="mt-16">
              <p className="eyebrow">Four-week accelerators</p>
              <p className="mt-3 max-w-[52ch] text-[0.9375rem] text-fg-muted">Fixed scope, fixed deliverables. Each draws on one governance module and lands in four weeks.</p>
              <ol className="mt-6 grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
                {accelerators.map((a) => (
                  <li key={a.code} className="flex h-full flex-col bg-bg p-6">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="font-display text-sm text-accent">{a.code}</span>
                      <span className="text-xs text-fg-muted">{a.weeks}</span>
                    </div>
                    <h3 className="mt-3 text-display-xs text-fg">{a.name}</h3>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-fg-muted">{a.body}</p>
                    <p className="mt-auto pt-5 text-xs text-fg-soft">Draws on {a.module}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </Section>

      <Cta eyebrow="Start with an assessment" title="Inventory the estate, tier the risk, price the gap." body="G1 runs four to six weeks and ends with a risk-tiered inventory and a maturity scorecard the board can read." />
    </>
  );
}
