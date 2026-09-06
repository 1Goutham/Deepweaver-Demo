export const site = {
  name: "DeepWeaver",
  legalName: "DeepWeaver.ai",
  url: "https://deepweaver.ai",
  email: "contact@deepweaver.ai",
  tagline: "Frontier and sovereign AI, across the physical and digital worlds.",
  description:
    "ISO/IEC 42001 certified AI engineering for enterprise and government across Australia and India. Digital, Physical, Frontier and Sovereign AI — measured on the outcome, not the effort.",
  regions: ["Australia", "India"],
  offices: [
    { country: "Australia", cities: ["Sydney", "Melbourne"] },
    { country: "India", cities: ["Coimbatore", "Chennai"] },
  ],
  linkedin: "https://au.linkedin.com/company/deepweaver",
} as const;

export type NavLink = { label: string; href: string; description?: string };

/** The four AI domains — the spine of the information architecture. */
export const pillarsNav: NavLink[] = [
  { label: "Digital AI", href: "/digital-ai", description: "Agents, documents and decisions inside the systems of record you already run." },
  { label: "Physical AI", href: "/physical-ai", description: "Perception and autonomy on robots, drones, cameras and wearables." },
  { label: "Frontier AI", href: "/frontier-ai", description: "The strongest models available, applied to work that was out of reach." },
  { label: "Sovereign AI", href: "/sovereign-ai", description: "Self-hosted and in-jurisdiction, for data that cannot leave." },
];

/** What we offer — shown under the AI Native Services menu. */
export const offerNav: NavLink[] = [
  { label: "Services", href: "/services", description: "Five service lines, one owner for the outcome." },
  { label: "AI Forward Deployed Engineering", href: "/ai-fde", description: "Blended consulting + AI engineering." },
  { label: "AI Governance", href: "/ai-governance", description: "Governance run as a workflow, ISO/IEC 42001 certified." },
  { label: "Factory Brain", href: "/factory-brain", description: "The orchestration layer between ERP and PLC." },
];

/** Top-level items after the AI Native Services menu, in order. */
export const primaryNav: NavLink[] = [
  { label: "Outcomes", href: "/outcomes" },
  { label: "AI FDE", href: "/ai-fde" },
  { label: "AI Governance", href: "/ai-governance" },
  { label: "About", href: "/about" },
];

export const footerNav = {
  "AI native services": [
    ...pillarsNav.map(({ label, href }) => ({ label, href })),
  ],
  "What we offer": offerNav.map(({ label, href }) => ({ label, href })),
  Company: [
    { label: "Home", href: "/" },
    { label: "Outcomes", href: "/outcomes" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
