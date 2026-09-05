"use client";

import { useEffect, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1] as const;

// IntersectionObserver always delivers an initial callback after observe().
// In some embedded webviews it never fires and whileInView content would stay
// invisible forever. Probe once per page load; if IO is broken, reveal now.
let ioProbe: Promise<boolean> | undefined;
function ioWorks() {
  if (!ioProbe) {
    ioProbe = new Promise((resolve) => {
      if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") {
        resolve(false);
        return;
      }
      const timer = setTimeout(() => {
        io.disconnect();
        resolve(false);
      }, 800);
      const io = new IntersectionObserver(() => {
        clearTimeout(timer);
        io.disconnect();
        resolve(true);
      });
      io.observe(document.documentElement);
    });
  }
  return ioProbe;
}

const MOTION = {
  div: motion.div,
  section: motion.section,
  span: motion.span,
  li: motion.li,
  p: motion.p,
  article: motion.article,
  header: motion.header,
  figure: motion.figure,
} as const;
type Tag = keyof typeof MOTION;

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  as?: Tag;
  id?: string;
  once?: boolean;
  amount?: number;
};

export default function Reveal({
  children,
  delay = 0,
  y = 22,
  duration = 0.65,
  className,
  as = "div",
  id,
  once = true,
  amount = 0.2,
}: RevealProps) {
  const reduce = useReducedMotion();
  const [forceShow, setForceShow] = useState(false);
  const Tag = as as "div";
  const MotionTag = MOTION[as] as typeof motion.div;

  useEffect(() => {
    let mounted = true;
    ioWorks().then((ok) => {
      if (!ok && mounted) setForceShow(true);
    });
    return () => {
      mounted = false;
    };
  }, []);

  if (forceShow || reduce) {
    return (
      <Tag className={className} id={id}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: EASE }}
      className={className}
      id={id}
    >
      {children}
    </MotionTag>
  );
}
