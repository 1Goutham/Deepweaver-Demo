import Image from "next/image";
import Link from "next/link";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/motion/reveal";
import Button from "@/components/ui/button";
import { fde } from "@/content/fde";

const covers = [
  "Channel access to Claude models for enterprise and government",
  "Forward-deployed engineers embedded with client teams",
  "Governed deployments: evaluation, guardrails, audit evidence",
];

export default function FrontierDeep() {
  return (
    <>
      <Section theme="light" pad="lg" id="platform">
        <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
          <div className="grid-12 gap-y-12">
            <div className="col-span-12 lg:col-span-6">
              <SectionHeader eyebrow="The Frontier platform · with Anthropic" title="Claude, delivered as a platform your enterprise can run." />
              <Reveal delay={0.08} className="mt-8">
                <p className="max-w-[48ch] text-[0.9375rem] leading-relaxed text-fg-muted sm:text-base">
                  An Anthropic channel and forward-deployed engineering partnership is how we bring Claude into enterprise and government work in Australia and India: five layers that take an organisation from first access to frontier models running in production, under its own governance.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.12} className="col-span-12 lg:col-span-5 lg:col-start-8">
              <Image src="/logos/anthropic.png" alt="Anthropic" width={676} height={97} className="h-6 w-auto" />
              <p className="eyebrow mt-10">What the partnership covers</p>
              <ul className="mt-4 divide-y divide-line border-y border-line">
                {covers.map((c) => (
                  <li key={c} className="py-3.5 text-[0.9375rem] text-fg">
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section theme="lilac" pad="lg" id="fde">
        <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
          <div className="grid-12 gap-y-12">
            <div className="col-span-12 lg:col-span-6">
              <SectionHeader eyebrow="Forward-deployed engineering" title="Blended consulting and AI engineering, inside your teams." />
              <Reveal delay={0.08} className="mt-8">
                <p className="max-w-[48ch] text-[0.9375rem] leading-relaxed text-fg-muted sm:text-base">
                  A forward-deployed engineer works with business and IT stakeholders to take AI pilots into production — and stays until the organisation can carry it. Enablement, adoption, ROI.
                </p>
                <div className="mt-8">
                  <Button href="/ai-fde" variant="ghost">
                    How an FDE engagement runs
                  </Button>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.12} className="col-span-12 lg:col-span-5 lg:col-start-8">
              <p className="eyebrow">One engineer, five disciplines</p>
              <ol className="mt-4 divide-y divide-line border-y border-line">
                {fde.disciplines.items.map(([t, b], i) => (
                  <li key={t} className="grid grid-cols-[2.5rem_1fr] gap-4 py-4">
                    <span className="font-display text-sm text-accent">0{i + 1}</span>
                    <div>
                      <p className="font-medium text-fg">{t}</p>
                      <p className="mt-0.5 text-sm text-fg-muted">{b}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <Link href="/ai-fde#who" className="link-wipe mt-6 inline-block text-sm font-medium text-fg">
                Who needs an FDE
              </Link>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
