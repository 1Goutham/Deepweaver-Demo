import type { Metadata } from "next";
import PageHero from "@/components/sections/page-hero";
import Section from "@/components/ui/section";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy", alternates: { canonical: "/legal/privacy" }, robots: { index: false } };

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy notice." size="md" />
      <Section theme="light" pad="md">
        <div className="mx-auto max-w-prose px-5 text-[0.9375rem] leading-relaxed text-fg-muted sm:px-8 lg:px-12">
          <p>This website does not set tracking cookies and does not run third-party analytics. Contact enquiries are sent by your own mail client to {site.email} and are used only to respond to you.</p>
          <p className="mt-5">DeepWeaver is ISO/IEC 42001 certified. Questions about how we handle personal information in engagements can be sent to {site.email}.</p>
          <p className="mt-8 text-xs text-fg-soft">A full privacy policy will be published here.</p>
        </div>
      </Section>
    </>
  );
}
