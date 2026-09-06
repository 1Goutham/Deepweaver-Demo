import Image from "next/image";
import Link from "next/link";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import { StaggerList, StaggerItem } from "@/components/motion/stagger";
import { aiNativeServices } from "@/content/home";
import { cn } from "@/lib/utils";

/**
 * The four domains as large image-led tiles: soft brand grounds, the
 * brand's own 3D forms as art, copy set beside them. No borders, no bullets.
 *
 * Every tile shares one art slot: a box anchored to the tile's padding edge,
 * bottom-right, that the render sits inside (object-contain, bottom-right).
 * The renders are trimmed to their visible bounds so all four land on the
 * same corner at the same inset, and the copy column stops short of the slot.
 */
const tiles = [
  { bg: "bg-[#e5daeb]", art: "/brand/tile-arch.webp", flip: false },
  { bg: "bg-[#dce4ea]", art: "/brand/tile-weave.webp", flip: false },
  { bg: "bg-[#eae8e1]", art: "/brand/tile-split.webp", flip: false },
  { bg: "bg-[#d2e8c8]", art: "/brand/tile-arch.webp", flip: true },
];

export default function AiNativeServices() {
  const { eyebrow, title, sub, pillars } = aiNativeServices;
  return (
    <Section id="domains" theme="paper">
      <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
        <SectionHeader eyebrow={eyebrow} title={title} lead={sub} align="center" size="lg" className="max-w-[46rem]" />
        <StaggerList className="mt-14 grid gap-4 md:grid-cols-2 md:gap-5 lg:mt-20 lg:gap-6">
          {pillars.map((p, i) => {
            const t = tiles[i];
            return (
              <StaggerItem key={p.href} className="h-full">
                <Link
                  href={p.href}
                  className={cn(
                    "group relative flex h-full min-h-[400px] flex-col overflow-hidden rounded-lg p-7 text-ink transition-transform duration-500 ease-out-expo hover:-translate-y-1 sm:p-9 lg:min-h-[440px] lg:p-11",
                    t.bg,
                  )}
                >
                  {/* Art slot: lower half of the tile, inset to the padding edge. */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute bottom-7 right-7 top-[46%] w-[40%] sm:bottom-9 sm:right-9 lg:bottom-11 lg:right-11 lg:top-[36%] lg:w-[40%]"
                  >
                    <Image
                      src={t.art}
                      alt=""
                      fill
                      sizes="(min-width: 1280px) 240px, (min-width: 768px) 20vw, 40vw"
                      className={cn(
                        "object-contain object-right-bottom opacity-90 transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]",
                        t.flip && "-scale-x-100 group-hover:scale-x-[-1.03] group-hover:scale-y-[1.03]",
                      )}
                    />
                  </div>

                  {/* Copy column: never enters the art slot. */}
                  <div className="relative flex h-full flex-col">
                    <div className="max-w-[24rem]">
                      <p className="text-[0.8125rem] text-ink/60">{p.kicker}</p>
                      <h3 className="mt-3 text-display-md">{p.title}</h3>
                      <p className="mt-4 max-w-[32ch] text-[0.9375rem] leading-relaxed text-ink/75 sm:text-base">{p.desc}</p>
                    </div>
                    <div className="mt-auto max-w-[54%] pt-12">
                      <p className="text-[0.8125rem] leading-relaxed text-ink/60">{p.items.join(" · ")}</p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium">
                        Explore
                        <span aria-hidden className="inline-block transition-transform duration-300 ease-out-expo group-hover:translate-x-1">→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerList>
      </div>
    </Section>
  );
}
