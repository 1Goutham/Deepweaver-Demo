"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { Component, useState, useSyncExternalStore, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const HeroScene = dynamic(() => import("./hero-scene"), { ssr: false });

/** Any failure inside WebGL leaves the still image in place instead of taking the page down. */
class SceneBoundary extends Component<{ children: ReactNode; onError: () => void }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch() {
    this.props.onError();
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

type Mode = "pending" | "3d" | "static";

/**
 * Decides once, on the client, whether this device gets the live object or the
 * pre-rendered still of the same composition. The still is always painted first
 * so it is the LCP element; the canvas fades in over it.
 */
let decided: Mode | undefined;
function decide(): Mode {
  if (decided) return decided;
  decided = decideOnce();
  return decided;
}
function decideOnce(): Mode {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return "static";
  const nav = navigator as Navigator & { connection?: { saveData?: boolean }; deviceMemory?: number };
  if (nav.connection?.saveData) return "static";
  if ((nav.hardwareConcurrency ?? 8) <= 2) return "static";
  if ((nav.deviceMemory ?? 8) < 2) return "static";
  try {
    const c = document.createElement("canvas");
    const gl = c.getContext("webgl2") || c.getContext("webgl");
    if (!gl) return "static";
  } catch {
    return "static";
  }
  return "3d";
}

const noop = () => () => {};
// Small screens drop the thread and contact shadow; device tier is handled by decide().
const isSimplified = () => window.innerWidth < 640;

export default function HeroVisual({ className }: { className?: string }) {
  // Server renders the still; the client decides once, without a state cascade.
  const mode = useSyncExternalStore(noop, decide, () => "pending" as Mode);
  const simplified = useSyncExternalStore(noop, isSimplified, () => false);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const live = mode === "3d" && !failed;

  return (
    <div className={cn("relative aspect-square w-full", className)}>
      {/* Soft brand glow behind the object — one gradient, deliberately. */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 size-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(22,109,234,0.35), rgba(97,81,194,0.18) 55%, transparent 75%)" }}
      />
      <Image
        src="/brand/hero-object.png"
        alt="The DeepWeaver mark as a dimensional object: the D split along its weave into four parts, bound by a thread of binary digits."
        width={1200}
        height={1200}
        priority
        fetchPriority="high"
        sizes="(min-width: 1024px) 48vw, 90vw"
        className={cn(
          "relative z-0 h-full w-full object-contain transition-opacity duration-700 ease-out",
          live && ready ? "opacity-0" : "opacity-100",
        )}
      />
      {live && (
        <div className={cn("absolute inset-0 z-10 transition-opacity duration-700 ease-out", ready ? "opacity-100" : "opacity-0")}>
          <SceneBoundary onError={() => setFailed(true)}>
            <HeroScene simplified={simplified} onReady={() => setReady(true)} />
          </SceneBoundary>
        </div>
      )}
    </div>
  );
}
