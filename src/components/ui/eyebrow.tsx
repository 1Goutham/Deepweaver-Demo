import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = { children: ReactNode; className?: string; accent?: boolean; as?: "p" | "span" | "div" };

export default function Eyebrow({ children, className, accent, as: Tag = "p" }: Props) {
  return (
    <Tag className={cn("eyebrow flex items-center gap-3", accent && "text-amber", className)}>
      {accent && <span aria-hidden className="inline-block h-px w-6 bg-amber" />}
      {children}
    </Tag>
  );
}
