import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Native <details> styled as an editorial row. No JS, keyboard-accessible. */
export default function Disclosure({
  code,
  title,
  meta,
  summary,
  children,
  className,
}: {
  code?: string;
  title: string;
  meta?: string;
  summary?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <details className={cn("group border-t border-line last:border-b", className)}>
      <summary className="flex cursor-pointer list-none items-start gap-5 py-6 [&::-webkit-details-marker]:hidden">
        {code && <span className="w-8 shrink-0 pt-1 font-display text-sm font-medium text-fg-soft">{code}</span>}
        <span className="flex-1">
          <span className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <span className="text-display-xs font-display font-semibold text-fg">{title}</span>
            {meta && <span className="text-xs font-medium tabular-nums text-fg-muted">{meta}</span>}
          </span>
          {summary && <span className="mt-1.5 block max-w-[64ch] text-[0.9375rem] text-fg-muted">{summary}</span>}
        </span>
        <span aria-hidden className="mt-1 grid size-7 shrink-0 place-items-center rounded-full border border-line text-fg transition-transform duration-300 ease-out-expo group-open:rotate-45">
          <svg viewBox="0 0 12 12" className="size-3" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 1v10M1 6h10" />
          </svg>
        </span>
      </summary>
      <div className={cn("pb-8 text-[0.9375rem] leading-relaxed text-fg-muted", code ? "pl-13" : "")}>{children}</div>
    </details>
  );
}
