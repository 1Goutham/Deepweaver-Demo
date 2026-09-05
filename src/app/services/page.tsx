import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/page-hero";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/motion/reveal";
import Facts from "@/components/ui/facts";
import Cta from "@/components/sections/cta";
import { serviceLines } from "@/content/home";
import { fde, engagementModels, howWeWork } from "@/content/services";

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
        lead="From where the programme starts to how value is sustained: consulting and governance, production engineering, physical AI and edge, data for AI, and managed services against an SLA."
        aside={<Facts items={[["Delivery", "Onshore, offshore, blended"], ["Regions", "Australia · India"], ["Certified", "ISO/IEC 42001"]]} />}
      />

      <Section theme="light" pad="lg" id="lines">
        <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
          <div className="grid-12 hidden border-b border-line pb-3 md:grid">
            <span className="eyebrow col-span-6">Service line</span>
            <span className="eyebrow col-span-3">Solutions</span>
            <span className="eyebrow col-span-3">Outcomes</span>
          </div>
          <ol className="divide-y divide-line border-b border-line">
            {serviceLines.map((s, i) => (
              <Reveal as="li" key={s.index} delay={0.05 * i} className="grid-12 gap-y-4 py-8 md:py-10">
                <div className="flex items-baseline gap-4 md:col-span-6">
                  <span className="font-display text-sm text-fg-soft">{s.index}</span>
                  <div>
                    <h2 className="text-display-sm font-medium">
                      <Link href={s.href} className="link-wipe">
                        {s.name}
                      </Link>
                    </h2>
                    <p className="mt-1 text-sm text-fg-muted">{s.kicker}</p>
                  </div>
                </div>
                <ul className="grid gap-y-1.5 text-[0.9375rem] md:col-span-3">
                  {s.solutions.map((x) => (
                    <li key={x} className="flex gap-2.5">
                      <span aria-hidden className="mt-[0.65em] h-px w-3 shrink-0 bg-fg-soft" />
                      {x}
                    </li>
                  ))}
                </ul>
                <p className="text-[0.9375rem] leading-relaxed text-fg-muted md:col-span-3">{s.outcome}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      <Section theme="dark" pad="lg" id="fde">
        <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
          <SectionHeader eyebrow="Service line · Forward-deployed engineering" title="AI forward-deployed engineering." lead={fde.intro} size="lg" />
          <div className="mt-14 grid gap-px border-y border-line bg-line lg:grid-cols-3">
            <Reveal className="bg-bg p-7 lg:p-8">
              <p className="eyebrow">Areas of focus</p>
              <ol className="mt-5 space-y-3">
                {fde.focus.map((f, i) => (
                  <li key={f} className="flex gap-4 text-[0.9375rem]">
                    <span className="font-display text-xs text-fg-soft">0{i + 1}</span>
                    {f}
                  </li>
                ))}
              </ol>
              <p className="eyebrow mt-8 text-amber">Enablement · Adoption · ROI</p>
            </Reveal>
            <Reveal className="bg-bg p-7 lg:p-8" delay={0.08}>
              <p className="eyebrow">Who needs an FDE</p>
              <ul className="mt-5 space-y-5">
                {fde.who.map((w) => (
                  <li key={w.who}>
                    <p className="font-medium">{w.who}</p>
                    <p className="mt-0.5 text-sm text-fg-muted">{w.body}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-8 rounded-sm bg-surface-2 p-4 text-sm">{fde.sameProblem}</p>
            </Reveal>
            <Reveal className="rail-amber bg-surface-2 p-7 lg:p-8" delay={0.16}>
              <p className="eyebrow text-amber">Skillsets · five disciplines</p>
              <ul className="mt-5 space-y-4">
                {fde.disciplines.map((d) => (
                  <li key={d.name}>
                    <p className="font-medium">{d.name}</p>
                    <p className="mt-0.5 text-sm text-fg-muted">{d.body}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section theme="light" pad="lg" id="engagement">
        <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
          <SectionHeader eyebrow="How we work" title="Five engagement models." lead="Shaped to how you buy and how you are audited." />
          <Reveal className="mt-14" delay={0.1}>
            <ol className="grid gap-px border-y border-line bg-line md:grid-cols-5">
              {engagementModels.map((m, i) => (
                <li key={m.name} className="bg-surface p-6">
                  <span className="font-display text-sm text-fg-soft">0{i + 1}</span>
                  <h3 className="mt-3 text-display-xs font-medium">{m.name}</h3>
                  <p className="mt-3 text-[0.875rem] leading-relaxed text-fg-muted">{m.body}</p>
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
