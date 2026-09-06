import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/motion/reveal";
import Disclosure from "@/components/ui/disclosure";
import { agenticPackages, agentStack, agenticUseCases } from "@/content/services";

export default function DigitalDeep() {
  return (
    <>
      <Section theme="light" pad="lg" id="packages">
        <div className="mx-auto max-w-wide px-gutter">
          <SectionHeader
            eyebrow="Agentic AI"
            title="Enterprise agents in production."
            lead="Packaged engagements with fixed scope and deliverables — from readiness, through a production agent foundation, to AgentOps and industry accelerators."
          />
          <Reveal className="mt-14" delay={0.1}>
            <div>
              {agenticPackages.map((pk) => (
                <Disclosure key={pk.code} code={pk.code} title={pk.name} meta={pk.weeks} summary={pk.body}>
                  <div className="grid gap-8 md:grid-cols-2">
                    <ul className="space-y-1.5">
                      {pk.items.map((i) => (
                        <li key={i} className="flex gap-3">
                          <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-fg-soft" />
                          {i}
                        </li>
                      ))}
                    </ul>
                    <div className="rail-amber pl-4">
                      <p className="eyebrow text-amber">Deliverable</p>
                      <p className="mt-2 text-fg">{pk.deliverable}</p>
                    </div>
                  </div>
                </Disclosure>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 md:flex-row md:items-center md:gap-8">
              <span className="eyebrow shrink-0">Delivered on the full agent stack</span>
              <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-fg-muted">
                {agentStack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section theme="lilac" pad="lg">
        <div className="mx-auto max-w-wide px-gutter">
          <SectionHeader
            eyebrow="Agentic use cases by domain"
            title="One platform and one governance layer underneath, four books of work on top."
          />
          <Reveal className="mt-14 grid gap-px border-y border-line bg-line md:grid-cols-2 xl:grid-cols-4" delay={0.1}>
            {agenticUseCases.map((d) => (
              <div key={d.domain} className="bg-bg p-6 lg:p-8">
                <h3 className="text-display-xs">{d.domain}</h3>
                <ul className="mt-6 divide-y divide-line">
                  {d.cases.map(([name, body]) => (
                    <li key={name} className="py-3.5">
                      <p className="text-[0.9375rem] font-medium text-fg">{name}</p>
                      <p className="mt-0.5 text-[0.8125rem] text-fg-muted">{body}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>
        </div>
      </Section>
    </>
  );
}
