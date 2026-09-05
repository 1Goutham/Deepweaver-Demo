import type { Metadata } from "next";
import PageHero from "@/components/sections/page-hero";
import Section from "@/components/ui/section";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Terms", alternates: { canonical: "/legal/terms" }, robots: { index: false } };

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Website terms." size="md" />
      <Section theme="light" pad="md">
        <div className="mx-auto max-w-prose px-5 text-[0.9375rem] leading-relaxed text-fg-muted sm:px-8 lg:px-12">
          <p>Content on this website is provided for general information about DeepWeaver&rsquo;s services. Case study outcomes describe specific engagements and are not guarantees of results in other contexts. Client names withheld are available under NDA.</p>
          <p className="mt-5">Third-party marks shown are the property of their respective owners and indicate partnership or certification relationships only.</p>
          <p className="mt-8 text-xs text-fg-soft">Full terms will be published here. Questions: {site.email}.</p>
        </div>
      </Section>
    </>
  );
}
