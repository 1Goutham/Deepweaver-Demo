"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/button";
import HeroVisual from "@/components/three/hero-visual";
import { EASE } from "@/components/motion/reveal";

const stagger = (i: number) => ({ duration: 0.9, delay: 0.15 + i * 0.1, ease: EASE });

export default function Hero() {
  const reduce = useReducedMotion();
  const anim = (i: number) =>
    reduce ? {} : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: stagger(i) };

  return (
    <section id="hero" data-theme="dark" className="relative overflow-hidden bg-ink text-white">
      <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
        <div className="grid-12 min-h-[100svh] items-center pb-16 pt-[112px] lg:pb-10 lg:pt-[128px]">
          {/* Content — left */}
          <div className="col-span-12 lg:col-span-6">
            <motion.p className="eyebrow" {...anim(0)}>
              AI-native services · ISO/IEC 42001 certified · Australia · India
            </motion.p>
            <motion.h1 className="mt-8 max-w-[11ch] text-display-xl text-white" {...anim(1)}>
              Frontier and sovereign AI, across the physical and digital worlds.
            </motion.h1>
            <motion.p className="mt-8 max-w-[38ch] text-lead font-light text-white/70" {...anim(2)}>
              Digital, Physical, Frontier and Sovereign AI for enterprise and government — governed end to end, and already in production.
            </motion.p>
            <motion.div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4" {...anim(3)}>
              <Button href="/contact" size="lg" className="bg-white text-ink hover:bg-violet">
                Talk to us
              </Button>
              <Link href="#domains" className="link-wipe text-[0.9375rem] font-medium text-white/85">
                The four AI domains
              </Link>
            </motion.div>
          </div>

          {/* Sculpture — right, bleeds past the column on large screens */}
          <motion.div
            className="col-span-12 mt-12 lg:col-span-6 lg:mt-0"
            {...(reduce ? {} : { initial: { opacity: 0, scale: 0.94 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 1.4, delay: 0.25, ease: EASE } })}
          >
            <HeroVisual className="mx-auto max-w-[560px] lg:ml-auto lg:mr-[-10%] lg:max-w-[760px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
