import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = { variant?: "white" | "navy"; className?: string; priority?: boolean };

/** The supplied lockup asset, never redrawn. 2048×402 source. */
export default function Logo({ variant = "white", className, priority }: Props) {
  return (
    <Link href="/" aria-label="DeepWeaver home" className={cn("inline-flex shrink-0 items-center", className)}>
      <Image
        src={variant === "white" ? "/brand/deepweaver-lockup-white.png" : "/brand/deepweaver-lockup-navy.png"}
        alt="DeepWeaver"
        width={2048}
        height={402}
        priority={priority}
        className="h-[26px] w-auto md:h-[28px]"
        sizes="160px"
      />
    </Link>
  );
}
