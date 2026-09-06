import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/motion/reveal";
import CountUp from "@/components/motion/count-up";
import { StaggerList, StaggerItem } from "@/components/motion/stagger";
import { whyChooseUs } from "@/content/home";
import { cn } from "@/lib/utils";

/** Five ways to engage as an editorial list, then four numbers on hairlines. */
export default function WhyChooseUs() {
  const { eyebrow, title, sub, modes, note, stats } = whyChooseUs;
  return (
    <Section id="how-we-work" theme="paper">
      <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
        <div className="grid-12 gap-y-10">
          <div className="col-span-12 lg:col-span-6">
            <SectionHeader eyebrow={eyebrow} title={title} />
          </div>
          <Reveal delay={0.08} className="col-span-12 lg:col-span-5 lg:col-start-7 lg:self-end">
            <p className="max-w-[44ch] text-lead font-light text-fg-muted">{sub}</p>
          </Reveal>
        </div>

        <StaggerList as="ol" className="mt-14 border-t border-line lg:mt-20">
          {modes.map((m, i) => (
            <StaggerItem as="li" key={m.title} className="border-b border-line">
              <div className="grid-12 items-baseline py-6 md:py-7">
                <span className="col-span-12 flex items-baseline gap-5 lg:col-span-6">
                  <span className="w-6 font-display text-sm text-accent">0{i + 1}</span>
                  <span className={cn("font-display text-display-sm text-fg", m.highlight && "text-lavender")}>{m.title}</span>
                </span>
                <span className="col-span-12 mt-2 pl-11 text-[0.9375rem] text-fg-muted lg:col-span-5 lg:col-start-7 lg:mt-0 lg:pl-0">{m.body}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerList>
        <Reveal delay={0.06}>
          <p className="mt-6 max-w-[80ch] text-sm text-fg-muted">{note}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="mt-16 grid grid-cols-2 gap-y-10 border-y border-line py-10 md:grid-cols-4 lg:mt-24">
            {stats.map((s, i) => (
              <div key={s.label} className={cn("px-3 text-center", i > 0 && "md:border-l md:border-line")}>
                <dd className="font-display text-display-lg tabular-nums text-fg">
                  <CountUp to={s.value} suffix={s.suffix} />
                </dd>
                <dt className="mt-2 text-sm text-fg-muted">{s.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
