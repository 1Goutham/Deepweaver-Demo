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
        pad === "sm" && "py-16 md:py-24",
        pad === "md" && "py-24 md:py-32",
        pad === "lg" && "py-32 md:py-44",
        className,
      )}
    >
      {children}
    </section>
  );
}
