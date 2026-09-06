import Image from "next/image";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/motion/reveal";
import { alliances, alliancesSection, trustMarks } from "@/content/home";

/** Alliances as a calm logo row with a caption each. No cards. */
export default function Alliances() {
  const { eyebrow, title, sub } = alliancesSection;
  return (
    <Section id="alliances" theme="light">
      <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
        <SectionHeader eyebrow={eyebrow} title={title} lead={sub} align="center" className="max-w-[40rem]" />
        <Reveal delay={0.1} className="mt-14 lg:mt-20">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-12 border-t border-line pt-12 sm:grid-cols-3 lg:grid-cols-6">
            {alliances.map((a) => (
              <li key={a.name} className="flex flex-col items-center text-center">
                <div className="flex h-10 items-center">
                  <Image src={a.src} alt={a.name} width={a.w} height={a.h} className="h-6 w-auto max-w-[120px] object-contain grayscale sm:h-7" />
                </div>
                <p className="eyebrow mt-5">{a.role}</p>
                <p className="mt-1.5 max-w-[18ch] text-[0.8125rem] leading-snug text-fg-muted">{a.detail}</p>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.16}>
          <ul className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-line pt-8">
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
