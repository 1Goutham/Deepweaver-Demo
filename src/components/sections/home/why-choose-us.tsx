import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/motion/reveal";
import CountUp from "@/components/motion/count-up";
import { whyChooseUs } from "@/content/home";
import { cn } from "@/lib/utils";

export default function WhyChooseUs() {
  const { eyebrow, title, sub, modes, note, stats } = whyChooseUs;
  return (
    <Section id="how-we-work" theme="paper">
      <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
        <SectionHeader eyebrow={eyebrow} title={title} lead={sub} />
        <Reveal delay={0.1} className="mt-12 lg:mt-16">
          <ol className="grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {modes.map((m, i) => (
              <li key={m.title} className={cn("flex flex-col p-6", m.highlight ? "bg-surface-2" : "bg-bg", i === modes.length - 1 && "sm:col-span-2 md:col-span-2 xl:col-span-1")}>
                <span className="font-display text-sm text-accent">0{i + 1}</span>
                <h3 className="mt-4 text-display-xs text-fg">{m.title}</h3>
                <p className="mt-2 text-[0.875rem] leading-relaxed text-fg-muted">{m.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-5 max-w-[80ch] text-sm text-fg-muted">{note}</p>
        </Reveal>
        <Reveal delay={0.16}>
          <dl className="mt-12 grid grid-cols-2 gap-y-10 border-y border-line py-8 md:grid-cols-4 md:py-10">
            {stats.map((s, i) => (
              <div key={s.label} className={cn("px-2 text-center", i > 0 && "md:border-l md:border-line")}>
                <dd className="font-display text-display-md tabular-nums text-fg">
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
