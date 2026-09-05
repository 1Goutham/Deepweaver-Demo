"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "@/components/ui/button";
import HeroVisual from "@/components/three/hero-visual";
import RevealText from "@/components/motion/reveal-text";
import { EASE } from "@/components/motion/reveal";
import { site } from "@/lib/site";
import { CollaborateIcon, MailIcon } from "@/components/ui/icons";

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE },
});

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  // Depth: the orb drifts at a fraction of scroll speed while the hero leaves the viewport.
  const { scrollY } = useScroll();
  const orbY = useTransform(scrollY, [0, 900], [0, 90]);
  const orbOpacity = useTransform(scrollY, [0, 700], [1, 0.4]);

  return (
    <section id="hero" ref={ref} data-theme="dark" className="bg-hero relative overflow-hidden text-white">
      <div className="relative mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
        <div className="grid-12 items-center gap-y-14 pb-20 pt-[120px] sm:pt-[136px] lg:min-h-[min(100svh,900px)] lg:pb-[96px] lg:pt-[136px]">
          {/* Copy — left */}
          <div className="col-span-12 lg:col-span-6 lg:pr-6">
            <motion.p className="eyebrow" {...rise(0.1)}>
              AI-native services · Australia · India
            </motion.p>
            <RevealText
              text="Frontier and sovereign AI, across the physical and digital worlds."
              muted={4}
              className="mt-9 max-w-[13ch] text-hero"
            />
            <motion.p className="mt-8 max-w-[40ch] text-lead font-light text-white/72" {...rise(0.75)}>
              Digital, Physical, Frontier and Sovereign AI for enterprise and government — governed end to end, and already in production.
            </motion.p>
            <motion.div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5" {...rise(0.9)}>
              <Button href="/contact" size="lg" leading={<CollaborateIcon />}>
                Let&rsquo;s collaborate
              </Button>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2.5 text-[0.9375rem] font-medium text-white/85 transition-colors hover:text-white">
                <span aria-hidden className="inline-flex size-[18px] items-center justify-center [&>svg]:size-full">
                  <MailIcon />
                </span>
                {site.email}
              </a>
            </motion.div>
          </div>

          {/* Orb — right: a slow settle on entrance, then a slight depth drift on scroll */}
          <motion.div
            className="col-span-12 will-change-transform lg:col-span-6"
            style={{ y: orbY, opacity: orbOpacity }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          >
            <HeroVisual className="mx-auto w-full max-w-[380px] sm:max-w-[460px] lg:max-w-[540px] xl:max-w-[580px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
