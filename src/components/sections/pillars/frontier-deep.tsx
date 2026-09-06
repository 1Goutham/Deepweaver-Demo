import Link from "next/link";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/motion/reveal";
import { fde } from "@/content/services";

const deliver = [
  ["GenAI & agentic systems", "Enterprise agent platform, vertical agents and multi-agent orchestration — work completed autonomously, exceptions escalated to people."],
  ["Document intelligence", "Extraction, classification, validation and approval routing — manual handling removed, straight-through processing at volume."],
  ["Voice AI", "Real-time voice agents, self-service and live handover — enquiries resolved without queues, service hours extended."],
  ["Enterprise app agents", "Agents embedded in the systems of record with MCP-based integration — adoption without retraining, no change to the system of record."],
  ["Full-stack delivery", "Interfaces, APIs and integration built and tested end to end, like a product team, not a model demo."],
  ["Evaluation & assurance", "Evaluation harnesses, guardrails and a measured baseline before anything goes live."],
] as const;

const packages = [
  ["8–12 weeks", "P2 Enterprise Agents Foundation", "Production environment, architecture blueprints, two live use cases."],
  ["12–16 weeks", "P4 Industry Agents Accelerator", "Vertical agents deployed against the customer's own systems."],
] as const;

const proof = [
  ["ARB Corporation · ASX-listed manufacturer", "12,000+ supplier invoices a month automated on OCI, integrated with JD Edwards — 90% reduction in processing cost.", "/outcomes#supplier-invoice-automation"],
  ["Listed hotel and accommodation group", "Voice AI booking assistant handling availability, reservations and upsell inside the group's own systems.", "/outcomes#voice-ai-hotel-booking"],
  ["State prosecution authority", "Case files summarised, evidence tagged and work routed — inside government security controls.", "/outcomes#government-case-file-summarisation"],
] as const;

export default function FrontierDeep() {
  return (
    <>
      <Section theme="mist" id="deliver">
        <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
          <div className="grid-12 gap-y-12">
            <div className="col-span-12 lg:col-span-5">
              <SectionHeader eyebrow="What it is" title="A pilot proves a model can do the task. Production proves it does it every day." />
              <p className="mt-8 max-w-[44ch] text-[0.9375rem] leading-relaxed text-fg-muted">
                Inside your ERP, your case-management system or your call queue, with someone accountable when it drifts. Our forward-deployed engineers sit with your business and IT teams to close that gap: platform security and governance, observability and integration, connectors, prompt and skills engineering, knowledge management, and onboarding.
              </p>
              <div className="rail-amber mt-8 pl-5">
                <p className="eyebrow text-amber">Outcome</p>
                <p className="mt-2 text-display-xs font-display">Pilots in production, cost per transaction down, cycle time cut.</p>
              </div>
            </div>
            <Reveal delay={0.1} className="col-span-12 lg:col-span-6 lg:col-start-7">
              <p className="eyebrow">What we deliver</p>
              <ol className="mt-4 divide-y divide-line border-y border-line">
                {deliver.map(([t, b]) => (
                  <li key={t} className="py-5">
                    <h3 className="text-display-xs text-fg">{t}</h3>
                    <p className="mt-1.5 max-w-[52ch] text-[0.9375rem] leading-relaxed text-fg-muted">{b}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section theme="light" id="fde">
        <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
          <div className="grid-12 gap-y-12">
            <Reveal className="col-span-12 lg:col-span-6">
              <p className="eyebrow">Forward-deployed engineering · five disciplines</p>
              <ol className="mt-5 divide-y divide-line border-y border-line">
                {fde.disciplines.map((d, i) => (
                  <li key={d.name} className="grid gap-1 py-4 sm:grid-cols-[2.5rem_1fr]">
                    <span className="font-display text-sm text-accent">0{i + 1}</span>
                    <div>
                      <p className="font-medium text-fg">{d.name}</p>
                      <p className="text-sm text-fg-muted">{d.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal delay={0.1} className="col-span-12 lg:col-span-5 lg:col-start-8">
              <p className="eyebrow">Packaged engagements</p>
              <ul className="mt-5 divide-y divide-line border-y border-line">
                {packages.map(([w, t, b]) => (
                  <li key={t} className="py-5">
                    <p className="text-xs text-fg-muted">{w}</p>
                    <p className="mt-1 font-medium text-fg">{t}</p>
                    <p className="mt-1 text-sm text-fg-muted">{b}</p>
                  </li>
                ))}
              </ul>
              <Link href="/digital-ai#packages" className="link-wipe mt-6 inline-block text-sm font-medium text-fg">
                All agentic AI packages
              </Link>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section theme="lilac" id="proof" pad="sm">
        <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
          <p className="eyebrow">Proof</p>
          <Reveal delay={0.06} className="mt-6">
            <ol className="grid gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-3">
              {proof.map(([who, body, href]) => (
                <li key={who} className="flex h-full flex-col bg-bg p-6">
                  <p className="text-[0.8125rem] text-fg-muted">{who}</p>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-fg">{body}</p>
                  <Link href={href} className="link-wipe mt-auto inline-block pt-5 text-sm font-medium text-fg">
                    Read outcome
                  </Link>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
