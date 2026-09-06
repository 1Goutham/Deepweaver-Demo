export type Pillar = {
  slug: "digital-ai" | "physical-ai" | "frontier-ai" | "sovereign-ai";
  index: string;
  name: string;
  short: string;
  /** Page title — the partner site's framing for the domain */
  headline: string;
  /** One-line definition, from the deck's operating layers / service lines */
  definition: string;
  /** Long framing for the pillar page hero */
  intro: string;
  capabilitiesEyebrow: string;
  capabilities: { name: string; body: string; outcome?: string }[];
  applicationsEyebrow: string;
  applicationsTitle: string;
  applications: { name: string; body?: string }[];
  outcome: string;
  outcomeDetail: string;
  related: { label: string; href: string }[];
  hue: "sky" | "blue" | "lavender" | "violet";
};

/**
 * The four AI domains. Content follows the partner site (primary reference)
 * and the DeepWeaver AINS deck; no outcome metrics, no invented claims.
 */
export const pillars: Pillar[] = [
  {
    slug: "digital-ai",
    index: "01",
    name: "Digital AI",
    short: "Agents, documents and decisions inside the systems of record you already run.",
    headline: "Agents, documents and decisions, inside the systems you already run.",
    definition:
      "The Digital AI layer: documents and knowledge, interaction, automation and decisioning — delivered as agents that live inside the enterprise applications people already use.",
    intro:
      "Digital AI is where the work happens: document intelligence, voice, workflow automation and enterprise agents, built into your systems of record and operated after go-live.",
    capabilitiesEyebrow: "What we build, and what it delivers",
    capabilities: [
      { name: "AI Infrastructure", body: "GPU platform build, training, fine-tuning and inference management.", outcome: "Model economics under control, capacity that scales with demand." },
      { name: "Agentic AI", body: "Enterprise agent platform, vertical agents, multi-agent orchestration.", outcome: "Work completed autonomously, exceptions escalated to people." },
      { name: "Document Intelligence", body: "Extraction, classification, validation and approval routing.", outcome: "Manual handling removed, straight-through processing at volume." },
      { name: "Voice AI", body: "Real-time voice agents, self-service and live handover.", outcome: "Enquiries resolved without queues, service hours extended." },
      { name: "Vision & Video AI", body: "Event detection, safety and quality inspection, video summarisation.", outcome: "Incidents caught in real time, defects and rework reduced." },
      { name: "Enterprise App Agents", body: "Agents embedded in the systems of record, MCP-based integration.", outcome: "Adoption without retraining, no change to the system of record." },
      { name: "Data for AI", body: "Data readiness, lakehouse, feature pipelines and decision reporting.", outcome: "Decisions traceable to source, AI-ready data as a standing asset." },
      { name: "AgentOps & Governance", body: "Monitoring, continuous evaluation, audit and compliance reporting.", outcome: "Evidence on demand, drift and risk visible before they bite." },
    ],
    applicationsEyebrow: "Delivered on the customer's cloud and models of choice",
    applicationsTitle: "Where it is already running.",
    applications: [
      { name: "Conversational banking and servicing agents" },
      { name: "Regulatory compliance agents and evidence trails" },
      { name: "Claims and document processing" },
      { name: "Citizen service automation with live-agent handover" },
      { name: "Procure-to-pay multi-agent systems" },
      { name: "Hyper-personalisation and visual commerce" },
    ],
    outcome: "Work completed autonomously, exceptions escalated to people.",
    outcomeDetail: "Pilots in production, cost per transaction down, cycle time cut.",
    related: [
      { label: "Enterprise agents in production", href: "/digital-ai#packages" },
      { label: "Outcomes", href: "/outcomes" },
    ],
    hue: "sky",
  },
  {
    slug: "physical-ai",
    index: "02",
    name: "Physical AI",
    short: "Perception and autonomy on robots, drones, cameras and wearables.",
    headline: "Physical AI & Edge.",
    definition:
      "The Physical AI layer: platforms, perception, deployment and safety. Robots and drones, smart devices, computer vision and on-device inference — our differentiator.",
    intro:
      "Perception and autonomy on robots, drones, cameras and wearables — built to run on the factory floor and in the field, where there is no cloud to fall back on.",
    capabilitiesEyebrow: "The Physical AI layer",
    capabilities: [
      { name: "Platforms", body: "Robotics & ROS · Drones · Wearables · Smart devices" },
      { name: "Perception", body: "Computer vision · LiDAR & sensor fusion · SLAM & navigation · Vision & video AI" },
      { name: "Deployment", body: "On-device inference · Edge & docking hubs · Digital twins · Model compression" },
      { name: "Safety & assurance", body: "Geofencing · Fail-safe behaviours · Fleet monitoring · Human approval gates" },
    ],
    applicationsEyebrow: "Why shipping into hardware matters",
    applicationsTitle: "Discipline that cloud-only teams never build.",
    applications: [
      { name: "Latency budgets", body: "Decisions made where the data is captured, with no cloud round trip on the critical path." },
      { name: "Thermal and power limits", body: "Models compressed and quantised to run on the silicon the device actually has." },
      { name: "Offline reliability", body: "No connectivity assumption. The system keeps working when the network does not." },
      { name: "Safety with no fallback", body: "Fail-safe behaviours, geofencing and fleet monitoring designed in, not added after an incident." },
    ],
    outcome: "Autonomous operations in the field, safety and quality lifted.",
    outcomeDetail: "Most AI stops at the screen. Physical AI has to see, decide and act on hardware with real latency budgets, thermal limits and safety consequences. That discipline is rare, and it is where we started.",
    related: [
      { label: "HearSight, on-device", href: "/physical-ai#hearsight" },
      { label: "The Factory Brain", href: "/factory-brain" },
    ],
    hue: "blue",
  },
  {
    slug: "frontier-ai",
    index: "03",
    name: "Frontier AI",
    short: "The strongest models available, applied to work that was out of reach.",
    headline: "The strongest models, applied to work that was out of reach.",
    definition:
      "The model and infrastructure layers: frontier models, sovereign and self-hosted LLM/SLM, multimodal, fine-tuned and on-device — on cloud GPU, NVIDIA AI Enterprise, AMD and edge hardware.",
    intro:
      "Where Digital AI puts agents inside the systems you run, Frontier AI raises what the model itself can do for the enterprise — and puts engineers beside your teams to make it stick.",
    capabilitiesEyebrow: "The Frontier platform · five layers",
    capabilities: [
      { name: "Enablement", body: "Role-based skills, sandboxes and guardrails so people use Claude well and safely." },
      { name: "Adoption", body: "Use cases ranked, piloted and rolled out with measured uptake." },
      { name: "Governance", body: "Claude inside your ISO/IEC 42001, NIST AI RMF and EU AI Act posture." },
      { name: "Forward-deployed engineering", body: "Engineers inside your teams taking frontier capability into production systems." },
      { name: "FrontierOps", body: "Model routing, cost and latency, evaluation, drift and upgrades handled." },
    ],
    applicationsEyebrow: "Where it lands",
    applicationsTitle: "Three kinds of work it changes.",
    applications: [
      { name: "Enterprise productivity", body: "Frontier models on the work that runs the business: procurement, finance, legal, operations. Long-context reasoning over the documents and decisions a department actually handles." },
      { name: "Employee productivity", body: "Every knowledge worker with a governed assistant that knows the company's own systems, policies and data — adopted, not just licensed." },
      { name: "Frontier intelligence systems", body: "New capability the organisation could not buy before: multimodal understanding, multi-agent orchestration, and evaluation and assurance around all of it." },
    ],
    outcome: "Frontier capability running in production, under your own governance.",
    outcomeDetail: "Five layers that take an organisation from first access to frontier models running in production.",
    related: [
      { label: "AI forward-deployed engineering", href: "/ai-fde" },
      { label: "Sovereign AI stack", href: "/sovereign-ai" },
    ],
    hue: "lavender",
  },
  {
    slug: "sovereign-ai",
    index: "04",
    name: "Sovereign AI",
    short: "Self-hosted and in-jurisdiction, for data that cannot leave.",
    headline: "Sovereign capability inside national boundaries.",
    definition:
      "The sovereign AI stack, end to end: data for AI, model training, fine-tuning and inference, on bare-metal GPU, sovereign cloud, on-premise and edge — with MLOps, guardrails and ISO/IEC 42001 controls across the top.",
    intro:
      "Self-hosted and in-jurisdiction, for data that cannot leave — refined on infrastructure the customer controls, with ISO/IEC 42001 controls through every stage.",
    capabilitiesEyebrow: "Capabilities",
    capabilities: [
      { name: "Sovereign cloud and residency", body: "Landing-zone design, residency controls, evidence and audit trail. Regulated data stays in-country by default." },
      { name: "AI supercomputing", body: "Cluster orchestration, distributed training, utilisation and cost tuning on single-tenant GPU platforms." },
      { name: "Foundation models", body: "Domain adaptation of open models with fine-tuning, an evaluation harness and guardrails." },
      { name: "Model router and MaaS", body: "One governed endpoint: model router, model as a service, per-tenant quotas, unified API." },
      { name: "Data and analytics platform", body: "Pipelines and lakehouse, vector and retrieval, data governance — patterns models can use." },
      { name: "Managed and secure operations", body: "AgentOps and AIOps, drift and incident management, regulator-ready governance reporting." },
    ],
    applicationsEyebrow: "Solution highlights",
    applicationsTitle: "Where it is already running.",
    applications: [
      { name: "Data as a strategic asset", body: "Proprietary enterprise data refined inside a secure enclave, producing models competitors cannot replicate." },
      { name: "Private LLM deployments", body: "Single-tenant stacks for enterprises that cannot use public inference, including micro-PoP deployments." },
      { name: "Edge inferencing", body: "Industrial and embedded workloads served close to the plant, with the same governance posture." },
      { name: "Compliance from the start", body: "ISO/IEC 42001 and NAIC voluntary AI safety standards applied to the pipeline, not bolted on after." },
    ],
    outcome: "Regulated data stays in-country, with residency evidence by default.",
    outcomeDetail: "Zero cloud dependency where the mandate requires it: all data on-premises, no external API calls.",
    related: [
      { label: "Australian sovereign experience", href: "/sovereign-ai#australia" },
      { label: "AI Governance", href: "/ai-governance" },
    ],
    hue: "violet",
  },
];

export const pillarBySlug = (slug: string) => pillars.find((p) => p.slug === slug);
