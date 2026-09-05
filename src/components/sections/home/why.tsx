import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/motion/reveal";
import { whyDeepWeaver } from "@/content/home";

export default function Why() {
  return (
    <Section theme="light" pad="lg" id="why">
      <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Why DeepWeaver"
              title="We own the outcome end to end."
              lead="Pure-play AI experts, ethical and responsible by design, with industrial experience and a delivery focus. Measured on cost, cycle time and revenue."
              size="lg"
            />
          </div>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
            <ol className="divide-y divide-line border-y border-line">
              {whyDeepWeaver.map((w, i) => (
                <li key={w.title} className="grid gap-2 py-7 sm:grid-cols-[3rem_1fr]">
                  <span className="font-display text-sm text-fg-soft">0{i + 1}</span>
                  <div>
                    <h3 className="text-display-xs font-semibold">{w.title}</h3>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-fg-muted">{w.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
