export const sovereignStack = {
  top: { label: "MLOps, guardrails & assurance", items: ["Model registry", "Drift monitoring", "Automated retraining", "Explainability", "Audit trail", "ISO/IEC 42001 controls"] },
  stages: [
    { step: "1", name: "Data for AI", items: ["Multimodal pipelines", "Annotation", "Synthetic data", "Lineage & versioning", "Data quality & drift"] },
    { step: "2", name: "Model training", items: ["Distributed multi-node", "Mixed precision", "Experiment tracking", "Architecture selection", "Reproducible runs"] },
    { step: "3", name: "Fine-tuning", items: ["SFT & LoRA", "Domain adaptation", "Transfer learning", "Evaluation harness", "Guardrail tuning"] },
    { step: "4", name: "Inference & serving", items: ["Model router", "Model as a service", "Quantisation & pruning", "Autoscaling endpoints", "Latency engineering"] },
  ],
  bottom: { label: "Compute & silicon", items: ["Bare-metal GPU", "Kubernetes & GPU operator", "InfiniBand fabric", "Sovereign cloud", "On-premise", "Edge & on-device", "AMD"] },
};

export const platformPosition = [
  { platform: "Sovereign cloud & data residency", delivers: "Regulated data stays in-country, with residency evidence by default.", items: ["Landing-zone design", "Residency controls", "Evidence & audit trail"] },
  { platform: "AI supercomputing & GPU capacity", delivers: "Cluster build-out and distributed training, tuned for utilisation.", items: ["Cluster orchestration", "Distributed training", "Utilisation & cost tuning"] },
  { platform: "Foundation models", delivers: "Domain adaptation of open models, gated by an evaluation harness.", items: ["Fine-tuning & SFT", "Evaluation harness", "Guardrails"] },
  { platform: "Model router & model as a service", delivers: "One governed endpoint, routed on cost, latency and sensitivity.", items: ["Model router", "Model as a service", "Per-tenant quotas", "Unified API"] },
  { platform: "Data & analytics platform", delivers: "Pipelines, vector retrieval and lakehouse patterns models can use.", items: ["Pipelines & lakehouse", "Vector & retrieval", "Data governance"] },
  { platform: "Managed & secure operations", delivers: "Continuous monitoring of agents, with regulator-ready reporting.", items: ["AgentOps & AIOps", "Drift & incident management", "Governance reporting"] },
];

export const australia = {
  intro: "Partnering with Equinix and OrionVM to build private AI capability for enterprises.",
  layers: [
    { partner: "DeepWeaver", name: "Strategic innovation & compliance", body: "Built with the compliance discipline regulated industries require.", tags: ["ISO/IEC 42001", "NAIC VAIS v1.0", "Model & agent engineering", "Enterprise services", "Solutions & applications"] },
    { partner: "OrionVM", name: "Accelerated compute & lifecycle", body: "Single-tenant GPU platform with NVIDIA AI Enterprise as the lifecycle manager.", tags: ["L40S and above", "Kubernetes GPU orchestration", "NVIDIA AI Enterprise"] },
    { partner: "Equinix", name: "The trusted fabric", body: "Unified digital domain with low-latency interconnect between data and compute.", tags: ["Colocation & interconnect", "Proximity & performance", "Network security"] },
  ],
  highlights: [
    { name: "Data as a strategic asset", body: "Proprietary enterprise data refined inside a secure enclave, producing models competitors cannot replicate." },
    { name: "Private LLM deployments", body: "Single-tenant stacks for enterprises that cannot use public inference, including micro-PoP deployments." },
    { name: "Edge inferencing", body: "Industrial and embedded workloads served close to the plant, with the same governance posture." },
    { name: "Compliance from the start", body: "ISO/IEC 42001 and NAIC voluntary AI safety standards applied to the pipeline, not bolted on after." },
  ],
};

/** Sovereign AI Neocloud Alliance — sovereign compute in both regions, one delivery layer. */
export const neocloud = {
  eyebrow: "Sovereign AI Neocloud Alliance",
  title: "Sovereign compute in both regions, one delivery layer.",
  lead: "We deliver sovereign AI on infrastructure that stays in-country. The alliance pairs our delivery team with neocloud partners in each region, so regulated data never leaves its jurisdiction and frontier capability still arrives.",
  members: [
    { who: "DeepWeaver × Nunnari Labs", where: "Delivery layer", body: "Model engineering, governance and forward-deployed engineers across both regions.", lead: true },
    { who: "OrionVM", where: "Australia", body: "Single-tenant GPU platform on NVIDIA AI Enterprise for Australian sovereign deployments." },
    { who: "E2E Networks", where: "India", body: "Indian GPU cloud for in-country training, fine-tuning and inference." },
  ],
};

export const india = {
  eyebrow: "Sovereign AI · India",
  title: "Built and trained on Indian GPU clouds.",
  lead: "Research and product work in India runs on Indian infrastructure. JarvisLabs GPU capacity carries training and fine-tuning runs, and E2E Networks anchors in-country deployment through the alliance.",
  items: [
    { name: "Research training runs", body: "Vision and language model training and fine-tuning for the applied research programme, on JarvisLabs GPUs." },
    { name: "Physical AI product development", body: "Model development and compression for HearSight's on-device perception stack, trained in-country before deployment to the glasses." },
    { name: "Community and enablement", body: "Hands-on GPU capacity for AI Tamil Nadu workshops and enablement sessions, so practitioners train on real hardware." },
  ],
};
