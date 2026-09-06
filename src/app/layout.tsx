import type { Metadata, Viewport } from "next";
import { Catamaran, Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/motion/lenis-provider";
import MotionProvider from "@/components/motion/motion-provider";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import Consent from "@/components/layout/consent";
import { site } from "@/lib/site";

const catamaran = Catamaran({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-catamaran",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Frontier and sovereign AI, across the physical and digital worlds`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_AU",
    url: site.url,
    title: `${site.name} — AI-native services`,
    description: site.description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "DeepWeaver — Frontier and sovereign AI, across the physical and digital worlds" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — AI-native services`,
    description: site.description,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  icons: { icon: "/icon.png", apple: "/apple-icon.png" },
};

export const viewport: Viewport = {
  themeColor: "#0c2130",
  width: "device-width",
  initialScale: 1,
};

const organisationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/brand/deepweaver-mark-navy.png`,
  email: site.email,
  description: site.description,
  location: site.offices.flatMap((o) =>
    o.cities.map((city) => ({
      "@type": "Place",
      address: { "@type": "PostalAddress", addressLocality: city, addressCountry: o.country === "Australia" ? "AU" : "IN" },
    })),
  ),
  sameAs: [site.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${catamaran.variable} ${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <LenisProvider />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-amber focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Nav />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <Consent />
        </MotionProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationJsonLd) }}
        />
      </body>
    </html>
  );
}
