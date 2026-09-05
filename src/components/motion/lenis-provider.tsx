"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisProvider() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Coarse pointers get native scrolling: smoother on touch, and cheaper.
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const lenis = new Lenis({
      duration: 0.85,
      smoothWheel: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
  return null;
}
