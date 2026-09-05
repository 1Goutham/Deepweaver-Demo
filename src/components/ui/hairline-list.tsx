import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Editorial numbered list — the deck's own device, instead of a card grid. */
export function HairlineList({ children, className }: { children: ReactNode; className?: string }) {
  return <ol className={cn("divide-y divide-line border-y border-line", className)}>{children}</ol>;
}

export function HairlineRow({
  index,
  title,
  kicker,
  children,
  aside,
  className,
}: {
  index?: string;
  title: ReactNode;
  kicker?: ReactNode;
  children?: ReactNode;
  aside?: ReactNode;
  className?: string;
}) {
  return (
    <li className={cn("grid gap-4 py-8 md:grid-cols-12 md:gap-8 md:py-10", className)}>
      <div className="col-span-12 flex items-baseline gap-4 md:col-span-4">
        {index && <span className="font-display text-sm font-medium tabular-nums text-fg-soft">{index}</span>}
        <div>
          <h3 className="text-display-xs text-fg">{title}</h3>
          {kicker && <p className="mt-1 text-sm text-fg-muted">{kicker}</p>}
        </div>
      </div>
      <div className="col-span-12 text-[0.9375rem] leading-relaxed text-fg-muted md:col-span-5">{children}</div>
      {aside && <div className="col-span-12 md:col-span-3">{aside}</div>}
    </li>
  );
}
