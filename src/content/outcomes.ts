export type Story = {
  slug: string;
  title: string;
  description: string;
  industry: string;
  system: string;
  tags: string[];
};

/** Detailed stories, in the order the partner site lists them (newest first). */
export const stories: Story[] = [
  { slug: "sovereign-ai-infrastructure-intelligent-routing", title: "Sovereign AI infrastructure with intelligent model routing", description: "A large financial services organisation needed AI over sensitive documents with nothing leaving the premises — NVIDIA L40S infrastructure validated for enterprise use, and an LLM router that sends each task to the right model.", industry: "Financial services · Sovereign AI", system: "Sovereign GPU platform + LLM router", tags: ["Sovereign AI", "NVIDIA L40S", "LLM routing", "On-premises"] },
  { slug: "digital-health-report-assistant", title: "Medical reports explained in plain language, inside the provider's own cloud", description: "A conversational AI assistant for a digital health provider that reads uploaded medical reports and answers questions about them in plain language — built to HIPAA, GDPR, LGPD and ANVISA requirements, integrated with EPIC through FHIR and HL7.", industry: "Digital health · Healthcare", system: "Conversational report assistant", tags: ["Document intelligence", "Conversational AI", "EHR integration", "HIPAA & GDPR"] },
  { slug: "supplier-invoice-automation", title: "Supplier invoices automated, end to end", description: "ARB Corporation — an ASX-listed manufacturer with global operations — replaced hand validation, coding and routing of supplier invoices with an intelligent processing pipeline on Oracle Cloud, integrated with JD Edwards.", industry: "Manufacturing · ASX-listed", system: "Invoice automation", tags: ["Invoice automation", "Document intelligence", "Agentic workflow", "JDE integration"] },
  { slug: "voice-ai-hotel-booking", title: "Voice AI booking assistant for an ASX-listed hotel group", description: "A voice assistant that takes and manages bookings for an ASX-listed hotel group, inside the reservation systems the group already runs.", industry: "Hospitality · ASX-listed", system: "Voice AI assistant", tags: ["Voice AI", "Agentic AI", "Workflow automation"] },
  { slug: "government-case-file-summarisation", title: "Case files summarised inside government security controls", description: "Case file summarisation, evidence tagging and workflow routing for a state prosecution authority — deployed and operated entirely within government security controls.", industry: "State prosecution authority · Justice", system: "Sovereign GenAI", tags: ["Sovereign AI", "Document intelligence", "Self-hosted LLM"] },
  { slug: "geology-microscopy-annotation", title: "Geology microscopy annotated in seconds, not hours", description: "AI segmentation of geology microscopy for a Group of Eight research university — annotation cut from hours to seconds per image.", industry: "Go8 research university · Higher education", system: "Microscopy vision AI", tags: ["Vision & video AI", "Multimodal understanding", "Frontier AI"] },
  { slug: "public-sector-genai-enablement", title: "Finance workflows automated, then enterprise-wide AI adoption", description: "Landcom, the NSW Government's land and property agency — finance workflows automated end to end, then extended into enterprise-wide AI adoption with governance, a retained forward-deployed engineer, and training across the organisation.", industry: "NSW Government · Land and property", system: "Enterprise AI adoption", tags: ["Finance workflows", "Enterprise AI adoption", "AI governance", "FDE service"] },
  { slug: "government-document-redaction", title: "Sensitive legal documents, redacted at scale", description: "Automated PII redaction in production for a state-level prosecutor in Australia, delivered on Oracle OCI.", industry: "Government · Australia", system: "AI Redaction Platform", tags: ["GenAI", "Document AI", "Oracle OCI"] },
  { slug: "supply-chain-intelligence-agents", title: "Autonomous agents inside a packaging supply chain", description: "An AI-native supply chain intelligence platform with autonomous agents, delivered with Oracle.", industry: "Global Supply Chain", system: "AFL 2PACK", tags: ["GenAI", "Agents", "Oracle OCI"] },
  { slug: "precision-welding-ai", title: "Real-time weld guidance on the shop floor", description: "A helmet-mounted computer vision system guiding direction, angle, and velocity in real time — live in steel plants.", industry: "Manufacturing", system: "Precision Welding AI", tags: ["Real-time CV", "Edge AI", "Embedded"] },
  { slug: "clinical-simulation-patient-avatar", title: "AI patient avatars for clinical training", description: "AR-based clinical simulation for nursing students at an Australian university, built on NVIDIA ACE and Oracle OCI.", industry: "Higher Education", system: "AI Patient Avatar", tags: ["NVIDIA ACE", "AR", "Oracle OCI"] },
  { slug: "hearsight-assistive-wearable", title: "Smart glasses that read the world aloud, on-device", description: "HearSight is our flagship Physical AI product: on-device smart glasses for people with low vision. Every model runs on the glasses themselves — no cloud round trip, no connectivity assumption, no data leaving the wearer.", industry: "Assistive technology · HealthTech · India", system: "HearSight", tags: ["Edge inference", "Model compression", "Computer vision", "On-device OCR"] },
];

export const engagements = [
  { client: "State pathology service", sector: "Health · clinical documents", body: "Clinical document intelligence — extraction, structuring and coding of pathology reports.", tags: ["Cycle time", "Accuracy"] },
  { client: "Metropolitan local council", sector: "Local government · citizen service", body: "GenAI citizen assistant over resident enquiries, with event booking and live-agent handover.", tags: ["Service quality", "Efficiency"] },
  { client: "Government land agency", sector: "Public sector · planning", body: "Agentic building-plan compliance with real-time scoring and approval workflow management.", tags: ["Cycle time", "Compliance"] },
  { client: "National aeromedical service", sector: "Health · operations", body: "Automated document classification on metadata and content across operational records.", tags: ["Productivity", "Efficiency"] },
  { client: "International hotel group", sector: "Hospitality · multi-property", body: "Guest experience platform spanning check-in, service requests and issue resolution.", tags: ["Service quality", "Efficiency"] },
  { client: "Hotel operations agent", sector: "Hospitality · property systems", body: "Real-time agent chaining through MCP into the property management system.", tags: ["Cycle time", "Service quality"] },
  { client: "Visitor economy platform", sector: "Travel · itinerary planning", body: "Travel assistant with real-time weather and calendar context, and human handover.", tags: ["Service quality", "Revenue"] },
  { client: "National fashion retail chain", sector: "Retail · analytics", body: "Retail analytics over purchasing patterns, inventory optimisation and marketing performance.", tags: ["Revenue", "Margin"] },
  { client: "Global consumer toy manufacturer", sector: "Consumer goods · trade documents", body: "Multi-lingual document intelligence with no-code schema changes across trading partners.", tags: ["Efficiency", "Accuracy"] },
  { client: "Sports technology and media platform", sector: "Media · live production", body: "Real-time transcription, event detection and automated highlight generation.", tags: ["Revenue", "Speed to market"] },
  { client: "Private property investment group", sector: "Financial services · legal", body: "Legal workflow processing with access control, document generation and a compliance engine.", tags: ["Cycle time", "Compliance"] },
  { client: "Private property investment group", sector: "Financial services · finance", body: "Finance agent across multiple systems of record, with real-time analytics and a personalised interface.", tags: ["Productivity", "Accuracy"] },
  { client: "Enterprise ERP estate", sector: "Cross-industry · procurement", body: "Procure-to-pay multi-agent system with intent classification and MCP-based integration.", tags: ["Efficiency", "Cycle time"] },
  { client: "Enterprise horizontal", sector: "Cross-industry · platform", body: "Private AI platform and multi-agent assistant spanning managed, hosted and third-party models.", tags: ["Speed to market", "Efficiency"] },
];

/** Flagship customer stories, as the partner site presents them: named clients, problem, solution, outcome. */
export type Flagship = { logo: string; client: string; pillar: string; problem: string; solution: string; outcome: string };
export const flagshipStories: Flagship[] = [
  {
    logo: "/clients/landcom.png",
    client: "Landcom · NSW Government",
    pillar: "Frontier AI",
    problem: "Manual, repetitive finance workflows, and an organisation that wanted generative AI in everyday work only under governance it could stand behind.",
    solution: "Finance workflows automated end to end, then enterprise-wide adoption: a governance model, a retained forward-deployed engineer, and training across every team — built on OCI, Oracle AI Services and Claude.",
    outcome: "5 FTE of capacity freed every week; 200 staff onboarded at 100% enablement.",
  },
  {
    logo: "/clients/arb.png",
    client: "ARB Corporation · ASX-listed manufacturer",
    pillar: "Digital AI",
    problem: "More than 12,000 supplier invoices a month validated, coded and routed by hand across global accounts-payable teams.",
    solution: "An intelligent processing pipeline on Oracle Cloud integrated with JD Edwards: invoices read and validated, line items coded against the system of record, only exceptions routed to a person.",
    outcome: "90% reduction in invoice processing cost; A$2.9M projected annual saving.",
  },
  {
    logo: "/clients/hearsight.png",
    client: "HearSight Audio Vision · Assistive technology",
    pillar: "Physical AI",
    problem: "People with low vision need the world read to them in real time, without a cloud round trip, a connectivity assumption, or their data leaving the device.",
    solution: "Smart glasses with every model running on the device: object and obstacle detection, OCR, face recognition, navigation and offline payment assistance.",
    outcome: "Frontier-grade perception running inside a pair of glasses. Nunnari Labs is HearSight's AI and engineering partner.",
  },
];
