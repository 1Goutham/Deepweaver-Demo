import Section from "@/components/ui/section";
import Reveal from "@/components/motion/reveal";

/** The hinge of the story: the deck's closing line, promoted to the tension beat. */
export default function Statement() {
  return (
    <Section theme="deep" pad="lg" className="overflow-hidden">
      <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
        <Reveal>
          <p className="eyebrow text-violet">The gap</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="headline-fade mt-6 max-w-[16ch] text-display-xl font-semibold">
            Most AI stops at the screen. Ours reaches the factory floor, the field and the front office.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-10 max-w-[52ch] text-lead font-light text-fg-muted">
            Two worlds, one stack — governed end to end and human-led. Physical and digital AI, joined by one convergence layer and one governance layer, already in production with enterprise and government.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
