import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

/**
 * The Core Operating Layers, from the deck — drawn as a diagram, not cards.
 * Physical ↔ Convergence ↔ Digital across the middle; governance as a
 * persistent rail; user, model and infrastructure bands above and below.
 */
const physical = [
  { h: "Platforms", items: ["Robotics & ROS", "Drones", "Wearables"] },
  { h: "Perception", items: ["Computer vision", "LiDAR & sensor fusion", "SLAM & navigation"] },
  { h: "Deployment", items: ["On-device inference", "Edge & docking hubs", "Digital twins"] },
  { h: "Safety & assurance", items: ["Geofencing", "Fail-safe behaviours", "Fleet monitoring"] },
];
const digital = [
  { h: "Documents & knowledge", items: ["Document intelligence", "RAG & search", "Analytics"] },
  { h: "Interaction", items: ["Voice AI", "Conversational assistants"] },
  { h: "Automation", items: ["Workflow automation", "Agentic systems", "Enterprise app agents"] },
  { h: "Decisioning", items: ["Forecasting", "Optimisation", "Next-best-action"] },
];
const convergence = ["Shared perception", "Event mesh", "Digital twin sync", "Tool & MCP registry", "Cross-world orchestration"];
const governance = [
  ["ISO/IEC 42001 · NIST AI RMF", "Australia NAIC guardrails"],
  ["Policy & use-case registry", "Risk register & controls"],
  ["Explainability", "Bias, drift & eval"],
  ["Audit trail & reporting", "Model & data lineage"],
];
const human = [["Approval gates", "Exception & escalation"], ["Expert review queues", "Confidence thresholds"], ["Reinforcement learning", "Feedback loops"]];

function Band({ label, items, className }: { label: string; items: string[]; className?: string }) {
  return (
    <div className={cn("flex flex-col gap-3 border-t border-line py-4 md:flex-row md:items-center md:gap-8", className)}>
      <span className="eyebrow w-40 shrink-0">{label}</span>
      <ul className="flex flex-wrap gap-x-6 gap-y-1.5 text-[0.8125rem] text-fg-muted">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

function Column({ title, groups, tone }: { title: string; groups: { h: string; items: string[] }[]; tone: "sky" | "violet" }) {
  return (
    <div className="flex flex-col">
      <p className={cn("font-display text-display-xs font-medium", tone === "sky" ? "text-sky" : "text-violet")}>{title}</p>
      <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-5">
        {groups.map((g) => (
          <div key={g.h}>
            <dt className="eyebrow">{g.h}</dt>
            <dd className="mt-2 space-y-1 text-[0.8125rem] text-fg-muted">
              {g.items.map((i) => (
                <span key={i} className="block">
                  {i}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function Layers() {
  return (
    <Section theme="dark" pad="lg" id="how-it-connects">
      <div className="mx-auto max-w-wide px-5 sm:px-8 lg:px-12">
        <SectionHeader
          eyebrow="How it connects"
          title="Two worlds, one stack, one governance layer."
          lead="Physical AI on the left, Digital AI on the right, a convergence layer between them — with governance and human-in-the-loop controls running the full height of the stack."
        />

        <Reveal delay={0.1} className="mt-14 md:mt-20">
          <div className="grid gap-px border-y border-line bg-line lg:grid-cols-12">
            {/* Main stack */}
            <div className="bg-bg p-6 sm:p-8 lg:col-span-9 lg:p-10">
              <Band label="User layer" items={["Chat", "Enterprise apps", "Dashboards", "Voice", "Devices", "Field operations"]} className="border-t-0 pt-0" />

              <div className="mt-8 grid gap-10 md:grid-cols-[1fr_auto_1fr] md:gap-8">
                <Column title="Physical AI layer" groups={physical} tone="sky" />
                {/* Convergence */}
                <div className="relative flex flex-col items-center gap-3 md:px-2">
                  <span aria-hidden className="hidden h-full w-px bg-gradient-to-b from-sky via-blue to-violet md:absolute md:left-1/2 md:block" />
                  <span className="eyebrow relative bg-bg py-2 text-fg">Convergence layer</span>
                  <ul className="relative flex flex-wrap justify-center gap-2 md:flex-col md:items-center">
                    {convergence.map((c) => (
                      <li key={c} className="rounded-full border border-line bg-bg px-3 py-1 text-[0.75rem] text-fg-muted">
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <Column title="Digital AI layer" groups={digital} tone="violet" />
              </div>

              <div className="mt-10">
                <Band label="Model layer" items={["Frontier models", "Sovereign & self-hosted LLM/SLM", "Multimodal", "Fine-tuned", "On-device"]} />
                <Band label="Infrastructure" items={["Cloud GPU", "NVIDIA AI Enterprise", "AMD", "GPU clusters", "Edge hardware"]} />
              </div>
            </div>

            {/* Governance rail */}
            <aside className="rail-amber bg-surface-2 p-6 sm:p-8 lg:col-span-3 lg:p-8">
              <p className="eyebrow text-amber">AI governance layer</p>
              <ul className="mt-5 space-y-3">
                {governance.map((pair) => (
                  <li key={pair[0]} className="border-t border-line pt-3 text-[0.8125rem] leading-snug">
                    <span className="block text-fg">{pair[0]}</span>
                    <span className="block text-fg-muted">{pair[1]}</span>
                  </li>
                ))}
              </ul>
              <p className="eyebrow mt-8">Human in the loop</p>
              <ul className="mt-4 space-y-3">
                {human.map((pair) => (
                  <li key={pair[0]} className="border-t border-line pt-3 text-[0.8125rem] leading-snug">
                    <span className="block text-fg">{pair[0]}</span>
                    <span className="block text-fg-muted">{pair[1]}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
