import Image from "next/image";
import Link from "next/link";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/motion/reveal";
import Stat from "@/components/ui/stat";
import Tag from "@/components/ui/tag";
import Button from "@/components/ui/button";
import { flagships, caseStudies } from "@/content/work";

export default function Proof() {
  const [arb, landcom, hearsight] = flagships;
  return (
    <Section theme="dark" pad="lg" id="proof">
      <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeader eyebrow="Proof" title="Production systems in enterprise and government." size="lg" />
          <Reveal delay={0.1} className="shrink-0">
            <p className="text-sm text-fg-muted">
              <span className="font-display text-display-sm font-semibold text-fg">{caseStudies.length + flagships.length}</span> engagements ·{" "}
              <Link href="/work" className="link-wipe font-medium text-fg">
                All work
              </Link>
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-md border border-line bg-line md:mt-20 lg:grid-cols-12">
          {/* ARB — the lead story */}
          <Reveal className="bg-bg p-7 sm:p-10 lg:col-span-7 lg:p-12" id="arb">
            <div className="flex items-center justify-between gap-6">
              <div>
                <p className="eyebrow">Flagship · {arb.pillar}</p>
                <h3 className="mt-3 text-display-md font-semibold">{arb.client}</h3>
                <p className="mt-1 text-sm text-fg-muted">{arb.kicker}</p>
              </div>
              {arb.logo && (
                <span className="hidden rounded-xs bg-white px-3 py-2 sm:block">
                  <Image src={arb.logo.src} alt="" width={arb.logo.w} height={arb.logo.h} className="h-8 w-auto" />
                </span>
              )}
            </div>
            <p className="mt-6 max-w-[58ch] text-[0.9375rem] leading-relaxed text-fg-muted">{arb.summary}</p>
            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-line pt-8">
              {arb.metrics.map((m) => (
                <Stat key={m.label} value={m.value} prefix={m.prefix} suffix={m.suffix} decimals={m.decimals} label={m.label} size="lg" />
              ))}
            </div>
            <ul className="mt-8 flex flex-wrap gap-2">
              {arb.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </ul>
            <p className="mt-6 text-xs text-fg-soft">Built on {arb.builtOn}</p>
          </Reveal>

          <div className="grid gap-px bg-line lg:col-span-5">
            <Reveal className="bg-bg p-7 sm:p-10" delay={0.08} id="landcom">
              <p className="eyebrow">Flagship · {landcom.pillar}</p>
              <h3 className="mt-3 text-display-sm font-semibold">{landcom.client}</h3>
              <p className="mt-1 text-sm text-fg-muted">{landcom.kicker}</p>
              <p className="mt-5 text-[0.9375rem] leading-relaxed text-fg-muted">{landcom.summary}</p>
              <div className="mt-6 grid grid-cols-2 gap-6 border-t border-line pt-6">
                {landcom.metrics.map((m) => (
                  <Stat key={m.label} value={m.value} prefix={m.prefix} suffix={m.suffix} decimals={m.decimals} label={m.label} />
                ))}
              </div>
            </Reveal>
            <Reveal className="bg-surface-2 p-7 sm:p-10" delay={0.16} id="hearsight">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="eyebrow">Flagship · {hearsight.pillar}</p>
                  <h3 className="mt-3 text-display-sm font-semibold">{hearsight.client}</h3>
                  <p className="mt-1 text-sm text-fg-muted">{hearsight.kicker}</p>
                </div>
                {hearsight.image && (
                  <Image src={hearsight.image.src} alt={hearsight.image.alt} width={hearsight.image.w} height={hearsight.image.h} className="w-28 shrink-0 rounded-xs" />
                )}
              </div>
              <p className="mt-5 text-[0.9375rem] leading-relaxed text-fg-muted">
                Frontier-grade perception, running inside a pair of glasses. Every model runs on-device — no cloud round trip, no data leaving the wearer.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-10 flex flex-wrap items-center gap-6" delay={0.1}>
          <Button href="/work" variant="primary">
            Explore the work
          </Button>
          <p className="text-sm text-fg-muted">Government and NDA case studies available on request.</p>
        </Reveal>
      </div>
    </Section>
  );
}
