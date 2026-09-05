"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { EASE } from "./reveal";

/**
 * Once-only staggered reveal for a small group that should arrive together
 * (rows of an index, a column of numbers). Keep groups short; motion follows
 * hierarchy, so secondary lists should use no motion at all.
 */
const list: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.055, delayChildren: 0 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

const TAGS = { ol: motion.ol, ul: motion.ul, dl: motion.dl, div: motion.div } as const;
const ITEMS = { li: motion.li, div: motion.div } as const;

export function StaggerList({ as = "div", className, children }: { as?: keyof typeof TAGS; className?: string; children: ReactNode }) {
  const Tag = TAGS[as] as typeof motion.div;
  return (
    <Tag className={className} variants={list} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15, margin: "0px 0px -8% 0px" }}>
      {children}
    </Tag>
  );
}

export function StaggerItem({ as = "div", className, children }: { as?: keyof typeof ITEMS; className?: string; children: ReactNode }) {
  const Tag = ITEMS[as] as typeof motion.div;
  return (
    <Tag className={className} variants={item}>
      {children}
    </Tag>
  );
}
