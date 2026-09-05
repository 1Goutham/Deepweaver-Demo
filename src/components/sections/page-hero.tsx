import type { ReactNode } from "react";
import Reveal from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  aside?: ReactNode;
  children?: ReactNode;
  className?: string;
  size?: "md" | "lg";
};

/** Compact dark hero for inner pages. Content left, optional facts aside. */
export default function PageHero({ eyebrow, title, lead, aside, children, className, size = "lg" }: Props) {
  return (
    <section data-theme="dark" className={cn("relative overflow-hidden bg-ink pb-16 pt-[136px] text-white md:pb-24 md:pt-[168px]", className)}>
      <div aria-hidden className="bg-dotgrid absolute inset-0 opacity-[0.28] [mask-image:radial-gradient(55%_70%_at_20%_30%,#000,transparent)]" />
      <div className="relative mx-auto grid max-w-wide gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
        <div className={aside ? "lg:col-span-7" : "lg:col-span-8"}>
          {eyebrow && (
            <Reveal>
              <p className="eyebrow text-violet">{eyebrow}</p>
            </Reveal>
          )}
          <Reveal delay={0.06}>
            <h1 className={cn("mt-6 font-semibold", size === "lg" ? "text-display-xl" : "text-display-lg")}>{title}</h1>
          </Reveal>
          {lead && (
            <Reveal delay={0.12}>
              <p className="mt-7 max-w-[54ch] text-lead font-light text-white/72">{lead}</p>
            </Reveal>
          )}
          {children && <Reveal delay={0.18}>{children}</Reveal>}
        </div>
        {aside && (
          <Reveal delay={0.2} className="lg:col-span-4 lg:col-start-9 lg:self-end">
            {aside}
          </Reveal>
        )}
      </div>
    </section>
  );
}
