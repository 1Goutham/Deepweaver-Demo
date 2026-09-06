export type Flagship = {
  id: string;
  client: string;
  kicker: string;
  region: string;
  summary: string;
  tags: string[];
  builtOn: string;
  pillar: string;
  image?: { src: string; alt: string; w: number; h: number };
  logo?: { src: string; w: number; h: number };
};

export const flagships: Flagship[] = [
  {
    id: "arb",
    client: "ARB Corporation",
    kicker: "ASX-listed manufacturer · global operations",
    region: "Australia",
    summary:
      "Supplier invoices were validated, coded and routed by hand across global accounts payable teams. We delivered an end-to-end intelligent processing pipeline on OCI, integrated with JD Edwards.",
    tags: ["Invoice automation", "Document intelligence", "Agentic workflow", "JDE integration"],
    builtOn: "OCI · Oracle HeatWave · JD Edwards · LangGraph · Docling · FastAPI",
    pillar: "Digital AI",
    logo: { src: "/work/arb.png", w: 252, h: 131 },
  },
  {
    id: "landcom",
    client: "Landcom",
    kicker: "NSW Government · land and property",
    region: "Australia",
    summary:
      "Finance workflows automated end to end, then extended into enterprise-wide AI adoption — governance, a retained forward-deployed engineer, and training and enablement across the organisation.",
    tags: ["Finance workflows", "Enterprise AI adoption", "AI governance", "FDE service", "Training & enablement"],
    builtOn: "OCI · Oracle AI Services · Claude · workflow orchestration layer",
    pillar: "Digital AI · Governance",
    logo: { src: "/work/landcom.png", w: 105, h: 105 },
  },
  {
    id: "hearsight",
    client: "HearSight",
    kicker: "Assistive technology · HealthTech · India",
    region: "India",
    summary:
      "On-device smart glasses for people with low vision. Every model runs on the glasses themselves — no cloud round trip, no connectivity assumption, no data leaving the wearer. Object and obstacle detection, OCR read aloud, face recognition, wayfinding and fully offline payment assistance.",
    tags: ["Edge inference", "Model compression", "Computer vision", "On-device OCR", "Wearable hardware"],
    builtOn: "On-device inference · computer vision · model compression · wearable hardware",
    pillar: "Physical AI",
    image: { src: "/work/hearsight-glasses.png", alt: "HearSight smart glasses", w: 452, h: 183 },
    logo: { src: "/clients/hearsight.png", w: 600, h: 200 },
  },
];

export type CaseStudy = {
  title: string;
  sector: string;
  domain: string;
  body: string;
  outcomes: string[];
  group: "Government & public sector" | "Hospitality, retail & consumer" | "Industrial, financial & platform";
};

export const caseStudies: CaseStudy[] = [
  { group: "Government & public sector", title: "State prosecution authority", sector: "Justice", domain: "Case management", body: "Case file summarisation, evidence tagging and workflow routing inside government security controls.", outcomes: ["Cycle time", "Compliance"] },
  { group: "Government & public sector", title: "State pathology service", sector: "Health", domain: "Clinical documents", body: "Clinical document intelligence — extraction, structuring and coding of pathology reports.", outcomes: ["Cycle time", "Accuracy"] },
  { group: "Government & public sector", title: "Metropolitan local council", sector: "Local government", domain: "Citizen service", body: "GenAI citizen assistant over resident enquiries, with event booking and live-agent handover.", outcomes: ["Service uplift", "Cost efficiency"] },
  { group: "Government & public sector", title: "Government land agency", sector: "Public sector", domain: "Planning", body: "Agentic building-plan compliance with real-time scoring and approval workflow management.", outcomes: ["Cycle time", "Compliance"] },
  { group: "Government & public sector", title: "Group of Eight research university", sector: "Higher education", domain: "Research", body: "AI segmentation of geology microscopy — annotation cut from hours to seconds per image.", outcomes: ["Productivity", "Research velocity"] },
  { group: "Government & public sector", title: "National aeromedical service", sector: "Health", domain: "Operations", body: "Automated document classification on metadata and content across operational records.", outcomes: ["Productivity", "Cost efficiency"] },
  { group: "Hospitality, retail & consumer", title: "Listed hotel and accommodation group", sector: "Hospitality", domain: "Reservations", body: "Voice AI booking assistant handling availability, reservations and upsell autonomously.", outcomes: ["Revenue generation", "Service uplift"] },
  { group: "Hospitality, retail & consumer", title: "International hotel group", sector: "Hospitality", domain: "Multi-property", body: "Guest experience platform spanning check-in, service requests and issue resolution.", outcomes: ["Service uplift", "Cost efficiency"] },
  { group: "Hospitality, retail & consumer", title: "Hotel operations agent", sector: "Hospitality", domain: "Property systems", body: "Real-time agent chaining through MCP into the property management system.", outcomes: ["Cycle time", "Service uplift"] },
  { group: "Hospitality, retail & consumer", title: "Visitor economy platform", sector: "Travel", domain: "Itinerary planning", body: "Travel assistant with real-time weather and calendar context, and human handover.", outcomes: ["Service uplift", "Revenue generation"] },
  { group: "Hospitality, retail & consumer", title: "National fashion retail chain", sector: "Retail", domain: "Analytics", body: "Retail analytics over purchasing patterns, inventory optimisation and marketing performance.", outcomes: ["Revenue generation", "Margin uplift"] },
  { group: "Hospitality, retail & consumer", title: "Global consumer toy manufacturer", sector: "Consumer goods", domain: "Trade documents", body: "Multi-lingual document intelligence with no-code schema changes across trading partners.", outcomes: ["Cost efficiency", "Accuracy"] },
  { group: "Industrial, financial & platform", title: "Sports technology and media platform", sector: "Media", domain: "Live production", body: "Real-time transcription, event detection and automated highlight generation.", outcomes: ["Revenue generation", "Time to market"] },
  { group: "Industrial, financial & platform", title: "Private property investment group", sector: "Financial services", domain: "Legal", body: "Legal workflow processing with access control, document generation and a compliance engine.", outcomes: ["Cycle time", "Compliance"] },
  { group: "Industrial, financial & platform", title: "Private property investment group", sector: "Financial services", domain: "Finance", body: "Finance agent across multiple systems of record, with real-time analytics and a personalised interface.", outcomes: ["Productivity", "Accuracy"] },
  { group: "Industrial, financial & platform", title: "Enterprise ERP estate", sector: "Cross-industry", domain: "Procurement", body: "Procure-to-pay multi-agent system with intent classification and MCP-based integration.", outcomes: ["Cost efficiency", "Cycle time"] },
  { group: "Industrial, financial & platform", title: "Enterprise horizontal", sector: "Cross-industry", domain: "Platform", body: "Private AI platform and multi-agent assistant spanning managed, hosted and third-party models.", outcomes: ["Time to market", "Cost efficiency"] },
];
