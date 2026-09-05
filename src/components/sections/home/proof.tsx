import Link from "next/link";
import Section from "@/components/ui/section";
import Reveal from "@/components/motion/reveal";
import CountUp from "@/components/motion/count-up";

/** Proof, reduced to three numbers and one sentence. */
const numbers = [
  { value: 90, suffix: "%", label: "lower invoice processing cost for an ASX-listed manufacturer" },
  { value: 2.9, prefix: "A$", suffix: "M", decimals: 1, label: "projected annual saving from one document pipeline" },
  { value: 200, label: "government staff enabled, with five FTE freed every week" },
];

export default function Proof() {
  return (
    <Section id="proof" theme="dark" pad="none" className="section-pad border-t border-line">
      <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
        <div className="grid-12">
          <Reveal className="col-span-12 lg:col-span-5">
            <p className="eyebrow">Proof</p>
            <h2 className="mt-6 text-display-md text-fg">In production with enterprise and government.</h2>
            <Link href="/work" className="link-wipe mt-8 inline-block text-[0.9375rem] font-medium text-fg">
              See the work
            </Link>
          </Reveal>
          <Reveal delay={0.1} className="col-span-12 mt-14 lg:col-span-6 lg:col-start-7 lg:mt-0">
            <dl className="divide-y divide-line border-y border-line">
              {numbers.map((n) => (
                <div key={n.label} className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] items-baseline gap-6 py-7">
                  <dt className="order-2 text-[0.9375rem] leading-relaxed text-fg-muted">{n.label}</dt>
                  <dd className="order-1 font-display text-display-lg tabular-nums text-fg">
                    <CountUp to={n.value} prefix={n.prefix} suffix={n.suffix} decimals={n.decimals} />
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
