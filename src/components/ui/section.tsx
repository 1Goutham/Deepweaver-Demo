import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type Theme = "light" | "dark" | "deep";

type Props = {
  children: ReactNode;
  theme?: Theme;
  className?: string;
  id?: string;
  /** vertical rhythm: sm 64/96 · md 96/128 · lg 128/176 */
  pad?: "none" | "sm" | "md" | "lg";
  bleed?: boolean;
};

/** Every page section declares its theme so the nav and shared components adapt. */
export default function Section({ children, theme = "light", className, id, pad = "md" }: Props) {
  return (
    <section
      id={id}
      data-theme={theme}
      className={cn(
        "relative bg-bg text-fg",
        pad === "sm" && "section-pad-sm",
        (pad === "md" || pad === "lg") && "section-pad",
        className,
      )}
    >
      {children}
    </section>
  );
}
