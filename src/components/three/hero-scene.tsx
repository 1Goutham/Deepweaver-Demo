"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, Lightformer } from "@react-three/drei";
import WeaveObject from "./weave-object";

type Props = { simplified?: boolean; onReady?: () => void };

export default function HeroScene({ simplified = false, onReady }: Props) {
  const [visible, setVisible] = useState(true);

  // Pause the render loop when the hero is scrolled away.
  useEffect(() => {
    const el = document.getElementById("hero");
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 4.4], fov: 32, near: 0.1, far: 20 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      frameloop={visible ? "always" : "never"}
      shadows={false}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
        onReady?.();
      }}
      style={{ position: "absolute", inset: 0 }}
      aria-hidden
    >
      <Suspense fallback={null}>
        {/* Blue key from upper-left, violet rim from lower-right — the deck's lighting. */}
        <ambientLight intensity={0.45} color="#c7d6ff" />
        <directionalLight position={[-3, 4, 5]} intensity={2.2} color="#eef4ff" />
        <directionalLight position={[4, -2, 3]} intensity={1.0} color="#a792fd" />
        <directionalLight position={[0, -4, 2]} intensity={0.5} color="#166dea" />
        {/* Procedural environment (no network fetch): a cool key panel and a violet fill. */}
        <Environment resolution={64} environmentIntensity={0.5}>
          <Lightformer intensity={2.2} color="#dfeeff" position={[-4, 5, 4]} rotation={[0, Math.PI / 3, 0]} scale={[8, 4, 1]} />
          <Lightformer intensity={1.2} color="#a792fd" position={[5, -2, 3]} rotation={[0, -Math.PI / 3, 0]} scale={[6, 3, 1]} />
          <Lightformer intensity={0.6} color="#afe4fd" position={[0, 6, -2]} rotation={[Math.PI / 2, 0, 0]} scale={[10, 10, 1]} />
        </Environment>
        <WeaveObject simplified={simplified} />
        {!simplified && (
          <ContactShadows position={[0, -1.55, 0]} opacity={0.35} scale={5} blur={2.6} far={2.2} color="#030b14" />
        )}
      </Suspense>
    </Canvas>
  );
}
