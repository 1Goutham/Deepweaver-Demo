import Link from "next/link";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/motion/reveal";
import { sovereignStack } from "@/content/sovereign";
import { fde } from "@/content/services";

export default function FrontierDeep() {
  return (
    <>
      <Section theme="light" pad="lg" id="lifecycle">
        <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="The model lifecycle"
            title="From data to serving, refined on infrastructure the customer controls."
            lead="Four stages, with MLOps, guardrails and assurance across the top and compute and silicon underneath."
          />
          <Reveal className="mt-14" delay={0.1}>
            <div className="overflow-x-auto">
              <ol className="grid min-w-[720px] grid-cols-4 gap-px overflow-hidden rounded-md border border-line bg-line">
                {sovereignStack.stages.map((s) => (
                  <li key={s.step} className="bg-surface p-6">
                    <span className="font-display text-sm text-fg-soft">{s.step}</span>
                    <h3 className="mt-3 text-display-xs font-semibold">{s.name}</h3>
                    <ul className="mt-5 space-y-1.5 text-[0.875rem] text-fg-muted">
                      {s.items.map((i) => (
                        <li key={i}>{i}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[sovereignStack.top, sovereignStack.bottom].map((b) => (
                <div key={b.label} className="flex flex-col gap-2 border-t border-line pt-4 md:flex-row md:gap-6">
                  <span className="eyebrow w-44 shrink-0">{b.label}</span>
                  <ul className="flex flex-wrap gap-x-5 gap-y-1 text-[0.8125rem] text-fg-muted">
                    {b.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section theme="dark" pad="lg" id="fde">
        <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeader eyebrow="Forward-deployed engineering" title="Pilots into production, with an owner." lead={fde.intro} />
              <p className="mt-8 rail-amber pl-5 text-display-xs font-display font-semibold">{fde.sameProblem}</p>
              <Link href="/services#fde" className="link-wipe mt-8 inline-block text-sm font-medium">
                The FDE service line
              </Link>
            </div>
            <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
              <p className="eyebrow">Five disciplines</p>
              <ol className="mt-4 divide-y divide-line border-y border-line">
                {fde.disciplines.map((d, i) => (
                  <li key={d.name} className="grid gap-1 py-4 sm:grid-cols-[2.5rem_1fr]">
                    <span className="font-display text-sm text-fg-soft">0{i + 1}</span>
                    <div>
                      <p className="font-medium">{d.name}</p>
                      <p className="text-sm text-fg-muted">{d.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
