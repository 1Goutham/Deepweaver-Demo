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

/** Inner-page hero. Title on the left edge, lead and aside on the second edge (column 7). */
export default function PageHero({ eyebrow, title, lead, aside, children, className, size = "lg" }: Props) {
  return (
    <section data-theme="dark" className={cn("relative bg-ink pb-20 pt-[152px] text-white md:pb-28 md:pt-[184px]", className)}>
      <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
        <div className="grid-12 gap-y-12">
          <div className="col-span-12 lg:col-span-7">
            {eyebrow && (
              <Reveal>
                <p className="eyebrow">{eyebrow}</p>
              </Reveal>
            )}
            <Reveal delay={0.06}>
              <h1 className={cn("mt-8 max-w-[14ch] text-white", size === "lg" ? "text-display-xl" : "text-display-lg")}>{title}</h1>
            </Reveal>
          </div>
          {(lead || aside || children) && (
            <div className="col-span-12 lg:col-span-5 lg:col-start-7 lg:self-end">
              {lead && (
                <Reveal delay={0.12}>
                  <p className="max-w-[44ch] text-lead font-light text-white/70">{lead}</p>
                </Reveal>
              )}
              {aside && (
                <Reveal delay={0.18} className={cn(lead && "mt-10")}>
                  {aside}
                </Reveal>
              )}
              {children && <Reveal delay={0.2}>{children}</Reveal>}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
