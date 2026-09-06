import Section from "@/components/ui/section";
import Reveal from "@/components/motion/reveal";
import { oneStack } from "@/content/home";
import { cn } from "@/lib/utils";

/**
 * Two regions, one stack. Australia leads — larger, first, on the left edge —
 * because the site is positioned for the Australian market. India follows on
 * the second edge at a smaller scale. Hairlines, no cards.
 */
export default function OneStack() {
  const { eyebrow, title, sub, regions, note } = oneStack;
  return (
    <Section id="one-stack" theme="light">
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

        <div className="mt-16 grid-12 gap-y-14 border-t border-line pt-12 lg:mt-24 lg:pt-16">
          {regions.map((r, i) => (
            <Reveal
              key={r.country}
              delay={0.06 * i}
              className={cn("col-span-12", r.lead ? "lg:col-span-6" : "lg:col-span-4 lg:col-start-9 lg:pt-14")}
            >
              <p className="eyebrow">{r.role}</p>
              <h3 className={cn("mt-4 text-fg", r.lead ? "text-display-xl" : "text-display-md")}>{r.country}</h3>
              <p className="mt-2 text-sm text-fg-muted">{r.cities}</p>
              <ul className={cn("mt-8 divide-y divide-line border-y border-line", r.lead ? "max-w-[36rem]" : "")}>
                {r.points.map((p) => (
                  <li key={p} className={cn("py-3.5", r.lead ? "text-base sm:text-[1.0625rem]" : "text-[0.9375rem]")}>
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-14 lg:mt-20">
          <p className="max-w-[64ch] text-[0.9375rem] leading-relaxed text-fg-muted">{note}</p>
        </Reveal>
      </div>
    </Section>
  );
}
