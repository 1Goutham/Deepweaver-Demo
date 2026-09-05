export const fde = {
  intro: "Blended consulting and AI engineering — working with business and IT stakeholders to take AI pilots into production.",
  focus: ["Platform security & governance", "Observability & platform integration", "Connectors & vendor integration", "Skills & prompt engineering", "Knowledge management", "Enablement & onboarding"],
  who: [
    { who: "Large enterprises", body: "Dozens of pilots, fragmented IT, no one owning outcomes" },
    { who: "Small & medium business", body: "No AI team to hire and no budget for one — a fractional expert instead" },
    { who: "ISVs & software vendors", body: "Racing to ship AI features before the roadmap goes stale" },
  ],
  sameProblem: "Different size, same problem: capability without an owner.",
  disciplines: [
    { name: "Business analysis", body: "Turns business ideas into AI systems, agents and skills" },
    { name: "Data engineering", body: "Pulls in and transforms the data sources a model actually needs" },
    { name: "ML engineering", body: "Hosts models and runs post-training to fit the customer's domain" },
    { name: "Cloud & platform", body: "Deploys and integrates APIs as containers, production-grade" },
    { name: "Full-stack delivery", body: "Integrates with applications and tests end to end, like a dev" },
  ],
};

export const engagementModels = [
  { name: "Co-Delivery", body: "We co-develop and deliver alongside the customer's own delivery teams, sprint by sprint." },
  { name: "Centre of Excellence", body: "We provide strategic guidance and standards while the customer handles delivery." },
  { name: "Project Delivery", body: "We are brought in to deliver specific AI projects end to end, against a fixed scope." },
  { name: "Uplift & Transition", body: "We lead the early work, then train and transition the customer's team to take it over." },
  { name: "As a Service", body: "We own the infrastructure and the application, and run the whole thing against an SLA." },
];

export const howWeWork = {
  skills: "GenAI · NLP · Computer vision · Full-stack development · Cloud engineering · Data engineering · UI/UX · Project management · Customer success",
  shape: "Onshore, offshore and blended — senior teams across Australia and India, in the customer's time zone.",
  support: "Hypercare through to managed services, with AIOps monitoring on every build.",
};

export const agenticPackages = [
  { code: "P1", name: "Enterprise A³ Adoption Framework", weeks: "6–8 weeks", body: "Readiness, prioritisation and the operating model that makes agents adoptable.", items: ["AI readiness assessment", "Change management", "Governance model", "Centre of Excellence", "Success metrics & KPIs"], deliverable: "Readiness scorecard, prioritised roadmap, governance charter" },
  { code: "P2", name: "Enterprise Agents Foundation", weeks: "8–12 weeks", body: "Production-ready agent infrastructure, with security and integration built in.", items: ["Agent platform setup", "Vector database integration", "Security & governance", "Multi-agent architecture", "Integration hub"], deliverable: "Production environment, architecture blueprints, two live use cases" },
  { code: "P3", name: "Enterprise AgentOps", weeks: "12 weeks", body: "Complete lifecycle management for agents running in production.", items: ["Monitoring & observability", "CI/CD for agents", "Incident response", "Performance optimisation", "Compliance reporting"], deliverable: "AgentOps platform, dashboards, runbooks, pipeline templates" },
  { code: "P4", name: "Industry Agents Accelerator", weeks: "12–16 weeks", body: "Pre-built vertical agents that shorten the path from pilot to production.", items: ["Domain agent library", "Reference data models", "Vertical guardrails", "Regulatory templates", "Deployment blueprints"], deliverable: "Vertical agents deployed against the customer's own systems" },
];

export const agentStack = ["User interface", "Application integration", "Agent orchestration", "Tools & APIs", "Agent framework", "Foundation model", "AI infrastructure"];

export const agenticUseCases = [
  { domain: "Financial services", cases: [["Conversational banking", "Servicing and advisory agents across retail channels"], ["Regulatory compliance agents", "Automated reporting, filing and evidence trails"], ["Risk assessment", "Credit and counterparty risk evaluated on the fly"], ["Claims & document processing", "Intelligent intake, validation and settlement routing"]] },
  { domain: "Manufacturing", cases: [["Autonomous quality control", "Vision inspection with root-cause suggestions"], ["Digital twin orchestration", "Simulated changes tested before they hit the line"], ["Predictive maintenance", "Equipment health monitoring and window scheduling"], ["Supply chain optimisation", "Inventory, logistics and shortage anticipation"]] },
  { domain: "Public sector", cases: [["Citizen service automation", "Enquiry handling, routing and live-agent handover"], ["Policy generation", "Drafting and consistency checking against precedent"], ["Case & evidence processing", "Summarisation, tagging and workflow routing"], ["Crisis management", "Situational synthesis across agencies and feeds"]] },
  { domain: "Retail & consumer", cases: [["Hyper-personalisation", "Offers and journeys assembled per customer"], ["Visual commerce", "Search, merchandising and content from imagery"], ["Autonomous supply chain", "Replenishment and allocation without manual planning"], ["Trade document intelligence", "Multi-lingual extraction across trading partners"]] },
];
