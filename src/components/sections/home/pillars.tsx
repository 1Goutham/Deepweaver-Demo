"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import Button from "@/components/ui/button";
import PillarGlyph from "@/components/ui/pillar-glyph";
import { pillars } from "@/content/pillars";
import { cn } from "@/lib/utils";
import { EASE } from "@/components/motion/reveal";

export default function Pillars() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const id = useId();
  const p = pillars[active];

  return (
    <Section id="domains" theme="light" pad="lg">
      <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
        <SectionHeader
          eyebrow="Four AI domains"
          title="One stack. Four domains. Governed as one."
          lead="Digital, Physical, Frontier and Sovereign AI are not four services — they are four parts of one system, sharing a convergence layer and a governance layer."
          size="lg"
        />

        {/* Segmented selector — scrolls horizontally on small screens */}
        <div role="tablist" aria-label="AI domains" className="-mx-5 mt-14 flex gap-1 overflow-x-auto px-5 pb-1 sm:mx-0 sm:px-0 md:mt-16">
          {pillars.map((pl, i) => {
            const selected = i === active;
            return (
              <button
                key={pl.slug}
                role="tab"
                id={`${id}-tab-${i}`}
                aria-selected={selected}
                aria-controls={`${id}-panel`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowRight") setActive((a) => (a + 1) % pillars.length);
                  if (e.key === "ArrowLeft") setActive((a) => (a - 1 + pillars.length) % pillars.length);
                }}
                className={cn(
                  "group relative flex shrink-0 items-baseline gap-3 border-b-2 px-1 pb-4 pr-6 text-left transition-colors sm:flex-1",
                  selected ? "border-ink" : "border-line hover:border-line-strong",
                )}
              >
                <span className={cn("font-display text-xs", selected ? "text-ink" : "text-fg-soft")}>{pl.index}</span>
                <span className={cn("font-display text-display-xs font-semibold", selected ? "text-ink" : "text-fg-muted group-hover:text-ink")}>
                  {pl.name}
                </span>
              </button>
            );
          })}
        </div>

        <div id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tab-${active}`} className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-12">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={p.slug}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="contents"
            >
              <div className="lg:col-span-5">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-md bg-ink">
                  <PillarGlyph pillar={p.slug} className="size-full" />
                </div>
              </div>
              <div className="lg:col-span-7 lg:pl-4">
                <p className="eyebrow">{p.index} · {p.name}</p>
                <h3 className="mt-4 text-display-md font-semibold">{p.short}</h3>
                <p className="mt-5 max-w-[60ch] text-[0.9375rem] leading-relaxed text-fg-muted">{p.definition}</p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="eyebrow">Capabilities</p>
                    <ul className="mt-3 space-y-1.5 text-[0.9375rem] text-fg">
                      {p.capabilities.slice(0, 4).map((c) => (
                        <li key={c.name} className="flex gap-2.5">
                          <span aria-hidden className="mt-[0.62em] h-px w-3 shrink-0 bg-fg-soft" />
                          {c.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rail-amber pl-4">
                    <p className="eyebrow text-amber">Outcome</p>
                    <p className="mt-3 text-[0.9375rem] font-medium leading-relaxed">{p.outcome}</p>
                    {p.proof && (
                      <p className="mt-4 text-sm text-fg-muted">
                        <span className="font-display text-display-xs font-semibold text-fg">{p.proof.metric}</span>{" "}
                        {p.proof.label}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-9 flex flex-wrap items-center gap-5">
                  <Button href={`/${p.slug}`} variant="primary">
                    Explore {p.name}
                  </Button>
                  {p.related[0] && (
                    <Link href={p.related[0].href} className="link-wipe text-sm font-medium text-fg">
                      {p.related[0].label}
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
