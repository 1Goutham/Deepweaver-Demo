"use client";

import { useState } from "react";
import { caseStudies, type CaseStudy } from "@/content/work";
import Tag from "@/components/ui/tag";
import { cn } from "@/lib/utils";

const groups: CaseStudy["group"][] = ["Government & public sector", "Hospitality, retail & consumer", "Industrial, financial & platform"];

const groupNotes: Record<CaseStudy["group"], string> = {
  "Government & public sector": "Six engagements under government security and procurement controls.",
  "Hospitality, retail & consumer": "Guest and customer experience, plus the document work behind the trade.",
  "Industrial, financial & platform": "Edge AI in the field, financial and legal workflow, and the horizontal platforms behind them.",
};

export default function CaseStudies() {
  const [group, setGroup] = useState<CaseStudy["group"]>(groups[0]);
  const items = caseStudies.filter((c) => c.group === group);

  return (
    <div>
      <div role="tablist" aria-label="Case study sectors" className="-mx-5 flex gap-1 overflow-x-auto px-5 sm:mx-0 sm:px-0">
        {groups.map((g) => (
          <button
            key={g}
            role="tab"
            aria-selected={g === group}
            onClick={() => setGroup(g)}
            className={cn(
              "shrink-0 border-b-2 px-1 pb-3 pr-6 text-left font-display text-display-xs transition-colors",
              g === group ? "border-fg text-fg" : "border-line text-fg-muted hover:text-fg",
            )}
          >
            {g}
          </button>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap items-baseline justify-between gap-4">
        <p className="max-w-[60ch] text-[0.9375rem] text-fg-muted">{groupNotes[group]}</p>
        <p className="eyebrow">Client names withheld · available under NDA</p>
      </div>
      <ol className="mt-8 grid gap-px border-y border-line bg-line md:grid-cols-2 lg:grid-cols-3">
        {items.map((c, i) => (
          <li key={`${c.title}-${i}`} className="flex flex-col bg-bg p-6 lg:p-7">
            <p className="eyebrow">
              {c.sector} · {c.domain}
            </p>
            <h3 className="mt-3 text-display-xs">{c.title}</h3>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-fg-muted">{c.body}</p>
            <ul className="mt-auto flex flex-wrap gap-2 pt-6">
              {c.outcomes.map((o) => (
                <Tag key={o}>{o}</Tag>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
