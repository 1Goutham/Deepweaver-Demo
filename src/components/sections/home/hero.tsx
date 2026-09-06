"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/button";
import RevealText from "@/components/motion/reveal-text";
import { EASE } from "@/components/motion/reveal";
import { site } from "@/lib/site";
import { CollaborateIcon, MailIcon } from "@/components/ui/icons";

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE },
});

/**
 * Hero. Copy left, the brand's own 3D mark right. One fluid grid:
 * single column to lg, then 6/6. The image scales with its column and
 * is never cropped; heights come from content, not from the viewport.
 */
export default function Hero() {
  return (
    <section id="hero" data-theme="dark" className="bg-hero relative overflow-hidden text-white">
      <div className="relative mx-auto max-w-wide px-gutter">
        <div className="grid-12 items-center gap-y-12 pb-16 pt-[104px] sm:gap-y-14 sm:pb-20 sm:pt-[124px] lg:min-h-[min(100svh,880px)] lg:py-[120px]">
          <div className="col-span-12 lg:col-span-6 lg:pr-4">
            <RevealText
              text="Frontier and sovereign AI, across the physical and digital worlds."
              muted={4}
              className="max-w-[13ch] text-hero"
            />
            <motion.p className="mt-7 max-w-[42ch] text-lead font-light text-white/72 sm:mt-8" {...rise(0.7)}>
              ISO/IEC 42001 certified AI engineering for enterprise and government — measured on the outcome, not the effort.
            </motion.p>
            <motion.div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4 sm:mt-10" {...rise(0.85)}>
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

          <motion.div
            className="col-span-12 lg:col-span-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: EASE }}
          >
            <Image
              src="/brand/hero-mark.webp"
              alt="The DeepWeaver mark in three dimensions: three capsule forms in the brand gradient."
              width={1416}
              height={756}
              priority
              fetchPriority="high"
              sizes="(min-width: 1280px) 640px, (min-width: 1024px) 48vw, (min-width: 640px) 480px, 86vw"
              className="mx-auto h-auto w-full max-w-[min(86vw,380px)] sm:max-w-[480px] lg:max-w-[560px] xl:max-w-[640px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
