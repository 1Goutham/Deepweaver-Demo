import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/page-hero";
import Section from "@/components/ui/section";

export const metadata: Metadata = { title: "Privacy Policy", alternates: { canonical: "/legal/privacy" }, robots: { index: false } };

const PRIVACY_EMAIL = "privacy@deepweaver.ai";

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy." size="md" lead="DeepWeaver Technologies Pty Ltd. How this website handles personal information." />
      <Section theme="light" pad="md">
        <div className="mx-auto max-w-wide px-gutter">
          <div className="grid-12 gap-y-12">
            <section className="col-span-12 grid-12 border-t border-line pt-8">
              <h2 className="col-span-12 text-display-xs text-fg lg:col-span-3">Analytics cookies</h2>
              <div className="col-span-12 mt-4 space-y-5 text-[0.9375rem] leading-relaxed text-fg-muted lg:col-span-8 lg:col-start-5 lg:mt-0">
                <p>This website uses Google Analytics to understand how it is used, and only if you accept analytics cookies. No advertising cookies are set, and the site works the same either way. IP addresses are anonymised.</p>
                <p>You can change your choice at any time with Cookie settings in the footer.</p>
              </div>
            </section>
            <section className="col-span-12 grid-12 border-t border-line pt-8">
              <h2 className="col-span-12 text-display-xs text-fg lg:col-span-3">Contact enquiries</h2>
              <div className="col-span-12 mt-4 space-y-5 text-[0.9375rem] leading-relaxed text-fg-muted lg:col-span-8 lg:col-start-5 lg:mt-0">
                <p>Enquiries sent through the contact form are delivered by email to our contact address, with your name, organisation, email and message, and are used only to respond to you.</p>
              </div>
            </section>
            <section className="col-span-12 grid-12 border-t border-line pt-8">
              <h2 className="col-span-12 text-display-xs text-fg lg:col-span-3">Terms of Use</h2>
              <div className="col-span-12 mt-4 space-y-5 text-[0.9375rem] leading-relaxed text-fg-muted lg:col-span-8 lg:col-start-5 lg:mt-0">
                <p>
                  This policy is incorporated into our{" "}
                  <Link href="/legal/terms" className="link-wipe text-fg">
                    Terms of Use
                  </Link>
                  , which also describe where the site is hosted and how data may be transferred.
                </p>
              </div>
            </section>
            <section className="col-span-12 grid-12 border-t border-line pt-8">
              <h2 className="col-span-12 text-display-xs text-fg lg:col-span-3">Contact us</h2>
              <div className="col-span-12 mt-4 space-y-5 text-[0.9375rem] leading-relaxed text-fg-muted lg:col-span-8 lg:col-start-5 lg:mt-0">
                <p>
                  Questions about personal information: DeepWeaver Technologies Pty Ltd,{" "}
                  <a href={`mailto:${PRIVACY_EMAIL}`} className="link-wipe text-fg">
                    {PRIVACY_EMAIL}
                  </a>
                  .
                </p>
              </div>
            </section>
          </div>
        </div>
      </Section>
    </>
  );
}
