import Link from "next/link";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/motion/reveal";
import { capabilities } from "@/content/home";

const pillarLabel: Record<string, string> = {
  "digital-ai": "Digital AI",
  "physical-ai": "Physical AI",
  "frontier-ai": "Frontier AI",
  "sovereign-ai": "Sovereign AI",
};

/** Capability paired with its outcome, the deck's own device. A matrix, not cards. */
export default function Capabilities() {
  return (
    <Section theme="light" pad="lg" id="capabilities">
      <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
        <div className="grid-12 gap-y-10">
          <div className="lg:col-span-4">
            <SectionHeader
              eyebrow="What we build"
              title="Eight capabilities, each measured by what it delivers."
              lead="Delivered on the customer's cloud and models of choice."
            />
            <Link href="/services" className="link-wipe mt-8 inline-block text-sm font-medium text-fg">
              See the five service lines
            </Link>
          </div>
          <Reveal className="lg:col-span-8" delay={0.1}>
            <ol className="grid border-t border-line sm:grid-cols-2">
              {capabilities.map((c, i) => (
                <li
                  key={c.name}
                  className="group flex flex-col gap-4 border-b border-line py-7 sm:px-6 sm:[&:nth-child(odd)]:pl-0 sm:[&:nth-child(even)]:border-l"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-display-xs">{c.name}</h3>
                    <Link href={`/${c.pillar}`} className="eyebrow shrink-0 hover:text-fg">
                      {pillarLabel[c.pillar]}
                    </Link>
                  </div>
                  <p className="text-[0.9375rem] leading-relaxed text-fg-muted">{c.body}</p>
                  <p className="mt-auto flex gap-3 text-[0.875rem] leading-snug">
                    <span className="eyebrow mt-[0.2em] shrink-0 text-amber">Outcome</span>
                    <span className="text-fg">{c.outcome}</span>
                  </p>
                  <span className="sr-only">{i + 1} of {capabilities.length}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
