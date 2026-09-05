import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  size?: "site" | "wide" | "prose";
  as?: ElementType;
};

export default function Container({ children, className, size = "site", as = "div" }: Props) {
  const Tag = as as "div";
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-5 sm:px-8 lg:px-12",
        size === "site" && "max-w-site",
        size === "wide" && "max-w-wide",
        size === "prose" && "max-w-prose",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
