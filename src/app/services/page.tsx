import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/page-hero";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/motion/reveal";
import Facts from "@/components/ui/facts";
import Cta from "@/components/sections/cta";
import { serviceLines } from "@/content/home";
import { engagementModels, howWeWork } from "@/content/services";
import { fde } from "@/content/fde";
import Button from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Services",
  description: "Five service lines — AI consulting and governance, production AI engineering, physical AI and edge, data for AI, and managed AI services — plus forward-deployed engineering and five engagement models.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Five service lines, one owner for the outcome."
        lead="From the first governance conversation to the AIOps that keeps it running — each line has a named outcome you can hold us to."
        aside={<Facts items={[["Delivery", "Onshore, offshore, blended"], ["Regions", "Australia · India"], ["Certified", "ISO/IEC 42001"]]} />}
      />

      <Section theme="light" pad="lg" id="lines">
        <div className="mx-auto max-w-wide px-gutter">
          <div className="grid-12 hidden border-b border-line pb-3 md:grid">
            <span className="eyebrow col-span-6">Service line</span>
            <span className="eyebrow col-span-3">Solutions</span>
            <span className="eyebrow col-span-3">Outcomes</span>
          </div>
          <ol className="divide-y divide-line border-b border-line">
            {serviceLines.map((s, i) => (
              <Reveal as="li" key={s.index} delay={0.05 * i} className="grid-12 gap-y-4 py-8 md:py-10">
                <div className="col-span-12 flex items-baseline gap-4 md:col-span-6">
                  <span className="font-display text-sm text-fg-soft">{s.index}</span>
                  <div>
                    <h2 className="text-display-sm">
                      <Link href={s.href} className="link-wipe">
                        {s.name}
                      </Link>
                    </h2>
                    <p className="mt-1 text-sm text-fg-muted">{s.kicker}</p>
                  </div>
                </div>
                <ul className="col-span-12 grid gap-y-1.5 text-[0.9375rem] md:col-span-3">
                  {s.solutions.map((x) => (
                    <li key={x} className="flex gap-2.5">
                      <span aria-hidden className="mt-[0.65em] h-px w-3 shrink-0 bg-fg-soft" />
                      {x}
                    </li>
                  ))}
                </ul>
                <p className="col-span-12 text-[0.9375rem] leading-relaxed text-fg-muted md:col-span-3">{s.outcome}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      <Section theme="lilac" pad="lg" id="fde">
        <div className="mx-auto max-w-wide px-gutter">
          <div className="grid-12 gap-y-10 lg:items-end">
            <div className="col-span-12 lg:col-span-7">
              <SectionHeader eyebrow="AI forward-deployed engineering" title="Blended consulting and AI engineering, inside your teams." lead={fde.intro.body} />
            </div>
            <Reveal delay={0.1} className="col-span-12 lg:col-span-4 lg:col-start-9 lg:justify-self-end">
              <Button href="/ai-fde">How an FDE engagement runs</Button>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section theme="light" pad="lg" id="engagement">
        <div className="mx-auto max-w-wide px-gutter">
          <SectionHeader eyebrow="How we work" title="Five engagement models." lead="Shaped to how you buy and how you are audited." />
          <Reveal className="mt-14" delay={0.1}>
            <ol className="border-t border-line">
              {engagementModels.map((m, i) => (
                <li key={m.name} className="grid-12 items-baseline border-b border-line py-6 md:py-7">
                  <span className="col-span-12 flex items-baseline gap-5 lg:col-span-6">
                    <span className="w-6 font-display text-sm text-accent">0{i + 1}</span>
                    <h3 className="font-display text-display-sm text-fg">{m.name}</h3>
                  </span>
                  <p className="col-span-12 mt-2 pl-11 text-[0.9375rem] text-fg-muted lg:col-span-5 lg:col-start-7 lg:mt-0 lg:pl-0">{m.body}</p>
                </li>
              ))}
            </ol>
            <dl className="mt-10 grid gap-8 border-t border-line pt-8 md:grid-cols-3" id="managed">
              {[
                ["Skills we bring", howWeWork.skills],
                ["Delivery shape", howWeWork.shape],
                ["Support", howWeWork.support],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="eyebrow">{k}</dt>
                  <dd className="mt-3 text-[0.9375rem] leading-relaxed text-fg-muted">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Section>

      <Cta />
    </>
  );
}
