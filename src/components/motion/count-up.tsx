"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

type Props = {
  to: number;
  from?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
};

export default function CountUp({
  to,
  from = 0,
  duration = 1.4,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const reduce = useReducedMotion();
  // Default to the final value so SSR, crawlers and broken IO show the real number.
  const [value, setValue] = useState(to);

  useEffect(() => {
    // State already holds the final value until the animation starts.
    if (!inView || reduce) return;
    const controls = animate(from, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(v),
      onComplete: () => setValue(to),
    });
    return () => {
      controls.stop();
      setValue(to);
    };
  }, [inView, from, to, duration, reduce]);

  const fmt = value.toLocaleString("en-AU", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className={className}>
      {prefix}
      {fmt}
      {suffix}
    </span>
  );
}
