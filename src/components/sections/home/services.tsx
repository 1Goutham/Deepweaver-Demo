import Link from "next/link";
import Section from "@/components/ui/section";
import Reveal from "@/components/motion/reveal";
import { serviceLines } from "@/content/home";

/** Five service lines, as a numbered editorial list on the same two edges. */
export default function Services() {
  return (
    <Section id="services" theme="light">
      <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
        <div className="grid-12 gap-y-10">
          <Reveal className="col-span-12 lg:col-span-6">
            <p className="eyebrow">What we do</p>
            <h2 className="mt-8 max-w-[14ch] text-display-md text-fg">Five service lines, one owner for the outcome.</h2>
          </Reveal>
          <Reveal delay={0.08} className="col-span-12 lg:col-span-5 lg:col-start-7 lg:self-end">
            <p className="max-w-[44ch] text-lead font-light text-fg-muted">
              From where the programme starts to how value is sustained. Delivered on the customer&rsquo;s cloud and models of choice.
            </p>
            <Link href="/services" className="link-wipe mt-8 inline-block text-[0.9375rem] font-medium text-fg">
              All services
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="mt-20 lg:mt-28">
          <ol className="border-t border-line">
            {serviceLines.map((s) => (
              <li key={s.index} className="border-b border-line">
                <Link href={s.href} className="group grid-12 items-baseline py-7 md:py-8">
                  <span className="col-span-12 flex items-baseline gap-5 lg:col-span-6">
                    <span className="w-6 font-display text-sm text-fg-soft">{s.index}</span>
                    <span className="font-display text-display-sm font-medium text-fg">{s.name}</span>
                  </span>
                  <span className="col-span-12 mt-2 pl-11 text-[0.9375rem] text-fg-muted lg:col-span-5 lg:col-start-7 lg:mt-0 lg:pl-0">
                    {s.kicker} — {s.outcome.charAt(0).toLowerCase() + s.outcome.slice(1)}.
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </Section>
  );
}
