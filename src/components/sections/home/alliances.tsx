import Image from "next/image";
import Section from "@/components/ui/section";
import Reveal from "@/components/motion/reveal";
import { alliances, alliancesSection, trustMarks } from "@/content/home";

/** Alliances as a calm logo grid with a caption each. Hairlines, no cards. */
export default function Alliances() {
  const { eyebrow, title, sub } = alliancesSection;
  return (
    <Section id="alliances" theme="mist">
      <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
        <div className="grid-12 gap-y-8">
          <Reveal className="col-span-12 lg:col-span-7">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="mt-6 max-w-[16ch] text-display-lg text-fg">{title}</h2>
          </Reveal>
          <Reveal delay={0.08} className="col-span-12 lg:col-span-4 lg:col-start-9 lg:self-end">
            <p className="max-w-[40ch] text-lead font-light text-fg-muted">{sub}</p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-16 lg:mt-24">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-12 border-t border-line pt-12 sm:grid-cols-3 lg:grid-cols-4 lg:gap-y-16">
            {alliances.map((a) => (
              <li key={a.name} className="flex flex-col">
                <div className="flex h-10 items-center">
                  <Image src={a.src} alt={a.name} width={a.w} height={a.h} className="h-6 w-auto max-w-[132px] object-contain grayscale sm:h-7" />
                </div>
                <p className="eyebrow mt-6">{a.role}</p>
                <p className="mt-1.5 max-w-[22ch] text-[0.875rem] leading-snug text-fg-muted">{a.detail}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.16}>
          <ul className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-line pt-8">
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
