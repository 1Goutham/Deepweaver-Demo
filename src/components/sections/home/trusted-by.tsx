import Image from "next/image";
import Section from "@/components/ui/section";
import Reveal from "@/components/motion/reveal";
import { trustedBy } from "@/content/home";

/** Trusted by — one sentence and a calm grid of client marks, continuing the hero's ground. */
export default function TrustedBy() {
  return (
    <Section theme="dark" pad="sm" aria-label="Trusted by" className="border-t border-line">
      <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
        <Reveal>
          <p className="mx-auto max-w-[60ch] text-center text-[0.9375rem] leading-relaxed text-fg-muted sm:text-base">{trustedBy.copy}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <ul className="mx-auto mt-12 grid max-w-[64rem] grid-cols-2 items-center gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-x-10 lg:grid-cols-5 lg:gap-y-12">
            {trustedBy.logos.map((l) => (
              <li key={l.src} className="flex h-12 items-center justify-center opacity-60 transition-opacity hover:opacity-100 sm:h-14">
                <Image src={l.src} alt={l.alt} width={600} height={200} className="h-10 w-auto max-w-full object-contain sm:h-12" />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
