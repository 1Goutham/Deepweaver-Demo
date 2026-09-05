import Image from "next/image";
import Link from "next/link";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/motion/reveal";
import Tag from "@/components/ui/tag";
import Button from "@/components/ui/button";
import { flagships } from "@/content/work";

export default function PhysicalDeep() {
  const hs = flagships.find((f) => f.id === "hearsight")!;
  const features = [
    "Object and obstacle detection in real time",
    "OCR — reading signage, labels and documents aloud",
    "Face recognition for familiar people",
    "Navigation assistance and wayfinding",
    "Payment assistance, fully offline",
  ];
  return (
    <>
      <Section theme="light" pad="lg" id="hearsight">
        <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
          <div className="grid-12 gap-y-12">
            <div className="col-span-12 lg:col-span-5">
              <SectionHeader eyebrow="Flagship · Physical AI in production" title={hs.client} lead={hs.kicker} />
              {hs.image && (
                <div className="mt-10 overflow-hidden bg-ink p-8">
                  <Image src={hs.image.src} alt={hs.image.alt} width={hs.image.w} height={hs.image.h} className="mx-auto w-full max-w-[360px]" />
                </div>
              )}
            </div>
            <Reveal className="col-span-12 lg:col-span-6 lg:col-start-7" delay={0.1}>
              <p className="text-lead font-light text-fg-muted">{hs.summary.split(". ").slice(0, 3).join(". ")}.</p>
              <ul className="mt-8 divide-y divide-line border-y border-line">
                {features.map((f) => (
                  <li key={f} className="flex items-baseline gap-4 py-3.5 text-[0.9375rem]">
                    <span aria-hidden className="h-px w-4 shrink-0 bg-blue" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="rail-amber mt-8 pl-5">
                <p className="eyebrow text-amber">Why it matters</p>
                <p className="mt-3 text-display-xs font-display">Frontier-grade perception, running inside a pair of glasses.</p>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-fg-muted">
                  Shipping AI into hardware forces discipline that cloud-only teams never build: model compression, latency budgets, thermal limits, offline reliability and safety with no fallback. That discipline is what we bring back into enterprise work.
                </p>
              </div>
              <ul className="mt-8 flex flex-wrap gap-2">
                {hs.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section theme="mist" pad="md">
        <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
          <div className="grid-12 gap-y-10 lg:items-end">
            <div className="col-span-12 lg:col-span-7">
              <SectionHeader eyebrow="Manufacturing" title="The Factory Brain: the orchestration layer between ERP and PLC." lead="AI recommends. Humans approve. The PLC executes. Cloud, hybrid or on-premise, 4 to 12+ weeks." />
            </div>
            <Reveal className="col-span-12 flex flex-wrap items-center gap-5 lg:col-span-5 lg:justify-end" delay={0.1}>
              <Button href="/factory-brain">
                Explore the Factory Brain
              </Button>
              <Link href="/work" className="link-wipe text-sm font-medium">
                Edge AI across 4,000+ cameras
              </Link>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
