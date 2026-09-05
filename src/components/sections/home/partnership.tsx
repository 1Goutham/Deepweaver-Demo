import Image from "next/image";
import Section from "@/components/ui/section";
import Reveal from "@/components/motion/reveal";

/**
 * Nunnari × DeepWeaver. Two marks, one sentence, two columns.
 * Copy follows how the relationship is stated on nunnarilabs.com.
 */
export default function Partnership() {
  return (
    <Section id="partnership" theme="mist">
      <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
        <div className="grid-12">
          <Reveal className="col-span-12 lg:col-span-6">
            <p className="eyebrow">Exclusive partnership</p>
            <div className="mt-10 flex items-center gap-8">
              <Image src="/brand/deepweaver-lockup-navy.png" alt="DeepWeaver" width={2048} height={402} className="h-9 w-auto" />
              <span aria-hidden className="font-display text-display-sm font-light text-fg-soft">×</span>
              <Image src="/partners/nunnari-labs-navy.png" alt="Nunnari Labs" width={274} height={322} className="h-20 w-auto" />
            </div>
          </Reveal>
          <Reveal delay={0.08} className="col-span-12 mt-10 lg:col-span-6 lg:col-start-7 lg:mt-0">
            <h2 className="text-display-md text-fg">One delivery team across India and Australia.</h2>
            <p className="mt-8 max-w-[52ch] text-lead font-light text-fg-muted">
              DeepWeaver leads client engagement in Australia and New Zealand from Sydney. Nunnari Labs leads research and engineering from Coimbatore. One project history, one governance layer, no hand-offs between companies.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.14} className="mt-20 lg:mt-28">
          <div className="grid-12 gap-y-12 border-t border-line pt-10">
            <div className="col-span-12 lg:col-span-5">
              <h3 className="font-display text-display-sm text-fg">DeepWeaver</h3>
              <p className="mt-1 text-sm text-fg-muted">Sydney · Melbourne</p>
              <p className="mt-6 max-w-[40ch] text-[0.9375rem] leading-relaxed text-fg-muted">
                Enterprise and public-sector relationships. AI consulting, governance and risk frameworks. Cloud and frontier-model partner channels.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-5 lg:col-start-7">
              <h3 className="font-display text-display-sm text-fg">Nunnari Labs</h3>
              <p className="mt-1 text-sm text-fg-muted">Coimbatore · Chennai</p>
              <p className="mt-6 max-w-[40ch] text-[0.9375rem] leading-relaxed text-fg-muted">
                Research-led AI engineering, ISO/IEC 42001 certified. Digital AI build, plus Physical AI, edge and robotics. The AI Tamil Nadu community as a talent pipeline.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
