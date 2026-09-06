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
  defaultOpen = false,
  size = "md",
}: {
  code?: string;
  title: string;
  meta?: string;
  summary?: string;
  children: ReactNode;
  className?: string;
  defaultOpen?: boolean;
  /** md: display-xs title (lists of packages). lg: display-sm title (statements). */
  size?: "md" | "lg";
}) {
  const lg = size === "lg";
  return (
    <details open={defaultOpen || undefined} className={cn("group border-t border-line last:border-b", className)}>
      <summary className={cn("flex cursor-pointer list-none items-start gap-5 [&::-webkit-details-marker]:hidden", lg ? "py-7 sm:py-8" : "py-6")}>
        {code && <span className={cn("w-8 shrink-0 font-display text-sm font-medium", lg ? "pt-2 text-accent" : "pt-1 text-fg-soft")}>{code}</span>}
        <span className="flex-1">
          <span className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <span className={cn("font-display text-fg", lg ? "text-display-sm" : "text-display-xs")}>{title}</span>
            {meta && <span className="text-xs font-medium tabular-nums text-fg-muted">{meta}</span>}
          </span>
          {summary && <span className={cn("mt-1.5 block max-w-[64ch] text-fg-muted", lg ? "text-base sm:text-lead sm:font-light" : "text-[0.9375rem]")}>{summary}</span>}
        </span>
        <span aria-hidden className={cn("grid size-7 shrink-0 place-items-center rounded-full border border-line text-fg transition-transform duration-300 ease-out-expo group-open:rotate-45", lg ? "mt-2" : "mt-1")}>
          <svg viewBox="0 0 12 12" className="size-3" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 1v10M1 6h10" />
          </svg>
        </span>
      </summary>
      <div className={cn("pb-8 text-[0.9375rem] leading-relaxed text-fg-muted", code ? "pl-13" : "", lg && "pb-10")}>{children}</div>
    </details>
  );
}
