/**
 * Homepage content. Every line traces to the DeepWeaver AINS deck, the
 * website changelog, or the Nunnari Labs partner site (primary reference for
 * the AI-native services, service lines, advantages and logos).
 */

export const trustedBy = {
  copy: "Trusted by enterprise and government across Australia and India — listed manufacturers, state agencies, digital health and SaaS companies, industrial groups and research universities.",
  logos: [
    { src: "/clients/landcom.png", alt: "Landcom" },
    { src: "/clients/arb.png", alt: "ARB Corporation" },
    { src: "/clients/hearsight.png", alt: "HearSight" },
    { src: "/clients/scaler.png", alt: "Scaler" },
    { src: "/clients/icliniq.png", alt: "iCliniq" },
    { src: "/clients/forge.png", alt: "Forge Innovation & Ventures" },
    { src: "/clients/saasant.png", alt: "Saasant" },
    { src: "/clients/2bfound.png", alt: "2B Found" },
    { src: "/clients/tristha.png", alt: "Tristha Global" },
    { src: "/clients/martin-group.png", alt: "Martin Group" },
  ],
};

export const aiNativeServices = {
  title: "AI-native services for the physical and digital worlds.",
  sub: "Not a consultancy with an AI practice bolted on. Start with the work you need changed — we are measured on the outcome, not the effort.",
  pillars: [
    { kicker: "Where the work happens", href: "/digital-ai", title: "Digital AI", desc: "Agents, documents and decisions inside the systems of record you already run.", items: ["Document intelligence", "Agentic AI", "Voice AI", "Workflow automation"] },
    { kicker: "Out in the world", href: "/physical-ai", title: "Physical AI", desc: "Perception and autonomy on robots, drones, cameras and wearables.", items: ["Vision & video AI", "Sensor fusion & SLAM", "On-device inference", "Digital twins"] },
    { kicker: "At the edge of capability", href: "/frontier-ai", title: "Frontier AI", desc: "The strongest models available, applied to work that was out of reach.", items: ["Multimodal understanding", "Long-context reasoning", "Multi-agent orchestration", "Evaluation & assurance"] },
    { kicker: "Inside your perimeter", href: "/sovereign-ai", title: "Sovereign AI", desc: "Self-hosted and in-jurisdiction, for data that cannot leave.", items: ["Self-hosted LLM & SLM", "In-country hosting", "Air-gapped & on-device", "Audit evidence"] },
  ],
};

/** Two regions, one stack. Australia leads: the site is positioned for the Australian market. */
export const oneStack = {
  eyebrow: "One stack",
  title: "Two regions. One stack, governed end to end.",
  sub: "Enterprise trust in Australia, research-led engineering in India — one delivery team with one project history and one governance layer, in your time zone.",
  regions: [
    {
      country: "Australia",
      cities: "Sydney · Melbourne",
      role: "Enterprise trust",
      lead: true,
      points: ["Enterprise and public-sector relationships", "AI consulting, governance and risk frameworks", "Cloud and frontier-model partner channels", "Trusted-advisor brand in responsible AI"],
    },
    {
      country: "India",
      cities: "Coimbatore · Chennai",
      role: "Research-led engineering",
      lead: false,
      points: ["Research-led AI engineering, ISO/IEC 42001 certified", "Digital AI build, plus Physical AI, edge and robotics", "Qualcomm and Physical AI partnerships", "AI Tamil Nadu community — a deep talent pipeline"],
    },
  ],
  note: "Onshore, offshore and blended — senior teams across Australia and India. Hypercare through to managed services, with AIOps monitoring on every build.",
};

/** Our unique advantages — four things true of every engagement (partner site, "Our unique advantage"). */
export const uniqueAdvantages = {
  eyebrow: "Our unique advantages",
  title: "Governed, AI-native, research-led, and paid on outcomes.",
  sub: "Four things that are true of every engagement, whether it is a four-week accelerator or a multi-year managed service.",
  items: [
    {
      title: "Strong AI governance",
      short: "ISO/IEC 42001 certified, and audited on it.",
      body: "We are ISO/IEC 42001 certified and audited on it. The same discipline is a service we deliver to clients — assessment, policy, testing, audit and managed governance — so your AI estate stands up in front of a regulator.",
      href: "/ai-governance",
      cta: "AI Governance",
    },
    {
      title: "AI as the workforce",
      short: "We run the company the way we advise clients to run theirs.",
      body: "Agents work inside our sales, hiring and delivery practices, so what we recommend is what we use every day.",
      href: "/digital-ai",
      cta: "Digital AI",
    },
    {
      title: "Research-led",
      short: "An applied research team across digital and physical AI.",
      body: "On-device work with Qualcomm, a channel and forward-deployed engineering partnership with Anthropic, and a convergence layer that lets agents, perception and people share one event mesh.",
      href: "/physical-ai",
      cta: "Physical AI",
    },
    {
      title: "Outcome-focused",
      short: "You pay for what changes, not for who we staff.",
      body: "Every engagement is signed against a measure you already report on — baselined before we start, reported after we ship.",
      href: "/outcomes",
      cta: "Outcomes",
    },
  ],
  footnote: "ISO/IEC 42001 certified · National AI Centre listed · NIST AI RMF, EU AI Act and OECD: aligned with, not separately certified.",
};

export const alliances = [
  { src: "/logos/oracle.png", name: "Oracle", role: "Cloud & enterprise AI", detail: "Exclusive AI/ML partner", w: 824, h: 129 },
  { src: "/logos/nvidia.png", name: "NVIDIA", role: "AI infrastructure", detail: "GPU platforms and inference at scale", w: 824, h: 172 },
  { src: "/logos/anthropic.png", name: "Anthropic", role: "Frontier AI", detail: "Channel and FDE partnership", w: 676, h: 97 },
  { src: "/logos/qualcomm.png", name: "Qualcomm", role: "Physical AI", detail: "On-device inference silicon", w: 754, h: 160 },
  { src: "/logos/ibm.png", name: "IBM", role: "AI governance", detail: "watsonx governance stack", w: 720, h: 284 },
  { src: "/logos/credo-ai.png", name: "Credo AI", role: "AI governance", detail: "Policy and assurance platform", w: 266, h: 67 },
  { src: "/logos/e2e-networks.png", name: "E2E Networks", role: "Sovereign AI · India", detail: "Indian GPU cloud for sovereign deployments", w: 1208, h: 284 },
  { src: "/logos/jarvislabs.png", name: "JarvisLabs", role: "Sovereign AI · India", detail: "Indian GPU cloud for training and inference", w: 1167, h: 172 },
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
  note: "Onshore, offshore and blended — senior teams across Australia and India, in your time zone. Hypercare through to managed services, with AIOps monitoring on every build.",
};

/** Five service lines, as the partner site lists them today. */
export const serviceLines = [
  { index: "01", name: "AI Consulting & Governance", kicker: "Where the programme starts", solutions: ["AI strategy & roadmap", "Policy & risk frameworks", "Audits & readiness", "Forward-deployed engineers"], outcome: "Sustainable AI adoption and a board-ready control framework", href: "/ai-governance" },
  { index: "02", name: "Production AI Engineering", kicker: "Where value gets built", solutions: ["GenAI & agentic systems", "Document intelligence", "Voice AI", "Forward-deployed engineers"], outcome: "Pilots in production, cost per transaction down, cycle time cut", href: "/digital-ai" },
  { index: "03", name: "Physical AI & Edge", kicker: "Our differentiator", solutions: ["Robots & drones", "Smart devices", "Computer vision", "On-device inference"], outcome: "Autonomous operations in the field, safety and quality lifted", href: "/physical-ai" },
  { index: "04", name: "Data for AI", kicker: "What makes AI deployable", solutions: ["Data readiness", "Pipelines & lakehouse", "Data governance", "Vector & retrieval"], outcome: "Trusted, AI-ready data and decisions traceable to source", href: "/sovereign-ai" },
  { index: "05", name: "AIOps", kicker: "How value is sustained", solutions: ["Monitoring & drift", "Continuous evaluation", "Centre of Excellence", "SLA operations"], outcome: "Sustained adoption against an SLA, capability held in-house", href: "/services#managed" },
] as const;
