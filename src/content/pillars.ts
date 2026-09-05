export type Pillar = {
  slug: "digital-ai" | "physical-ai" | "frontier-ai" | "sovereign-ai";
  index: string;
  name: string;
  short: string;
  /** One-line definition, from the deck's operating layers / service lines */
  definition: string;
  /** Long framing for the pillar page hero */
  intro: string;
  capabilities: { name: string; body: string }[];
  applications: string[];
  outcome: string;
  outcomeDetail: string;
  proof?: { metric: string; label: string; source: string };
  related: { label: string; href: string }[];
  /** position on the brand gradient, used by the pillar visual */
  hue: "sky" | "blue" | "lavender" | "violet";
};

export const pillars: Pillar[] = [
  {
    slug: "digital-ai",
    index: "01",
    name: "Digital AI",
    short: "Agents, documents, voice and decisioning, inside the systems of record.",
    definition:
      "The Digital AI layer: documents and knowledge, interaction, automation and decisioning — delivered as agents that live inside the enterprise applications people already use.",
    intro:
      "Digital AI is where value gets built. GenAI and agentic systems, document intelligence, voice AI and full-stack delivery — pilots taken into production, cost per transaction down, cycle time cut.",
    capabilities: [
      { name: "Agentic AI", body: "Enterprise agent platform, vertical agents and multi-agent orchestration. Work completed autonomously, exceptions escalated to people." },
      { name: "Document intelligence", body: "Extraction, classification, validation and approval routing. Manual handling removed, straight-through processing at volume." },
      { name: "Voice AI", body: "Real-time voice agents, self-service and live handover. Enquiries resolved without queues, service hours extended." },
      { name: "Enterprise app agents", body: "Agents embedded in the systems of record with MCP-based integration. Adoption without retraining, no change to the system of record." },
      { name: "Decisioning", body: "Forecasting, optimisation and next-best-action, with decisions traceable to source." },
      { name: "Workflow automation", body: "Agentic workflows across ERP, finance, procurement and case management, with human approval gates." },
    ],
    applications: [
      "Conversational banking and servicing agents",
      "Regulatory compliance agents and evidence trails",
      "Claims and document processing",
      "Citizen service automation with live-agent handover",
      "Procure-to-pay multi-agent systems",
      "Hyper-personalisation and visual commerce",
    ],
    outcome: "Work completed autonomously, exceptions escalated to people.",
    outcomeDetail: "Pilots in production, cost per transaction down, cycle time cut.",
    proof: { metric: "90%", label: "reduction in invoice processing cost at an ASX-listed manufacturer", source: "ARB Corporation" },
    related: [
      { label: "Enterprise agents in production", href: "/digital-ai#packages" },
      { label: "Flagship: ARB Corporation", href: "/work#arb" },
    ],
    hue: "sky",
  },
  {
    slug: "physical-ai",
    index: "02",
    name: "Physical AI",
    short: "Robots, drones, wearables and vision — running on the device, in the field.",
    definition:
      "The Physical AI layer: platforms, perception, deployment and safety. Robots and drones, smart devices, computer vision and on-device inference — our differentiator.",
    intro:
      "Most AI stops at the screen. Physical AI reaches the factory floor and the field: robotics and ROS, drones, wearables, LiDAR and sensor fusion, SLAM and navigation, all deployed on-device with fail-safe behaviours and fleet monitoring.",
    capabilities: [
      { name: "Platforms", body: "Robotics and ROS, drones, wearables — integrated with the enterprise through the convergence layer." },
      { name: "Perception", body: "Computer vision, LiDAR and sensor fusion, SLAM and navigation." },
      { name: "Vision and video AI", body: "Event detection, safety and quality inspection, video summarisation. Incidents caught in real time, defects and rework reduced." },
      { name: "Deployment", body: "On-device inference, edge and docking hubs, digital twins — served close to the plant with the same governance posture." },
      { name: "Safety and assurance", body: "Geofencing, fail-safe behaviours and fleet monitoring, designed in from the first sprint." },
      { name: "Edge inferencing", body: "Model compression, latency budgets, thermal limits and offline reliability — the discipline shipping AI into hardware forces." },
    ],
    applications: [
      "Autonomous quality control and vision inspection",
      "Edge AI across 4,000+ construction-site cameras",
      "Predictive maintenance and equipment health",
      "On-device smart glasses for low vision",
      "Digital twin orchestration before changes hit the line",
      "Industrial and embedded workloads served at the plant",
    ],
    outcome: "Autonomous operations in the field, safety and quality lifted.",
    outcomeDetail: "Frontier-grade perception running inside a pair of glasses, or across a site — with no cloud round trip and no data leaving the device.",
    proof: { metric: "4,000+", label: "site cameras running edge AI for a national construction security group", source: "Case study" },
    related: [
      { label: "Flagship: HearSight", href: "/work#hearsight" },
      { label: "The Factory Brain", href: "/factory-brain" },
    ],
    hue: "blue",
  },
  {
    slug: "frontier-ai",
    index: "03",
    name: "Frontier AI",
    short: "Frontier models, fine-tuning and GPU infrastructure — evaluated before they ship.",
    definition:
      "The model and infrastructure layers: frontier models, sovereign and self-hosted LLM/SLM, multimodal, fine-tuned and on-device — on cloud GPU, NVIDIA AI Enterprise, AMD and edge hardware.",
    intro:
      "Frontier AI is model capability under control. GPU platform build, distributed training, SFT and LoRA fine-tuning, an evaluation harness and red-teaming — delivered through frontier-model channel and forward-deployed engineering partnerships.",
    capabilities: [
      { name: "AI infrastructure", body: "GPU platform build, training, fine-tuning and inference management. Model economics under control, capacity that scales with demand." },
      { name: "Model training", body: "Distributed multi-node training, mixed precision, experiment tracking, architecture selection and reproducible runs." },
      { name: "Fine-tuning", body: "SFT and LoRA, domain adaptation, transfer learning, guardrail tuning — gated by an evaluation harness." },
      { name: "Inference and serving", body: "Model router, model as a service, quantisation and pruning, autoscaling endpoints and latency engineering." },
      { name: "Evaluation and red-teaming", body: "Evals, red-teaming, bias and drift testing and an evidence platform, so results hold up before release." },
      { name: "Forward-deployed engineering", body: "Blended consulting and AI engineering, working with business and IT stakeholders to take pilots into production." },
    ],
    applications: [
      "Domain adaptation of open models on a customer's own data",
      "Private LLM deployments for enterprises that cannot use public inference",
      "One governed endpoint routed on cost, latency and sensitivity",
      "Model registry, drift monitoring and automated retraining",
      "Multi-agent assistants spanning managed, hosted and third-party models",
    ],
    outcome: "Model economics under control, capacity that scales with demand.",
    outcomeDetail: "Refined on infrastructure the customer controls, with a model router in front and an evaluation harness behind.",
    related: [
      { label: "Forward-deployed engineering", href: "/services#fde" },
      { label: "Sovereign AI stack", href: "/sovereign-ai" },
    ],
    hue: "lavender",
  },
  {
    slug: "sovereign-ai",
    index: "04",
    name: "Sovereign AI",
    short: "Frontier capability inside national boundaries, on infrastructure the customer controls.",
    definition:
      "The sovereign AI stack, end to end: data for AI, model training, fine-tuning and inference, on bare-metal GPU, sovereign cloud, on-premise and edge — with MLOps, guardrails and ISO/IEC 42001 controls across the top.",
    intro:
      "Sovereign AI keeps regulated data in-country, with residency evidence by default. The platform supplies sovereign infrastructure; we are the delivery layer above it, turning capacity into governed production systems.",
    capabilities: [
      { name: "Sovereign cloud and residency", body: "Landing-zone design, residency controls, evidence and audit trail. Regulated data stays in-country by default." },
      { name: "AI supercomputing", body: "Cluster orchestration, distributed training, utilisation and cost tuning on single-tenant GPU platforms." },
      { name: "Foundation models", body: "Domain adaptation of open models with fine-tuning, an evaluation harness and guardrails." },
      { name: "Model router and MaaS", body: "One governed endpoint: model router, model as a service, per-tenant quotas, unified API." },
      { name: "Data and analytics platform", body: "Pipelines and lakehouse, vector and retrieval, data governance — patterns models can use." },
      { name: "Managed and secure operations", body: "AgentOps and AIOps, drift and incident management, regulator-ready governance reporting." },
    ],
    applications: [
      "Private LLM deployments and micro-PoP single-tenant stacks",
      "Self-hosted AI inside government security controls",
      "Edge inferencing for industrial and embedded workloads",
      "Data refined inside a secure enclave into models competitors cannot replicate",
      "Australian private AI capability with Equinix and OrionVM",
    ],
    outcome: "Regulated data stays in-country, with residency evidence by default.",
    outcomeDetail: "ISO/IEC 42001 and NAIC voluntary AI safety standards applied to the pipeline, not bolted on after.",
    proof: { metric: "6", label: "government engagements delivered under security and procurement controls", source: "Case studies" },
    related: [
      { label: "Australian sovereign experience", href: "/sovereign-ai#australia" },
      { label: "AI Governance", href: "/ai-governance" },
    ],
    hue: "violet",
  },
];

export const pillarBySlug = (slug: string) => pillars.find((p) => p.slug === slug);
