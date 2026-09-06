import Link from "next/link";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import { StaggerList, StaggerItem } from "@/components/motion/stagger";
import { aiNativeServices } from "@/content/home";

/** The four domains as a 2×2 of hairline panels. */
export default function AiNativeServices() {
  const { eyebrow, title, sub, pillars } = aiNativeServices;
  return (
    <Section id="domains" theme="lilac">
      <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
        <SectionHeader eyebrow={eyebrow} title={title} lead={sub} align="center" size="lg" className="max-w-[44rem]" />
        <StaggerList className="mt-14 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-20 lg:gap-6">
          {pillars.map((p) => (
            <StaggerItem key={p.href} className="h-full">
              <Link
                href={p.href}
                className="group flex h-full flex-col rounded-md border border-line bg-surface/60 p-6 transition-[border-color,transform] duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-line-strong sm:p-8 lg:p-9"
              >
                <p className="text-[0.8125rem] text-fg-muted">{p.kicker}</p>
                <h3 className="mt-3 text-display-sm text-fg">{p.title}</h3>
                <p className="mt-3 max-w-[40ch] text-[0.9375rem] leading-relaxed text-fg-muted">{p.desc}</p>
                <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2 text-[0.875rem] text-fg min-[420px]:grid-cols-2">
                  {p.items.map((i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <span aria-hidden className="size-1 shrink-0 rounded-full bg-accent" />
                      {i}
                    </li>
                  ))}
                </ul>
                <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-medium text-fg">
                  Explore
                  <span aria-hidden className="inline-block transition-transform duration-300 ease-out-expo group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerList>
      </div>
    </Section>
  );
}
