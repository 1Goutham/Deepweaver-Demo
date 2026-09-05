import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex h-7 items-center rounded-xs border border-line px-2.5 text-[0.75rem] font-medium tracking-[0.01em] text-fg-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
