import Section from "@/components/ui/section";
import Reveal from "@/components/motion/reveal";

/** The hinge of the story: one large, quiet statement on a light field. */
export default function Statement() {
  return (
    <Section theme="light" pad="none" className="section-pad">
      <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
        <div className="grid-12">
          <Reveal className="col-span-12 lg:col-span-10 lg:col-start-2">
            <h2 className="text-display-lg font-light text-fg">
              Most AI stops at the screen. <span className="text-fg-soft">Ours reaches the factory floor, the field and the front office.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="col-span-12 mt-12 lg:col-span-5 lg:col-start-7 lg:mt-16">
            <p className="text-lead font-light text-fg-muted">
              Two worlds, one stack — physical and digital AI joined by one convergence layer and one governance layer, human-led, and in production with enterprise and government.
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
