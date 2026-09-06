import Image from "next/image";
import Link from "next/link";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import { StaggerList, StaggerItem } from "@/components/motion/stagger";
import { aiNativeServices } from "@/content/home";
import { cn } from "@/lib/utils";

/**
 * The four domains as large image-led tiles: soft brand grounds, the
 * brand's own 3D forms as art, copy set over them. No borders, no bullets.
 */
const tiles = [
  { bg: "bg-[#e5daeb]", art: "/brand/form-arch.png", w: 1675, h: 1589, artClass: "-right-[16%] -bottom-[20%] w-[46%] sm:w-[52%] lg:w-[56%]" },
  { bg: "bg-[#dce4ea]", art: "/brand/form-2.png", w: 1311, h: 1399, artClass: "-right-[12%] -bottom-[24%] w-[42%] sm:w-[48%] lg:w-[52%]" },
  { bg: "bg-[#eae8e1]", art: "/brand/form-split.png", w: 1467, h: 1535, artClass: "-right-[14%] -bottom-[22%] w-[44%] sm:w-[50%] lg:w-[54%]" },
  { bg: "bg-[#d2e8c8]", art: "/brand/form-arch.png", w: 1675, h: 1589, artClass: "-right-[16%] -bottom-[20%] w-[46%] sm:w-[52%] lg:w-[56%] -scale-x-100" },
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
                    "group relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-lg p-7 text-ink transition-transform duration-500 ease-out-expo hover:-translate-y-1 sm:min-h-[340px] sm:p-9 lg:min-h-[400px] lg:p-11",
                    t.bg,
                  )}
                >
                  <Image
                    src={t.art}
                    alt=""
                    width={t.w}
                    height={t.h}
                    sizes="(min-width: 1024px) 380px, (min-width: 768px) 30vw, 60vw"
                    className={cn("pointer-events-none absolute h-auto opacity-85 transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]", t.artClass)}
                  />
                  <div className="relative max-w-[26rem]">
                    <p className="text-[0.8125rem] text-ink/60">{p.kicker}</p>
                    <h3 className="mt-3 text-display-md">{p.title}</h3>
                    <p className="mt-4 max-w-[34ch] text-[0.9375rem] leading-relaxed text-ink/75 sm:text-base">{p.desc}</p>
                  </div>
                  <div className="relative mt-auto flex flex-wrap items-end justify-between gap-x-6 gap-y-4 pt-10">
                    <p className="max-w-[58%] text-[0.8125rem] leading-relaxed text-ink/60 sm:max-w-[30ch]">{p.items.join(" · ")}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium">
                      Explore
                      <span aria-hidden className="inline-block transition-transform duration-300 ease-out-expo group-hover:translate-x-1">→</span>
                    </span>
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
