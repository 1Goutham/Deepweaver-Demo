export const trustMarks = [
  { src: "/logos/iso-42001.png", label: "ISO/IEC 42001", sub: "certified" },
  { src: "/logos/nist-ai-rmf.png", label: "NIST AI RMF", sub: "aligned" },
  { src: "/logos/eu-ai-act.png", label: "EU AI Act", sub: "aligned" },
  { src: "/logos/national-ai-centre.png", label: "National AI Centre", sub: "listed" },
];

export const alliances = [
  { src: "/logos/oracle.png", name: "Oracle", role: "Cloud & enterprise AI", detail: "Exclusive AI/ML partner", w: 824, h: 129 },
  { src: "/logos/nvidia.png", name: "NVIDIA", role: "AI infrastructure", detail: "GPU platforms and inference at scale", w: 824, h: 172 },
  { src: "/logos/anthropic.png", name: "Anthropic", role: "Frontier AI", detail: "Channel and FDE partnership", w: 676, h: 97 },
  { src: "/logos/ibm.png", name: "IBM", role: "AI governance", detail: "watsonx governance stack", w: 720, h: 284 },
  { src: "/logos/credo-ai.png", name: "Credo AI", role: "AI governance", detail: "Policy and assurance platform", w: 266, h: 67 },
  { src: "/logos/qualcomm.png", name: "Qualcomm", role: "Physical AI", detail: "On-device inference silicon", w: 754, h: 160 },
];

export const capabilities = [
  { name: "AI Infrastructure", body: "GPU platform build, training, fine-tuning and inference management", outcome: "Model economics under control, capacity that scales with demand", pillar: "frontier-ai" },
  { name: "Agentic AI", body: "Enterprise agent platform, vertical agents, multi-agent orchestration", outcome: "Work completed autonomously, exceptions escalated to people", pillar: "digital-ai" },
  { name: "Document Intelligence", body: "Extraction, classification, validation and approval routing", outcome: "Manual handling removed, straight-through processing at volume", pillar: "digital-ai" },
  { name: "Voice AI", body: "Real-time voice agents, self-service and live handover", outcome: "Enquiries resolved without queues, service hours extended", pillar: "digital-ai" },
  { name: "Vision & Video AI", body: "Event detection, safety and quality inspection, video summarisation", outcome: "Incidents caught in real time, defects and rework reduced", pillar: "physical-ai" },
  { name: "Enterprise App Agents", body: "Agents embedded in the systems of record, MCP-based integration", outcome: "Adoption without retraining, no change to the system of record", pillar: "digital-ai" },
  { name: "Data for AI", body: "Data readiness, lakehouse, feature pipelines and decision reporting", outcome: "Decisions traceable to source, AI-ready data as a standing asset", pillar: "sovereign-ai" },
  { name: "AgentOps & Governance", body: "Monitoring, continuous evaluation, audit and compliance reporting", outcome: "Evidence on demand, drift and risk visible before they bite", pillar: "sovereign-ai" },
] as const;

export const serviceLines = [
  { index: "01", name: "AI Consulting & Governance", kicker: "Where the programme starts", solutions: ["AI strategy & roadmap", "Policy & risk frameworks", "Audits & readiness", "Operating model"], outcome: "Sustainable AI adoption and a board-ready control framework", href: "/ai-governance" },
  { index: "02", name: "Production AI Engineering", kicker: "Where value gets built", solutions: ["GenAI & agentic systems", "Document intelligence", "Voice AI", "Full-stack delivery"], outcome: "Pilots in production, cost per transaction down, cycle time cut", href: "/digital-ai" },
  { index: "03", name: "Physical AI & Edge", kicker: "Our differentiator", solutions: ["Robots & drones", "Smart devices", "Computer vision", "On-device inference"], outcome: "Autonomous operations in the field, safety and quality lifted", href: "/physical-ai" },
  { index: "04", name: "Data for AI", kicker: "What makes AI deployable", solutions: ["Data readiness", "Pipelines & lakehouse", "Data governance", "Vector & retrieval"], outcome: "Trusted, AI-ready data and decisions traceable to source", href: "/sovereign-ai" },
  { index: "05", name: "Managed AI Services", kicker: "How value is sustained", solutions: ["AIOps", "Forward-Deployed Engineers", "Centre of Excellence", "SLA operations"], outcome: "Sustained adoption against an SLA, capability held in-house", href: "/services#managed" },
] as const;

export const whyDeepWeaver = [
  { title: "Accountable for results, not effort", body: "We own the outcome end to end, measured on cost, cycle time and revenue." },
  { title: "AI-native teams, reusable assets", body: "Pure-play AI experts with cutting-edge research and industrial experience, delivering with assets we have already built." },
  { title: "Capability transferred, not retained", body: "We lead the early work, then train and transition the customer's team to take it over." },
  { title: "Trusted AI partner, for business and IT", body: "Ethical and responsible AI by design — ISO/IEC 42001 certified, NIST AI RMF and EU AI Act aligned." },
] as const;
