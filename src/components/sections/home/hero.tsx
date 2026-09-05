"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/button";
import HeroVisual from "@/components/three/hero-visual";
import { EASE } from "@/components/motion/reveal";

const stagger = (i: number) => ({ duration: 0.9, delay: 0.15 + i * 0.1, ease: EASE });
const anim = (i: number) => ({ initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: stagger(i) });

export default function Hero() {
  return (
    <section id="hero" data-theme="dark" className="bg-hero relative overflow-hidden text-white">
      <div className="relative mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
        <div className="grid-12 items-center gap-y-14 pb-20 pt-[120px] sm:pt-[136px] lg:min-h-[min(100svh,900px)] lg:pb-[96px] lg:pt-[136px]">
          {/* Copy — left */}
          <div className="col-span-12 lg:col-span-6 lg:pr-6">
            <motion.div className="flex flex-wrap items-center gap-3" {...anim(0)}>
              <span className="inline-flex h-8 items-center rounded-full bg-[#d2e8c8] px-3.5 text-[0.75rem] font-medium tracking-[0.02em] text-ink">
                ISO/IEC 42001 certified
              </span>
              <span className="eyebrow">AI-native services · Australia · India</span>
            </motion.div>
            <motion.h1 className="mt-9 max-w-[13ch] text-hero" {...anim(1)}>
              Frontier and sovereign AI, <span className="text-white/60">across the physical and digital worlds.</span>
            </motion.h1>
            <motion.p className="mt-8 max-w-[40ch] text-lead font-light text-white/72" {...anim(2)}>
              Digital, Physical, Frontier and Sovereign AI for enterprise and government — governed end to end, and already in production.
            </motion.p>
            <motion.div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5" {...anim(3)}>
              <Button href="/contact" size="lg">
                Talk to us
              </Button>
              <Link href="#domains" className="group inline-flex items-center gap-2 text-[0.9375rem] font-medium text-white/85 transition-colors hover:text-white">
                The four AI domains
                <span aria-hidden className="inline-block transition-transform duration-300 ease-out-expo group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>
          </div>

          {/* Orb — right */}
          <motion.div
            className="col-span-12 lg:col-span-6"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.25, ease: EASE }}
          >
            <HeroVisual className="mx-auto w-full max-w-[380px] sm:max-w-[460px] lg:max-w-[540px] xl:max-w-[580px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
