"use client";

import { motion, type Variants } from "framer-motion";
import { EASE } from "./reveal";
import { cn } from "@/lib/utils";

/**
 * Masked word reveal for one headline. Each word rises out of its own
 * clipping box, so the line reads as being uncovered rather than fading in.
 * `muted` marks where the two-tone treatment begins (word index).
 */
const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.035, delayChildren: 0.12 } },
};
const word: Variants = {
  hidden: { y: "105%", opacity: 0 },
  visible: { y: "0%", opacity: 1, transition: { duration: 0.7, ease: EASE } },
};

type Props = { text: string; muted?: number; className?: string; as?: "h1" | "h2" };

export default function RevealText({ text, muted, className, as = "h1" }: Props) {
  const Tag = as === "h1" ? motion.h1 : motion.h2;
  const words = text.split(" ");
  return (
    <Tag className={className} variants={container} initial="hidden" animate="visible" aria-label={text}>
      {words.map((w, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom">
          <motion.span variants={word} className={cn("inline-block", muted !== undefined && i >= muted && "text-white/60")}>
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
