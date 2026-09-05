import type { ReactNode } from "react";
import Eyebrow from "./eyebrow";
import Reveal from "../motion/reveal";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  size?: "md" | "lg";
  className?: string;
  children?: ReactNode;
  accent?: boolean;
  as?: "h1" | "h2" | "h3";
};

export default function SectionHeader({
  eyebrow,
  title,
  lead,
  align = "left",
  size = "md",
  className,
  children,
  accent,
  as: Heading = "h2",
}: Props) {
  return (
    <Reveal className={cn(align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <Eyebrow accent={accent} className={cn("mb-5", align === "center" && "justify-center")}>
          {eyebrow}
        </Eyebrow>
      )}
      <Heading
        className={cn(
          size === "lg" ? "text-display-lg" : "text-display-md",
          "max-w-[18ch]",
          align === "center" && "mx-auto",
        )}
      >
        {title}
      </Heading>
      {lead && (
        <p
          className={cn(
            "mt-8 max-w-[48ch] text-lead font-light text-fg-muted",
            align === "center" && "mx-auto",
          )}
        >
          {lead}
        </p>
      )}
      {children}
    </Reveal>
  );
}
