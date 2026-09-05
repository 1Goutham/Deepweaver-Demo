export const site = {
  name: "DeepWeaver",
  legalName: "DeepWeaver.ai",
  url: "https://deepweaver.ai",
  email: "contact@deepweaver.ai",
  tagline: "Frontier and sovereign AI, across the physical and digital worlds.",
  description:
    "DeepWeaver is an ISO/IEC 42001 certified AI-native services company across Australia and India. Digital, Physical, Frontier and Sovereign AI — governed end to end, human-led, and already in production with enterprise and government.",
  regions: ["Australia", "India"],
  offices: [
    { country: "Australia", cities: ["Sydney", "Melbourne"] },
    { country: "India", cities: ["Coimbatore", "Chennai"] },
  ],
  linkedin: "https://au.linkedin.com/company/deepweaver",
} as const;

export type NavLink = { label: string; href: string; description?: string };

export const pillarsNav: NavLink[] = [
  { label: "Digital AI", href: "/digital-ai", description: "Agents, documents, voice and decisioning in the systems of record." },
  { label: "Physical AI", href: "/physical-ai", description: "Robots, drones, wearables and vision, running on the device." },
  { label: "Frontier AI", href: "/frontier-ai", description: "Frontier models, fine-tuning and GPU infrastructure, evaluated." },
  { label: "Sovereign AI", href: "/sovereign-ai", description: "Frontier capability inside national boundaries, with evidence." },
];

export const primaryNav: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "AI Governance", href: "/ai-governance" },
  { label: "Factory Brain", href: "/factory-brain" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
];

export const footerNav = {
  "What we do": [
    ...pillarsNav.map(({ label, href }) => ({ label, href })),
    { label: "Services", href: "/services" },
    { label: "AI Governance", href: "/ai-governance" },
    { label: "Factory Brain", href: "/factory-brain" },
  ],
  Company: [
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy", href: "/legal/privacy" },
    { label: "Terms", href: "/legal/terms" },
  ],
} as const;
