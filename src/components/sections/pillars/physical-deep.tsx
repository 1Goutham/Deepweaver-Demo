import Image from "next/image";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/motion/reveal";
import Tag from "@/components/ui/tag";
import Button from "@/components/ui/button";
import { flagships } from "@/content/work";

const features = [
  "Object and obstacle detection in real time",
  "OCR — reading signage, labels and documents aloud",
  "Face recognition for familiar people",
  "Navigation assistance and wayfinding",
  "Payment assistance, fully offline",
];

export default function PhysicalDeep() {
  const hs = flagships.find((f) => f.id === "hearsight")!;
  return (
    <>
      <Section theme="light" pad="lg" id="hearsight">
        <div className="mx-auto max-w-wide px-gutter">
          <div className="grid-12 gap-y-12">
            <div className="col-span-12 lg:col-span-5">
              <Reveal>
                {hs.logo && <Image src={hs.logo.src} alt={hs.client} width={hs.logo.w} height={hs.logo.h} className="h-8 w-auto brightness-0 opacity-80 sm:h-9" />}
              </Reveal>
              <SectionHeader eyebrow="Physical AI in production" title="Smart glasses that read the world aloud, on-device." lead={hs.kicker} className="mt-8" />
              {hs.image && (
                <Reveal delay={0.1} className="mt-10 overflow-hidden rounded-md bg-ink p-8">
                  <Image src={hs.image.src} alt={hs.image.alt} width={hs.image.w} height={hs.image.h} className="mx-auto w-full max-w-[360px]" />
                </Reveal>
              )}
            </div>
            <Reveal className="col-span-12 lg:col-span-6 lg:col-start-7" delay={0.1}>
              <p className="text-lead font-light text-fg-muted">{hs.summary}</p>
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
                  Shipping AI into hardware forces discipline that cloud-only teams never build. That discipline is what we bring back into enterprise work.
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

      <Section theme="lilac" pad="md">
        <div className="mx-auto max-w-wide px-gutter">
          <div className="grid-12 gap-y-10 lg:items-end">
            <div className="col-span-12 lg:col-span-7">
              <SectionHeader eyebrow="For manufacturers" title="The Factory Brain: the orchestration layer between ERP and PLC." lead="AI recommends. Humans approve. The PLC executes. Cloud, hybrid or on-premise." />
            </div>
            <Reveal className="col-span-12 lg:col-span-5 lg:justify-self-end" delay={0.1}>
              <Button href="/factory-brain">Explore the Factory Brain</Button>
              <p className="mt-6 text-sm text-fg-muted">Silicon partners: NVIDIA · AMD · Qualcomm</p>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
