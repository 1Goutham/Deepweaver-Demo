import Section from "@/components/ui/section";
import Reveal from "@/components/motion/reveal";
import Button from "@/components/ui/button";
import { site } from "@/lib/site";

type Props = { eyebrow?: string; title?: string; body?: string };

export default function Cta({
  eyebrow = "Start the conversation",
  title = "Extending the reach of AI beyond the screen — from the field to the factory floor and everything in between.",
  body = "Ready to move forward? Let’s talk about your specific needs and how we can help you succeed.",
}: Props) {
  return (
    <Section theme="brand" className="bg-brand-gradient">
      <div className="mx-auto max-w-wide px-gutter">
        <div className="grid-12">
          <Reveal className="col-span-12 lg:col-span-8">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="mt-6 text-display-lg text-fg">{title}</h2>
          </Reveal>
          <Reveal delay={0.1} className="col-span-12 mt-10 lg:col-span-5 lg:col-start-8 lg:mt-0 lg:self-end">
            <p className="text-[0.9375rem] leading-relaxed text-fg-muted">{body}</p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Button href="/contact" size="lg" variant="light">
                Get in touch
              </Button>
              <a href={`mailto:${site.email}`} className="link-wipe text-[0.9375rem] font-medium text-fg">
                {site.email}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
