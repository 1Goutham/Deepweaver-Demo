import Link from "next/link";
import type { ReactNode, ComponentProps } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "light" | "inverse" | "ghost" | "link";
type Size = "sm" | "md" | "lg";

type Base = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
  icon?: boolean;
};
type AsLink = Base & { href: string } & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;
type AsButton = Base & { href?: undefined } & Omit<ComponentProps<"button">, "className" | "children">;

const base =
  "group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full font-medium transition-[background-color,color,border-color,transform] duration-200 ease-out-expo focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber disabled:pointer-events-none disabled:opacity-50";

const sizes: Record<Size, string> = {
  sm: "h-10 px-5 text-[0.875rem]",
  md: "h-12 px-7 text-[0.9375rem]",
  lg: "h-14 px-8 text-base",
};

// Theme-aware: primary is fg-on-bg inversion, so it reads as white-on-navy
// in dark sections and navy-on-canvas in light ones.
const variants: Record<Variant, string> = {
  primary: "bg-blue text-white hover:bg-lavender",
  light: "bg-white text-ink hover:bg-ink hover:text-white",
  inverse: "bg-bg text-fg border border-line-strong hover:border-fg",
  ghost: "border border-line-strong text-fg hover:border-fg hover:bg-fg/5",
  link: "h-auto rounded-none px-0 text-fg underline-offset-4 hover:underline",
};

function Arrow() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 16 16"
      className="size-3.5 -mr-1 transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}

export default function Button(props: AsLink | AsButton) {
  const { variant = "primary", size = "md", className, children, icon = true, ...rest } = props;
  const cls = cn(base, sizes[size], variants[variant], className);
  if ("href" in rest && rest.href) {
    const { href, ...linkRest } = rest as Omit<AsLink, keyof Base>;
    return (
      <Link href={href} className={cls} {...linkRest}>
        {children}
        {icon && <Arrow />}
      </Link>
    );
  }
  const { href: _href, ...buttonRest } = rest as Omit<AsButton, keyof Base>;
  void _href;
  return (
    <button className={cls} {...buttonRest}>
      {children}
      {icon && <Arrow />}
    </button>
  );
}
