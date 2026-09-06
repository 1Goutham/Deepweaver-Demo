export const trustedBy = {
  copy: "Trusted by enterprise and government across India and Australia — ASX-listed manufacturers, state agencies, councils, research universities and national retailers.",
  logos: [
    { src: "/clients/landcom.png", alt: "Landcom" },
    { src: "/clients/arb.png", alt: "ARB Corporation" },
    { src: "/clients/scaler.png", alt: "Scaler" },
    { src: "/clients/icliniq.png", alt: "iCliniq" },
    { src: "/clients/forge.png", alt: "Forge Innovation & Ventures" },
    { src: "/clients/saasant.png", alt: "Saasant" },
    { src: "/clients/2bfound.png", alt: "2B Found" },
    { src: "/clients/securaai.png", alt: "SecuraAI" },
    { src: "/clients/technomax.png", alt: "Technomax" },
    { src: "/clients/zeekers.png", alt: "Zeekers" },
  ],
};

export const aiNativeServices = {
  eyebrow: "Our capabilities",
  title: "AI-native services for the physical and digital worlds.",
  sub: "Not a consultancy with an AI practice bolted on. Start with the work you need changed — we are measured on the outcome, not the effort.",
  pillars: [
    { kicker: "Where the work happens", href: "/digital-ai", title: "Digital AI", desc: "Agents, documents and decisions inside the systems of record you already run.", items: ["Document intelligence", "Agentic AI", "Voice AI", "Workflow automation"] },
    { kicker: "Out in the world", href: "/physical-ai", title: "Physical AI", desc: "Perception and autonomy on robots, drones, cameras and wearables.", items: ["Vision & video AI", "Sensor fusion & SLAM", "On-device inference", "Digital twins"] },
    { kicker: "At the edge of capability", href: "/frontier-ai", title: "Frontier AI", desc: "The strongest models available, applied to work that was out of reach.", items: ["Multimodal understanding", "Long-context reasoning", "Multi-agent orchestration", "Evaluation & assurance"] },
    { kicker: "Inside your perimeter", href: "/sovereign-ai", title: "Sovereign AI", desc: "Self-hosted and in-jurisdiction, for data that cannot leave.", items: ["Self-hosted LLM & SLM", "In-country hosting", "Air-gapped & on-device", "Audit evidence"] },
  ],
};

export const customerOutcomes = {
  eyebrow: "Customer outcomes",
  title: "Solving the problems that move the business.",
  sub: "Regulated and public sector, manufacturing, healthcare, and retail — where AI has to hold up under audit and on the floor.",
  stories: [
    { domain: "Digital AI", slug: "supplier-invoice-automation", industry: "Manufacturing · ASX-listed", headline: "12,000+ supplier invoices a month, automated.", detail: "Document intelligence for the global accounts-payable teams of an ASX-listed manufacturer — finance staff review exceptions instead of keying every invoice.", metric: "−90%", metricLabel: "Invoice processing cost", system: "Document intelligence", tags: ["Document AI", "Agentic AI", "Workflow"] },
    { domain: "Physical AI", slug: "edge-ai-site-cameras", industry: "Construction · Security", headline: "Edge AI across 4,000+ site cameras.", detail: "Vision and video AI running live on the cameras of a national construction security group — inference at the edge, not in the cloud.", metric: "4,000+", metricLabel: "Cameras running edge AI live", system: "Edge vision platform", tags: ["Vision AI", "On-device", "Physical AI"] },
    { domain: "Frontier AI", slug: "geology-microscopy-annotation", industry: "Go8 research university · Higher education", headline: "Geology microscopy annotated in seconds, not hours.", detail: "A vision system trained to annotate microscopy images automatically, with specialists reviewing and correcting rather than annotating from scratch.", metric: "Hours → seconds", metricLabel: "Annotation per sample", system: "Microscopy vision AI", tags: ["Vision & video AI", "Multimodal understanding", "Frontier AI"] },
    { domain: "Sovereign AI", slug: "government-case-file-summarisation", industry: "Regulated & public sector", headline: "Case files summarised inside government security controls.", detail: "Self-hosted generative AI summarising case files entirely within the client's own perimeter, with audit evidence built in.", metric: "In-jurisdiction", metricLabel: "Self-hosted, audit evidence built in", system: "Sovereign GenAI", tags: ["Sovereign AI", "Self-hosted LLM", "Document AI"] },
  ],
};

export const alliances = [
  { src: "/logos/oracle.png", name: "Oracle", role: "Cloud & enterprise AI", detail: "Exclusive AI/ML partner", w: 824, h: 129 },
  { src: "/logos/nvidia.png", name: "NVIDIA", role: "AI infrastructure", detail: "GPU platforms and inference at scale", w: 824, h: 172 },
  { src: "/logos/anthropic.png", name: "Anthropic", role: "Frontier AI", detail: "Channel and FDE partnership", w: 676, h: 97 },
  { src: "/logos/qualcomm.png", name: "Qualcomm", role: "Physical AI", detail: "On-device inference silicon", w: 754, h: 160 },
  { src: "/logos/ibm.png", name: "IBM", role: "AI governance", detail: "watsonx governance stack", w: 720, h: 284 },
  { src: "/logos/credo-ai.png", name: "Credo AI", role: "AI governance", detail: "Policy and assurance platform", w: 266, h: 67 },
];

export const alliancesSection = {
  eyebrow: "Alliances",
  title: "Partnerships built for enterprise AI.",
  sub: "Delivered on the customer's cloud and models of choice — with the partners whose platforms enterprise AI actually runs on.",
};

export const trustMarks = [
  { src: "/logos/iso-42001.png", label: "ISO/IEC 42001", sub: "certified" },
  { src: "/logos/nist-ai-rmf.png", label: "NIST AI RMF", sub: "" },
  { src: "/logos/eu-ai-act.png", label: "EU AI Act", sub: "aligned" },
  { src: "/logos/national-ai-centre.png", label: "National AI Centre", sub: "listed" },
];

export const whyChooseUs = {
  eyebrow: "How we work",
  title: "Five ways to engage. One owner for the outcome.",
  sub: "Accountable for results, not effort. Capability transferred, not retained. Every engagement is signed against a measure you already report on — baselined before we start, reported after we ship.",
  modes: [
    { title: "Co-Delivery", body: "We build alongside your delivery teams, sprint by sprint." },
    { title: "Centre of Excellence", body: "We set the standards and guidance; your teams deliver." },
    { title: "Project Delivery", body: "A specific AI system, end to end, against a fixed scope." },
    { title: "Uplift & Transition", body: "We lead the early work, then train your team to take it over." },
    { title: "As a Service", body: "We own the infrastructure and the application, and run it against an SLA.", highlight: true },
  ],
  note: "Onshore, offshore and blended — senior teams across India and Australia, in your time zone. Hypercare through to managed services, with AIOps monitoring on every build.",
  stats: [
    { value: 30, suffix: "+", label: "Senior engineers" },
    { value: 50, suffix: "+", label: "Systems in production" },
    { value: 2, suffix: "", label: "Regions · India and Australia" },
    { value: 10000, suffix: "+", label: "AI Tamil Nadu community" },
  ],
};

export const serviceLines = [
  { index: "01", name: "AI Consulting & Governance", kicker: "Where the programme starts", solutions: ["AI strategy & roadmap", "Policy & risk frameworks", "Audits & readiness", "Operating model"], outcome: "Sustainable AI adoption and a board-ready control framework", href: "/ai-governance" },
  { index: "02", name: "Production AI Engineering", kicker: "Where value gets built", solutions: ["GenAI & agentic systems", "Document intelligence", "Voice AI", "Full-stack delivery"], outcome: "Pilots in production, cost per transaction down, cycle time cut", href: "/digital-ai" },
  { index: "03", name: "Physical AI & Edge", kicker: "Our differentiator", solutions: ["Robots & drones", "Smart devices", "Computer vision", "On-device inference"], outcome: "Autonomous operations in the field, safety and quality lifted", href: "/physical-ai" },
  { index: "04", name: "Data for AI", kicker: "What makes AI deployable", solutions: ["Data readiness", "Pipelines & lakehouse", "Data governance", "Vector & retrieval"], outcome: "Trusted, AI-ready data and decisions traceable to source", href: "/sovereign-ai" },
  { index: "05", name: "Managed AI Services", kicker: "How value is sustained", solutions: ["AIOps", "Forward-Deployed Engineers", "Centre of Excellence", "SLA operations"], outcome: "Sustained adoption against an SLA, capability held in-house", href: "/services#managed" },
] as const;
