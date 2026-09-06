import Section from "@/components/ui/section";
import Reveal from "@/components/motion/reveal";
import { oneStack } from "@/content/home";
import { cn } from "@/lib/utils";

/**
 * Two regions, one delivery team. Australia first on the left edge, India on
 * the second edge, at the same scale. Hairlines, no cards.
 */
export default function OneStack() {
  const { eyebrow, title, sub, regions, note } = oneStack;
  return (
    <Section id="one-stack" theme="light">
      <div className="mx-auto max-w-wide px-gutter">
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
              className={cn("col-span-12 lg:col-span-5", !r.lead && "lg:col-start-8")}
            >
              <p className="eyebrow">{r.role}</p>
              <h3 className="mt-4 text-display-lg text-fg">{r.country}</h3>
              <p className="mt-2 text-sm text-fg-muted">{r.cities}</p>
              <ul className="mt-8 divide-y divide-line border-y border-line">
                {r.points.map((p) => (
                  <li key={p} className="py-3.5 text-[0.9375rem] sm:text-base">
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
