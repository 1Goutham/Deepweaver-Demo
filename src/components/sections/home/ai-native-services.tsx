import Link from "next/link";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import { StaggerList, StaggerItem } from "@/components/motion/stagger";
import { aiNativeServices } from "@/content/home";

/**
 * The four domains as editorial blocks. No art, no icons, no borders:
 * typography, scale, spacing and a restrained brand tint do the work.
 *
 * Inside each card a two-column grid sets the composition: the title and
 * the capabilities share the left edge; the description and the Explore
 * link share the right column's edge. The empty space is deliberate.
 */
const tints = [
  { bg: "#e5daeb", hover: "#dfd2e8" }, // light lavender
  { bg: "#dce4ea", hover: "#d3dee6" }, // light blue/grey
  { bg: "#eae8e1", hover: "#e4e1d8" }, // warm off-white
  { bg: "#d2e8c8", hover: "#c9e2bd" }, // light green
];

export default function AiNativeServices() {
  const { eyebrow, title, sub, pillars } = aiNativeServices;
  return (
    <Section id="domains" theme="paper">
      <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
        <SectionHeader eyebrow={eyebrow} title={title} lead={sub} align="center" size="lg" className="max-w-[46rem]" />
        <StaggerList className="mt-14 grid gap-4 md:grid-cols-2 md:gap-5 lg:mt-20 lg:gap-6">
          {pillars.map((p, i) => {
            const t = tints[i];
            return (
              <StaggerItem key={p.href} className="h-full">
                <Link
                  href={p.href}
                  style={{ "--tile": t.bg, "--tile-hover": t.hover } as React.CSSProperties}
                  className="group grid h-full min-h-[380px] grid-cols-1 content-between gap-y-10 rounded-lg bg-(--tile) p-8 text-ink transition-colors duration-500 ease-out-expo hover:bg-(--tile-hover) sm:p-10 lg:min-h-[460px] xl:grid-cols-[1.3fr_1fr] xl:gap-x-8 lg:p-12"
                >
                  {/* Top row: eyebrow + title left; description right, top-aligned with the title. */}
                  <div>
                    <p className="text-[0.8125rem] text-ink/55">{p.kicker}</p>
                    <h3 className="mt-3 text-[clamp(2.25rem,0.75rem+2.35vw,2.875rem)] leading-[1.06] tracking-[-0.024em]">{p.title}</h3>
                  </div>
                  <p className="max-w-[30ch] text-base leading-relaxed text-ink/75 xl:max-w-[26ch] xl:pt-9 xl:text-lead">{p.desc}</p>

                  {/* Bottom row: capabilities left; Explore right, on the description's edge. */}
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
