import Image from "next/image";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/motion/reveal";
import { alliances, alliancesSection, trustMarks } from "@/content/home";

export default function Alliances() {
  const { eyebrow, title, sub } = alliancesSection;
  return (
    <Section id="alliances" theme="mist">
      <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
        <SectionHeader eyebrow={eyebrow} title={title} lead={sub} />
        <Reveal delay={0.1} className="mt-12 lg:mt-16">
          <ol className="grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {alliances.map((a) => (
              <li key={a.name} className="flex flex-col bg-bg p-6 lg:p-7">
                <div className="flex h-12 items-center">
                  <Image src={a.src} alt={a.name} width={a.w} height={a.h} className="h-6 w-auto max-w-[140px] object-contain sm:h-7" />
                </div>
                <p className="eyebrow mt-6">{a.role}</p>
                <p className="mt-2 text-[0.9375rem] text-fg">{a.detail}</p>
              </li>
            ))}
          </ol>
        </Reveal>
        <Reveal delay={0.16}>
          <ul className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
            <li className="eyebrow">Responsible AI by design</li>
            {trustMarks.map((t) => (
              <li key={t.label} className="flex items-center gap-2.5 text-sm">
                <Image src={t.src} alt="" width={64} height={64} className="size-7 rounded-full object-contain" />
                <span className="text-fg">
                  {t.label} {t.sub && <span className="text-fg-muted">{t.sub}</span>}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
