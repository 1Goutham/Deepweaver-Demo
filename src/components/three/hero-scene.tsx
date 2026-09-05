"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import OrbObject from "./orb-object";

type Props = { simplified?: boolean; onReady?: () => void };

// Only the asset-capture tooling needs a readable drawing buffer.
const captureMode = () => typeof window !== "undefined" && window.location.search.includes("capture");

export default function HeroScene({ onReady }: Props) {
  const [visible, setVisible] = useState(true);
  const [scrolling, setScrolling] = useState(false);

  // Render only while a meaningful part of the hero is on screen.
  useEffect(() => {
    const el = document.getElementById("hero");
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting && e.intersectionRatio > 0.2), { threshold: [0, 0.2, 0.5] });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Hand the frame budget to scrolling: pause while the page moves, resume once it settles.
  useEffect(() => {
    let timer = 0;
    const onScroll = () => {
      setScrolling(true);
      window.clearTimeout(timer);
      timer = window.setTimeout(() => setScrolling(false), 140);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0.25, 8.6], fov: 30, near: 0.1, far: 100 }}
      gl={{
        antialias: false,
        alpha: true,
        premultipliedAlpha: false,
        preserveDrawingBuffer: captureMode(),
        powerPreference: "high-performance",
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1,
      }}
      frameloop={visible && !scrolling ? "always" : "never"}
      onCreated={({ gl, camera }) => {
        gl.setClearColor(0x000000, 0);
        camera.lookAt(0, 0, 0);
        onReady?.();
      }}
      style={{ position: "absolute", inset: 0 }}
      aria-hidden
    >
      <Suspense fallback={null}>
        <OrbObject />
      </Suspense>
    </Canvas>
  );
}
