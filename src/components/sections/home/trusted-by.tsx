import Image from "next/image";
import Section from "@/components/ui/section";
import Reveal from "@/components/motion/reveal";
import { trustedBy } from "@/content/home";

/**
 * Trusted by — a statement on the left edge and a hairline grid of client
 * marks, continuing the hero's ground. Every mark is the partner's own
 * normalised asset (white on transparent, 600×200), so the cells read evenly.
 */
export default function TrustedBy() {
  return (
    <Section theme="dark" pad="sm" aria-label="Trusted by" className="border-t border-line">
      <div className="mx-auto max-w-wide px-gutter">
        <div className="grid-12 gap-y-10">
          <Reveal className="col-span-12 lg:col-span-4">
            <p className="eyebrow">Trusted by</p>
            <p className="mt-5 max-w-[30ch] text-[0.9375rem] leading-relaxed text-fg-muted sm:text-base">{trustedBy.copy}</p>
          </Reveal>
          <Reveal delay={0.08} className="col-span-12 lg:col-span-8 lg:col-start-5">
            <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-5">
              {trustedBy.logos.map((l) => (
                <li key={l.src} className="flex h-24 items-center justify-center bg-bg px-6 opacity-70 transition-opacity duration-300 hover:opacity-100 sm:h-28">
                  <Image src={l.src} alt={l.alt} width={600} height={200} className="h-9 w-auto max-w-full object-contain sm:h-10" />
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
