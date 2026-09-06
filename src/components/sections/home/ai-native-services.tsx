import Link from "next/link";
import Section from "@/components/ui/section";
import Reveal from "@/components/motion/reveal";
import { StaggerList, StaggerItem } from "@/components/motion/stagger";
import { aiNativeServices } from "@/content/home";

/**
 * The four domains as editorial blocks. No art, no icons, no borders:
 * typography, scale, spacing and a restrained brand tint do the work.
 *
 * The introduction is a statement, not a labelled header: the title sits on
 * the left edge, the lead on the second edge, and the four blocks follow.
 */
const tints = [
  { bg: "#e5daeb", hover: "#dfd2e8" }, // light lavender
  { bg: "#dce4ea", hover: "#d3dee6" }, // light blue/grey
  { bg: "#eae8e1", hover: "#e4e1d8" }, // warm off-white
  { bg: "#d2e8c8", hover: "#c9e2bd" }, // light green
];

export default function AiNativeServices() {
  const { title, sub, pillars } = aiNativeServices;
  return (
    <Section id="domains" theme="paper">
      <div className="mx-auto max-w-wide px-gutter">
        <div className="grid-12 gap-y-8">
          <Reveal className="col-span-12 lg:col-span-7">
            <h2 className="max-w-[16ch] text-display-lg text-fg">{title}</h2>
          </Reveal>
          <Reveal delay={0.08} className="col-span-12 lg:col-span-4 lg:col-start-9 lg:self-end">
            <p className="max-w-[40ch] text-lead font-light text-fg-muted">{sub}</p>
          </Reveal>
        </div>

        <StaggerList className="mt-16 grid gap-4 md:grid-cols-2 md:gap-5 lg:mt-24 lg:gap-6">
          {pillars.map((p, i) => {
            const t = tints[i];
            return (
              <StaggerItem key={p.href} className="h-full">
                <Link
                  href={p.href}
                  style={{ "--tile": t.bg, "--tile-hover": t.hover } as React.CSSProperties}
                  className="group grid h-full min-h-[380px] grid-cols-1 content-between gap-y-10 rounded-lg bg-(--tile) p-8 text-ink transition-colors duration-500 ease-out-expo hover:bg-(--tile-hover) sm:p-10 lg:min-h-[460px] lg:p-12 xl:grid-cols-[1.3fr_1fr] xl:gap-x-8"
                >
                  <div>
                    <p className="text-[0.8125rem] text-ink/55">{p.kicker}</p>
                    <h3 className="mt-3 text-[clamp(2.25rem,0.75rem+2.35vw,2.875rem)] leading-[1.06] tracking-[-0.024em]">{p.title}</h3>
                  </div>
                  <p className="max-w-[30ch] text-base leading-relaxed text-ink/75 xl:max-w-[26ch] xl:pt-9 xl:text-lead">{p.desc}</p>
                  <p className="max-w-[36ch] self-end text-[0.8125rem] leading-relaxed text-ink/60 xl:max-w-[30ch]">{p.items.join(" · ")}</p>
                  <span className="inline-flex items-center gap-2 self-end text-sm font-medium">
                    Explore
                    <span aria-hidden className="inline-block transition-transform duration-300 ease-out-expo group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerList>
      </div>
    </Section>
  );
}
