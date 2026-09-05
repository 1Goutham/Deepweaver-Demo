"use client";

import Link from "next/link";
import { useState } from "react";
import Section from "@/components/ui/section";
import Reveal from "@/components/motion/reveal";
import { pillars } from "@/content/pillars";
import { cn } from "@/lib/utils";

/**
 * The four AI domains as an editorial index. Names sit on edge 1 with the
 * index number above them; descriptions sit on edge 2. No cards, no icons.
 */
export default function Domains() {
  const [hover, setHover] = useState<string | null>(null);
  return (
    <Section id="domains" theme="lilac">
      <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
        <div className="grid-12 gap-y-10">
          <Reveal className="col-span-12 lg:col-span-6">
            <p className="eyebrow">Four AI domains</p>
            <h2 className="mt-8 max-w-[14ch] text-display-md text-fg">One stack. Four domains. Governed as one.</h2>
          </Reveal>
          <Reveal delay={0.08} className="col-span-12 lg:col-span-5 lg:col-start-7 lg:self-end">
            <p className="max-w-[44ch] text-lead font-light text-fg-muted">
              Not four services — four parts of one system, sharing a convergence layer and a governance layer.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="mt-20 lg:mt-28">
          <ol className="border-t border-line" onMouseLeave={() => setHover(null)}>
            {pillars.map((p) => {
              const dim = hover !== null && hover !== p.slug;
              return (
                <li key={p.slug} className="border-b border-line">
                  <Link
                    href={`/${p.slug}`}
                    onMouseEnter={() => setHover(p.slug)}
                    onFocus={() => setHover(p.slug)}
                    className={cn(
                      "group grid-12 items-end py-9 transition-opacity duration-500 ease-out-expo md:py-12",
                      dim ? "opacity-40" : "opacity-100",
                    )}
                  >
                    <span className="col-span-12 lg:col-span-6">
                      <span className="block font-display text-sm text-accent">{p.index}</span>
                      <span className="mt-3 block text-display-md text-fg transition-colors duration-300 group-hover:text-lavender">{p.name}</span>
                    </span>
                    <span className="col-span-11 mt-4 max-w-[40ch] text-[0.9375rem] leading-relaxed text-fg-muted lg:col-span-5 lg:col-start-7 lg:mt-0 lg:pb-2 lg:text-base">
                      {p.short}
                    </span>
                    <span
                      aria-hidden
                      className="col-span-1 col-start-12 hidden justify-self-end pb-2 text-lavender opacity-0 transition-[opacity,transform] duration-500 ease-out-expo group-hover:translate-x-1 group-hover:opacity-100 lg:block"
                    >
                      →
                    </span>
                  </Link>
                </li>
              );
            })}
          </ol>
        </Reveal>
      </div>
    </Section>
  );
}
