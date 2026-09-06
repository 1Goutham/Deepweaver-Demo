import Link from "next/link";
import Section from "@/components/ui/section";
import Reveal from "@/components/motion/reveal";
import Disclosure from "@/components/ui/disclosure";
import { uniqueAdvantages } from "@/content/home";

/**
 * Our unique advantages: four statements, each opening to its substance.
 * Progressive disclosure keeps the section calm; the first is open so the
 * pattern is legible without a click.
 */
export default function UniqueAdvantages() {
  const { eyebrow, title, sub, items } = uniqueAdvantages;
  return (
    <Section id="advantages" theme="lilac">
      <div className="mx-auto max-w-wide px-gutter">
        <div className="grid-12 gap-y-8">
          <Reveal className="col-span-12 lg:col-span-7">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="mt-6 max-w-[16ch] text-display-lg text-fg">{title}</h2>
          </Reveal>
          <Reveal delay={0.08} className="col-span-12 lg:col-span-4 lg:col-start-9 lg:self-end">
            <p className="max-w-[40ch] text-lead font-light text-fg-muted">{sub}</p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-16 lg:mt-24">
          <div className="grid-12">
            <div className="col-span-12 lg:col-span-10 lg:col-start-2">
              {items.map((it, i) => (
                <Disclosure key={it.title} code={`0${i + 1}`} title={it.title} summary={it.short} defaultOpen={i === 0} size="lg">
                  <p className="max-w-[60ch] text-[0.9375rem] leading-relaxed text-fg-muted sm:text-base">{it.body}</p>
                  <Link href={it.href} className="link-wipe mt-5 inline-block text-sm font-medium text-fg">
                    {it.cta}
                  </Link>
                </Disclosure>
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </Section>
  );
}
