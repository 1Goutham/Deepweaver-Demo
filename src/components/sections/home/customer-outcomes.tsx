"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/motion/reveal";
import Tag from "@/components/ui/tag";
import { EASE } from "@/components/motion/reveal";
import { customerOutcomes } from "@/content/home";
import { cn } from "@/lib/utils";

/**
 * One flagship per domain, chosen with a segmented control and shown as a
 * single large panel: the number carries the story.
 */
export default function CustomerOutcomes() {
  const { eyebrow, title, sub, stories } = customerOutcomes;
  const [active, setActive] = useState(0);
  const id = useId();
  const s = stories[active];

  return (
    <Section id="outcomes" theme="dark">
      <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
        <SectionHeader eyebrow={eyebrow} title={title} lead={sub} align="center" size="lg" className="max-w-[44rem]" />

        {/* Segmented control */}
        <Reveal delay={0.08} className="mt-12 flex justify-center lg:mt-14">
          <div role="tablist" aria-label="Customer outcomes by domain" className="-mx-5 flex max-w-full gap-1 overflow-x-auto px-5 sm:mx-0 sm:rounded-full sm:border sm:border-line sm:p-1 sm:px-1">
            {stories.map((st, i) => {
              const selected = i === active;
              return (
                <button
                  key={st.slug}
                  role="tab"
                  id={`${id}-tab-${i}`}
                  aria-selected={selected}
                  aria-controls={`${id}-panel`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowRight") setActive((a) => (a + 1) % stories.length);
                    if (e.key === "ArrowLeft") setActive((a) => (a - 1 + stories.length) % stories.length);
                  }}
                  className={cn(
                    "h-10 shrink-0 rounded-full px-4 text-[0.875rem] font-medium transition-colors sm:px-5",
                    selected ? "bg-white text-ink" : "text-fg-muted hover:text-fg",
                  )}
                >
                  {st.domain}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tab-${active}`} className="mt-10 lg:mt-14">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="grid-12 gap-y-10 rounded-lg bg-surface px-6 py-8 sm:px-9 sm:py-10 lg:px-14 lg:py-14"
            >
              <div className="col-span-12 lg:col-span-7">
                <p className="text-[0.8125rem] text-fg-muted">{s.industry}</p>
                <h3 className="mt-4 max-w-[20ch] text-display-lg text-fg">{s.headline}</h3>
                <p className="mt-5 max-w-[52ch] text-[0.9375rem] leading-relaxed text-fg-muted sm:text-base">{s.detail}</p>
                <ul className="mt-8 flex flex-wrap gap-2">
                  <Tag className="border-line-strong text-fg">{s.system}</Tag>
                  {s.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </ul>
              </div>
              <div className="col-span-12 flex flex-col justify-between gap-6 border-t border-line pt-8 lg:col-span-4 lg:col-start-9 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <div>
                  <p className="font-display text-display-xl text-fg">{s.metric}</p>
                  <p className="mt-2 text-sm text-fg-muted">{s.metricLabel}</p>
                </div>
                <Link href={`/outcomes#${s.slug}`} className="link-wipe inline-flex items-center gap-2 text-[0.9375rem] font-medium text-fg">
                  Read the outcome <span aria-hidden>→</span>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <Reveal delay={0.1} className="mt-10 text-center">
          <Link href="/outcomes" className="link-wipe inline-flex items-center gap-2 text-[0.9375rem] font-medium text-fg">
            View all outcomes <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </div>
    </Section>
  );
}
