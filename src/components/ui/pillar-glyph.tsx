import { cn } from "@/lib/utils";

/**
 * Deterministic, brand-derived glyphs for the four domains — each is a
 * different reading of the same weave: strokes, dots, layers, boundary.
 * Pure SVG, no imagery, theme-agnostic (always on navy).
 */
export default function PillarGlyph({ pillar, className }: { pillar: string; className?: string }) {
  const common = { className: cn("text-white", className), viewBox: "0 0 400 300", fill: "none", role: "img" as const };
  const grad = (
    <defs>
      <linearGradient id={`g-${pillar}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#afe4fd" />
        <stop offset="0.5" stopColor="#166dea" />
        <stop offset="1" stopColor="#a792fd" />
      </linearGradient>
      <pattern id={`dots-${pillar}`} width="16" height="16" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.18)" />
      </pattern>
    </defs>
  );
  const g = `url(#g-${pillar})`;

  if (pillar === "digital-ai") {
    // Documents, interaction, automation, decisioning — four horizontal bands, one weave stroke crossing them.
    return (
      <svg {...common} aria-label="Digital AI">
        {grad}
        <rect width="400" height="300" fill={`url(#dots-${pillar})`} />
        {[70, 120, 170, 220].map((y, i) => (
          <rect key={y} x={60 + i * 10} y={y} width={280 - i * 20} height="22" rx="11" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.18)" />
        ))}
        <rect x="150" y="30" width="64" height="240" rx="32" fill={g} transform="rotate(35 200 150)" />
      </svg>
    );
  }
  if (pillar === "physical-ai") {
    // Perception field: concentric arcs and a device capsule with sensor points.
    return (
      <svg {...common} aria-label="Physical AI">
        {grad}
        <rect width="400" height="300" fill={`url(#dots-${pillar})`} />
        {[60, 100, 140].map((r) => (
          <circle key={r} cx="200" cy="170" r={r} stroke="rgba(255,255,255,0.16)" />
        ))}
        <rect x="150" y="140" width="100" height="60" rx="30" fill={g} />
        {[[110, 90], [290, 90], [320, 200], [80, 210]].map(([x, y]) => (
          <circle key={`${x}${y}`} cx={x} cy={y} r="5" fill="#afe4fd" />
        ))}
        <path d="M200 170 L110 90 M200 170 L290 90 M200 170 L320 200 M200 170 L80 210" stroke="rgba(175,228,253,0.35)" strokeDasharray="2 5" />
      </svg>
    );
  }
  if (pillar === "frontier-ai") {
    // Model layers: three stacked slabs with the top one lit by the gradient.
    return (
      <svg {...common} aria-label="Frontier AI">
        {grad}
        <rect width="400" height="300" fill={`url(#dots-${pillar})`} />
        {[0, 1, 2].map((i) => (
          <path
            key={i}
            d={`M100 ${190 - i * 34} l100 -40 l100 40 l-100 40 z`}
            fill={i === 2 ? g : "rgba(255,255,255,0.06)"}
            stroke={i === 2 ? "none" : "rgba(255,255,255,0.2)"}
          />
        ))}
        <path d="M100 190 v28 l100 40 l100 -40 v-28" stroke="rgba(255,255,255,0.18)" />
      </svg>
    );
  }
  // sovereign-ai — boundary: a rounded enclosure with the weave inside and a residency mark.
  return (
    <svg {...common} aria-label="Sovereign AI">
      {grad}
      <rect width="400" height="300" fill={`url(#dots-${pillar})`} />
      <rect x="70" y="50" width="260" height="200" rx="28" stroke="rgba(255,255,255,0.28)" strokeDasharray="6 8" />
      <rect x="120" y="100" width="160" height="100" rx="20" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.14)" />
      <rect x="175" y="90" width="50" height="120" rx="25" fill={g} transform="rotate(40 200 150)" />
      <circle cx="300" cy="80" r="10" fill="#fca311" />
    </svg>
  );
}
