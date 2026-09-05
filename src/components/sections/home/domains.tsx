"use client";

import Link from "next/link";
import { useState } from "react";
import Section from "@/components/ui/section";
import Reveal from "@/components/motion/reveal";
import { pillars } from "@/content/pillars";
import { cn } from "@/lib/utils";

/**
 * The four AI domains as an editorial index: number, name, one line.
 * No cards, no icons. The row is the visual.
 */
export default function Domains() {
  const [hover, setHover] = useState<string | null>(null);
  return (
    <Section id="domains" theme="dark" pad="none" className="section-pad">
      <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
        <div className="grid-12">
          <Reveal className="col-span-12 lg:col-span-4">
            <p className="eyebrow">Four AI domains</p>
            <h2 className="mt-6 text-display-md text-fg">One stack. Four domains. Governed as one.</h2>
          </Reveal>
          <Reveal delay={0.08} className="col-span-12 lg:col-span-5 lg:col-start-8 lg:pt-12">
            <p className="text-lead font-light text-fg-muted">
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
                      "group grid-12 items-baseline py-8 transition-opacity duration-500 ease-out-expo md:py-10 lg:py-12",
                      dim ? "opacity-40" : "opacity-100",
                    )}
                  >
                    <span className="col-span-2 font-display text-sm text-fg-soft md:col-span-1">{p.index}</span>
                    <span className="col-span-10 text-display-lg text-fg md:col-span-5">{p.name}</span>
                    <span className="col-span-10 col-start-3 mt-3 max-w-[36ch] text-[0.9375rem] leading-relaxed text-fg-muted md:col-span-5 md:col-start-7 md:mt-0 md:text-base">
                      {p.short}
                    </span>
                    <span
                      aria-hidden
                      className="col-span-1 col-start-12 hidden justify-self-end text-fg opacity-0 transition-[opacity,transform] duration-500 ease-out-expo group-hover:translate-x-1 group-hover:opacity-100 md:block"
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
