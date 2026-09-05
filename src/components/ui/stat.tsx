import CountUp from "../motion/count-up";
import { cn } from "@/lib/utils";

type Props = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  className?: string;
  size?: "md" | "lg";
};

export default function Stat({ value, prefix, suffix, decimals, label, className, size = "md" }: Props) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <span
        className={cn(
          "font-display font-semibold tabular-nums tracking-[-0.02em] text-fg",
          size === "lg" ? "text-display-lg" : "text-display-md",
        )}
      >
        <CountUp to={value} prefix={prefix} suffix={suffix} decimals={decimals} />
      </span>
      <span className="text-sm text-fg-muted">{label}</span>
    </div>
  );
}
