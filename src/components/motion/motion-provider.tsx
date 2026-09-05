"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/** Honours prefers-reduced-motion for every framer-motion element in one place. */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
