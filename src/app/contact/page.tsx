import type { Metadata } from "next";
import PageHero from "@/components/sections/page-hero";
import Section from "@/components/ui/section";
import Reveal from "@/components/motion/reveal";
import ContactForm from "@/components/sections/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to DeepWeaver about Digital, Physical, Frontier and Sovereign AI. Australia and India, in your time zone.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Tell us where the programme is stuck." lead="We will come back with the right shape of engagement — co-delivery, a centre of excellence, a fixed-scope project, uplift and transition, or as a service." size="md" />
      <Section theme="light" pad="lg">
        <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
          <div className="grid-12 gap-y-14">
            <Reveal className="lg:col-span-7">
              <ContactForm />
            </Reveal>
            <Reveal className="lg:col-span-5 lg:col-start-8" delay={0.1}>
              <p className="eyebrow">Email</p>
              <a href={`mailto:${site.email}`} className="link-wipe mt-3 inline-block font-display text-display-xs font-medium">
                {site.email}
              </a>
              <p className="eyebrow mt-10">Offices</p>
              <ul className="mt-4 divide-y divide-line border-y border-line">
                {site.offices.map((o) => (
                  <li key={o.country} className="py-4">
                    <p className="font-medium">{o.country}</p>
                    <p className="text-sm text-fg-muted">{o.cities.join(" · ")}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm text-fg-muted">Senior teams across Australia and India, onshore, offshore or blended, in your time zone.</p>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="link-wipe mt-6 inline-block text-sm font-medium">
                LinkedIn
              </a>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
