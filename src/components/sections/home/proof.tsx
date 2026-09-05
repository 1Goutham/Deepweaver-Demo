import Image from "next/image";
import Link from "next/link";
import Section from "@/components/ui/section";
import Reveal from "@/components/motion/reveal";
import { StaggerList, StaggerItem } from "@/components/motion/stagger";
import CountUp from "@/components/motion/count-up";
import { alliances } from "@/content/home";

const numbers = [
  { value: 90, suffix: "%", label: "lower invoice processing cost for an ASX-listed manufacturer" },
  { value: 2.9, prefix: "A$", suffix: "M", decimals: 1, label: "projected annual saving from one document pipeline" },
  { value: 200, label: "government staff enabled, with five FTE freed every week" },
];

/** Proof: three numbers on edge 2, then the alliances as one quiet monochrome row. */
export default function Proof() {
  return (
    <Section id="proof" theme="dark">
      <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
        <div className="grid-12 gap-y-12">
          <Reveal className="col-span-12 lg:col-span-6">
            <p className="eyebrow">Proof</p>
            <h2 className="mt-8 max-w-[14ch] text-display-md text-fg">In production with enterprise and government.</h2>
            <Link href="/work" className="link-wipe mt-8 inline-block text-[0.9375rem] font-medium text-fg">
              See the work
            </Link>
          </Reveal>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <StaggerList as="dl" className="divide-y divide-line border-y border-line">
              {numbers.map((n) => (
                <StaggerItem key={n.label} className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] items-baseline gap-6 py-7">
                  <dt className="order-2 max-w-[28ch] text-[0.9375rem] leading-relaxed text-fg-muted">{n.label}</dt>
                  <dd className="order-1 font-display text-display-lg tabular-nums text-fg">
                    <CountUp to={n.value} prefix={n.prefix} suffix={n.suffix} decimals={n.decimals} />
                  </dd>
                </StaggerItem>
              ))}
            </StaggerList>
          </div>
        </div>

        <Reveal delay={0.14} className="mt-24 lg:mt-32">
          <div className="grid-12 items-center gap-y-8 border-t border-line pt-10">
            <p className="eyebrow col-span-12 lg:col-span-6">Alliances built for enterprise AI</p>
            <ul className="col-span-12 flex flex-wrap items-center gap-x-7 gap-y-5 lg:col-span-6 lg:col-start-7 lg:flex-nowrap lg:justify-between" aria-label="Alliances">
              {alliances.map((a) => (
                <li key={a.name} className="opacity-60 transition-opacity hover:opacity-100">
                  <Image src={a.src} alt={a.name} width={a.w} height={a.h} className="h-4 w-auto brightness-0 invert" />
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
