import type { Metadata } from "next";
import PageHero from "@/components/sections/page-hero";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/motion/reveal";
import Facts from "@/components/ui/facts";
import Cta from "@/components/sections/cta";
import { factoryStack, whoNeeds, factoryFunctions, factoryOutcomes, deployment } from "@/content/factory";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "The Factory Brain",
  description: "The orchestration layer between ERP and PLC — the one neither system covers. AI recommends, humans approve, the PLC executes. Cloud, hybrid or on-premise.",
  alternates: { canonical: "/factory-brain" },
};

export default function FactoryBrainPage() {
  return (
    <>
      <PageHero
        eyebrow="Manufacturing"
        title="The Factory Brain."
        lead="The orchestration layer between ERP and PLC — the one neither system covers. AI recommends. Humans approve. The PLC executes."
        aside={<Facts items={[["Posture", "Cloud · Hybrid · On-premise"], ["Time to value", "4 to 12+ weeks"], ["Principle", "AI never replaces the PLC"]]} />}
      />

      <Section theme="light" pad="lg">
        <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
          <div className="grid-12 gap-y-12">
            <Reveal className="col-span-12 lg:col-span-6">
              <p className="eyebrow mb-5">Where it sits</p>
              <ol className="space-y-2">
                {factoryStack.map((l, i) => (
                  <li key={l.layer} className="relative">
                    <div
                      className={cn(
                        "rounded-sm border px-5 py-4",
                        l.tone === "brand" && "border-transparent bg-ink text-white",
                        l.tone === "amber" && "rail-amber border-line bg-surface",
                        l.tone === "neutral" && "border-line bg-surface",
                      )}
                    >
                      <p className={cn("eyebrow", l.tone === "brand" && "text-lavender")}>{l.layer}</p>
                      <p className={cn("mt-1.5 text-[0.9375rem]", l.tone === "brand" ? "text-white" : "text-fg")}>{l.body}</p>
                    </div>
                    {i < factoryStack.length - 1 && (
                      <span aria-hidden className="mx-auto block h-2 w-px bg-line-strong" />
                    )}
                  </li>
                ))}
              </ol>
            </Reveal>
            <div className="col-span-12 lg:col-span-6 lg:col-start-7">
              <SectionHeader eyebrow="Who needs a Factory Brain" title="If any of these sound familiar." />
              <Reveal className="mt-10" delay={0.1}>
                <ul className="divide-y divide-line border-y border-line">
                  {whoNeeds.map((w) => (
                    <li key={w.name} className="py-4">
                      <p className="font-medium">{w.name}</p>
                      <p className="text-sm text-fg-muted">{w.body}</p>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-sm text-fg-muted">
                  <span className="eyebrow block text-amber">Industry validation</span>
                  <span className="mt-2 block">Siemens, ABB and Hitachi all orchestrate above the PLC rather than replacing it — AI predicts and recommends, automation executes, humans approve.</span>
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </Section>

      <Section theme="lilac" pad="lg" id="functions">
        <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
          <SectionHeader eyebrow="What the Factory Brain does" title="Seven areas, one planning layer." lead="AI never replaces the PLC. It makes PLC-driven factories smarter." />
          <Reveal className="mt-14" delay={0.1}>
            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {factoryFunctions.map((f) => (
                <div key={f.area} className="border-t border-line pt-4">
                  <h3 className="text-display-xs">{f.area}</h3>
                  <ul className="mt-3 space-y-1.5 text-[0.875rem] text-fg-muted">
                    {f.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section theme="light" pad="lg">
        <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
          <div className="grid-12 gap-y-12">
            <Reveal className="col-span-12 lg:col-span-7">
              <p className="eyebrow mb-6">Typical measurable outcomes</p>
              <dl className="grid gap-8 sm:grid-cols-2">
                {factoryOutcomes.map((o) => (
                  <div key={o.label} className="border-t border-line pt-4">
                    <dd className="font-display text-display-md">{o.metric}</dd>
                    <dt className="mt-1 text-[0.9375rem]">{o.label}</dt>
                    <p className="text-sm text-fg-muted">{o.sub}</p>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal className="col-span-12 lg:col-span-5 lg:col-start-8" delay={0.1}>
              <p className="eyebrow mb-6">Deployment posture</p>
              <ol className="divide-y divide-line border-y border-line">
                {deployment.map((d) => (
                  <li key={d.name} className="flex items-baseline justify-between gap-6 py-4">
                    <span className="font-medium">{d.name}</span>
                    <span className="text-sm text-fg-muted">{d.body}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </Section>

      <Cta eyebrow="Manufacturing" title="Put a planning layer between your ERP and your PLC." body="Start with one plant, one bottleneck — scheduling, maintenance or quality — and measure idle time, scheduling effort and on-time delivery from week one." />
    </>
  );
}
