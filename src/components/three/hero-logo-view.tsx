"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { EASE } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";
import type { HeroLogoHandle } from "./hero-logo";

/**
 * Hosts the 3D mark. Nothing is drawn until WebGL is ready, so the entrance is
 * the first thing seen rather than a still image that later starts moving.
 * The brand render is the fallback when WebGL is unavailable.
 *
 * The glow is two blurred radial layers behind the canvas, breathing on
 * periods that never line up. They are DOM, not canvas, so they can spill
 * past the mark's box and never tint the canvas rectangle itself.
 */
export default function HeroLogoView({ className }: { className?: string }) {
  const host = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<"pending" | "gl" | "image">("pending");

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    let handle: HeroLogoHandle | undefined;
    let cancelled = false;
    import("./hero-logo").then(({ createHeroLogo }) => {
      if (cancelled) return;
      handle = createHeroLogo(el, {
        onReady: () => setMode("gl"),
        onError: () => setMode("image"),
      });
    });
    return () => {
      cancelled = true;
      handle?.destroy();
    };
  }, []);

  return (
    <div className={cn("relative aspect-[4/3] w-full", className)}>
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.3, ease: EASE }}
      >
        <span className="hero-glow hero-glow-a" />
        <span className="hero-glow hero-glow-b" />
      </motion.div>
      <div ref={host} className={cn("absolute inset-0 [contain:layout_paint]", mode === "gl" ? "opacity-100" : "opacity-0")} />
      {mode === "image" && (
        <Image
          src="/brand/hero-mark.webp"
          alt="The DeepWeaver mark in three dimensions: three capsule forms in the brand gradient."
          width={1416}
          height={756}
          priority
          sizes="(min-width: 1280px) 540px, (min-width: 1024px) 42vw, (min-width: 640px) 420px, 76vw"
          className="absolute inset-0 h-full w-full object-contain"
        />
      )}
    </div>
  );
}
