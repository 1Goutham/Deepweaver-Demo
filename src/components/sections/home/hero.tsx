"use client";

import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/button";
import HeroVisual from "@/components/three/hero-visual";
import { EASE } from "@/components/motion/reveal";

const stagger = (i: number) => ({ duration: 0.8, delay: 0.1 + i * 0.09, ease: EASE });

export default function Hero() {
  const reduce = useReducedMotion();
  const anim = (i: number) =>
    reduce ? {} : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: stagger(i) };

  return (
    <section id="hero" data-theme="dark" className="relative overflow-hidden bg-ink text-white">
      <div aria-hidden className="bg-dotgrid absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(60%_60%_at_30%_40%,#000,transparent)]" />
      <div className="relative mx-auto grid max-w-wide grid-cols-1 items-center gap-10 px-5 pb-16 pt-[104px] sm:px-8 lg:min-h-[calc(100vh-0px)] lg:grid-cols-12 lg:gap-8 lg:px-12 lg:pb-20 lg:pt-[120px]">
        {/* Visual — left on desktop, second on mobile */}
        <motion.div
          className="order-2 lg:order-1 lg:col-span-6 xl:col-span-6"
          {...(reduce ? {} : { initial: { opacity: 0, scale: 0.96 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 1.1, delay: 0.15, ease: EASE } })}
        >
          <HeroVisual className="mx-auto max-w-[520px] lg:max-w-none" />
        </motion.div>

        {/* Content — right on desktop, first on mobile */}
        <div className="order-1 lg:order-2 lg:col-span-6 lg:pl-8 xl:col-span-5 xl:col-start-8 xl:pl-0">
          <motion.p className="eyebrow text-violet" {...anim(0)}>
            AI-native services · Australia · India
          </motion.p>
          <motion.h1 className="mt-6 text-display-xl font-semibold text-white" {...anim(1)}>
            Frontier and sovereign AI, across the physical and digital worlds.
          </motion.h1>
          <motion.p className="mt-7 max-w-[46ch] text-lead font-light text-white/75" {...anim(2)}>
            ISO/IEC 42001 certified AI engineering for enterprise and government. Digital, Physical, Frontier and Sovereign AI — governed end to end, human-led, and already in production.
          </motion.p>
          <motion.div className="mt-9 flex flex-wrap items-center gap-4" {...anim(3)}>
            <Button href="/contact" size="lg" className="bg-white text-ink hover:bg-violet">
              Talk to us
            </Button>
            <Button href="#domains" size="lg" variant="ghost" className="border-white/30 text-white hover:border-white hover:bg-white/5">
              The four AI domains
            </Button>
          </motion.div>
          <motion.dl className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-6" {...anim(4)}>
            {[
              ["Regions", "Australia · India"],
              ["Practice", "Physical & Digital AI"],
              ["Certified", "ISO/IEC 42001"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="eyebrow text-white/45">{k}</dt>
                <dd className="mt-2 text-sm font-medium text-white/90">{v}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
