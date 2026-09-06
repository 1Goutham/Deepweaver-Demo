/**
 * AI forward-deployed engineering (FDE). Content from the partner site's
 * forward-deployed-engineers page; the role description supplied as reference
 * informs the engagement steps and outcomes only. This is an offering page,
 * not a careers page.
 */
export const fde = {
  eyebrow: "AI FDE",
  title: "The engineers who turn frontier AI into business outcomes.",
  lead: "An FDE is not another vendor call. They sit inside your team, ship the first real deployment and leave behind people who can run it. Everything on this page comes from FDE engagements delivered across Australia and India.",
  facts: [
    ["Model", "Blended consulting + AI engineering"],
    ["Regions", "Australia · India"],
    ["Partner", "Anthropic channel and FDE partnership"],
  ] as [string, string][],

  intro: {
    eyebrow: "What our FDEs do",
    title: "Blended consulting and AI engineering, inside your teams.",
    body: "Moving from a promising demo to a production-grade AI system takes more than API access. It takes engineers who can build, advise and adapt quickly while keeping the customer outcome and product quality in view.",
    coreSkills: ["Model training & fine-tuning", "ML systems architecture", "Deep learning research", "Applied deeptech AI", "Production ML infra", "Data & evaluation pipelines"],
    whatWeDo: [
      ["Deploy and manage frontier AI platforms", "Stand up Claude and the surrounding platform inside your environment, then run it as a production system rather than a pilot."],
      ["Drive user adoption and productivity gains", "Work with the business users who will live with the system, so the deployment is used, measured and improved."],
      ["Own reliability, scale and performance", "Evaluation, monitoring and guardrails from day one, with the same engineer accountable when something drifts."],
      ["Stay embedded as a long-term partner", "Remain with the team through rollout and iteration, and hand over people who can carry it forward."],
    ] as [string, string][],
  },

  areas: {
    eyebrow: "Six areas of work",
    title: "What an FDE does.",
    sub: "A snapshot from our FDE services to customers.",
    items: [
      ["Platform security & governance", "Identity, data boundaries, audit trails and policy enforcement, so the platform passes the reviews it will face."],
      ["Observability & platform integration", "Tracing, evaluation and cost telemetry wired into the tools your operations team already watches."],
      ["Connectors & vendor integration", "Enterprise systems connected through APIs, retrieval, tool use and MCP-style architecture."],
      ["Skills & prompt engineering", "Reusable agent skills, prompts and orchestration patterns built for the customer's own workflows."],
      ["Knowledge management", "The document and data sources a model actually needs, curated, permissioned and kept current."],
      ["Enablement & onboarding", "Business and IT teams trained on the system, with playbooks that outlast the engagement."],
    ] as [string, string][],
  },

  who: {
    eyebrow: "Who needs one",
    title: "Who actually needs an AI FDE?",
    sub: "The need looks different depending on the size of the organisation. Three segments, three very different reasons.",
    segments: [
      ["Large enterprises and corporates", "Dozens of AI pilots, fragmented IT teams and no one owning outcomes. An FDE turns scattered experiments into governed, production-grade deployments."],
      ["Small and medium businesses", "No AI team to hire and no budget for one. An FDE shows up as a fractional expert and leaves something that keeps working."],
      ["ISVs and software vendors", "Racing to ship AI features before the roadmap goes stale. An FDE gets the first agentic feature into a customer's hands fast."],
    ] as [string, string][],
    threadEyebrow: "The common thread",
    thread: "Capability without an owner. An FDE sits inside the team, ships the first real deployment and leaves behind people who can run it. AI is evolving by the week. The question is whether your team is built to keep up.",
  },

  disciplines: {
    eyebrow: "One engineer, five disciplines",
    title: "Not every AI FDE is built for the job.",
    costEyebrow: "The cost of getting this wrong",
    cost: "The wrong FDE means failed pilots, lower adoption and no ROI, the exact outcomes the role was created to prevent. Customers do not need more FDEs. They need the right one, embedded with their business and IT teams.",
    items: [
      ["Business analysis", "Works with business users to turn ideas into AI systems, agents or skills."],
      ["Data engineering", "Pulls in and transforms the data sources a model actually needs."],
      ["ML engineering", "Hosts models and runs post-training to fit the customer's domain."],
      ["Cloud & platform", "Deploys and integrates APIs as containers, production-grade."],
      ["Full-stack delivery", "Integrates with applications and tests it end to end, like a developer."],
    ] as [string, string][],
  },

  engagement: {
    eyebrow: "How an engagement runs",
    title: "From the first use case to a playbook your team owns.",
    steps: [
      ["Find the use case", "Work with the business to identify high-value use cases aligned with real goals, not the loudest demo."],
      ["Design for the environment", "Production AI designed around your workflows, systems and constraints, including regulated ones."],
      ["Build the integration", "APIs, retrieval, tool use, orchestration and MCP-style connectors, shipped as reusable components."],
      ["Prove it safe", "Evaluation, monitoring and guardrail mechanisms established before the first user, not after the first incident."],
      ["Take it to production", "Pilot-to-production rollout, adoption support and ongoing iteration with the people who own the process."],
      ["Leave a playbook", "Deployment patterns standardised so the next use case, team or region starts from a working reference."],
    ] as [string, string][],
  },

  outcomes: {
    eyebrow: "What you get",
    items: [
      ["Pilot to production, quickly", "Robust, production-ready deployments rather than another proof of concept."],
      ["Measurable business value", "Productivity, faster decisions or operational automation that the business can put a number on."],
      ["Stable, secure, maintainable", "Solutions that operate reliably in the customer's environment after the engineer steps back."],
      ["Reusable patterns", "Every deployment shortens time-to-value for the next one."],
    ] as [string, string][],
    tail: "Enablement · Adoption · ROI",
  },

  cta: {
    eyebrow: "Put an engineer inside your team",
    title: "Tell us where the programme is stuck.",
    body: "We will scope the first use case and the FDE who should own it.",
  },
};
