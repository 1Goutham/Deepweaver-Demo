"use client";

import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";

/**
 * The Woven Intelligence Seed.
 *
 * A seed-shaped sculpture of interlaced ribbons around a luminous core.
 * Two families of ribbons wind in opposite directions across the seed's
 * surface and pass over and under each other — the weave. The core is
 * the intelligence; the weave is what carries it into the world.
 *
 * Everything is procedural: no textures, no imported meshes.
 */

const R = 1;              // seed radius at its widest
const H = 2.55;           // seed height
const RIBBONS = 6;        // per family
const TURNS = 0.58;       // winding per ribbon, in revolutions
const WIDTH = 0.135;
const THICK = 0.016;
const OVERUNDER = 0.065;  // normal offset that produces the interlace

const SKY = new THREE.Color("#afe4fd");
const BLUE = new THREE.Color("#3f7cf5");
const LAV = new THREE.Color("#6151c2");
const VIOLET = new THREE.Color("#a792fd");

/** Radius of the seed at height fraction v (0 bottom → 1 top). Fuller low, tapering to a point. */
function profile(v: number) {
  const s = Math.sin(Math.PI * v);
  return R * Math.pow(s, 0.72) * (1 - 0.3 * v);
}
function surface(theta: number, v: number, out: THREE.Vector3) {
  const r = profile(v);
  return out.set(r * Math.cos(theta), (v - 0.5) * H, r * Math.sin(theta));
}

type RibbonSpec = { theta0: number; dir: 1 | -1; phase: number };

/** Builds one ribbon as a closed box strip along a helical path on the seed surface. */
function ribbonGeometry({ theta0, dir, phase }: RibbonSpec, samples = 160) {
  const pos: number[] = [];
  const nor: number[] = [];
  const col: number[] = [];
  const idx: number[] = [];
  const p = new THREE.Vector3();
  const pN = new THREE.Vector3();
  const pT = new THREE.Vector3();
  const n = new THREE.Vector3();
  const t = new THREE.Vector3();
  const b = new THREE.Vector3();
  const c = new THREE.Color();
  const v0 = 0.035;
  const v1 = 0.965;

  for (let i = 0; i <= samples; i++) {
    const u = i / samples;
    const v = v0 + (v1 - v0) * u;
    const theta = theta0 + dir * TURNS * Math.PI * 2 * v;
    surface(theta, v, p);
    // tangent by finite difference along the path
    const dv = 0.002;
    surface(theta0 + dir * TURNS * Math.PI * 2 * (v + dv), v + dv, pT);
    t.copy(pT).sub(p).normalize();
    // surface normal: radial direction tilted by the profile slope
    const r = profile(v);
    const rN = profile(v + dv);
    const slope = (rN - r) / (dv * H);
    n.set(Math.cos(theta), -slope, Math.sin(theta)).normalize();
    b.crossVectors(n, t).normalize();
    n.crossVectors(t, b).normalize();
    // interlace: alternate over/under along the path, opposite for each family
    const weave = Math.sin(u * Math.PI * 2 * 2.5 + phase) * OVERUNDER * dir;
    pN.copy(p).addScaledVector(n, weave);
    // gradient: top-left sky → bottom-right violet in the seed's own frame
    const g = THREE.MathUtils.clamp((pN.x * 0.6 - pN.y + 1.6) / 3.2, 0, 1);
    if (g < 0.45) c.copy(SKY).lerp(BLUE, g / 0.45);
    else c.copy(BLUE).lerp(VIOLET, (g - 0.45) / 0.55);
    if (dir < 0) c.lerp(LAV, 0.18);

    // 4 corners of the cross-section: (+b,+n) (+b,-n) (-b,-n) (-b,+n)
    const corners = [
      [WIDTH / 2, THICK / 2],
      [WIDTH / 2, -THICK / 2],
      [-WIDTH / 2, -THICK / 2],
      [-WIDTH / 2, THICK / 2],
    ];
    for (const [wb, wn] of corners) {
      pos.push(pN.x + b.x * wb + n.x * wn, pN.y + b.y * wb + n.y * wn, pN.z + b.z * wb + n.z * wn);
      col.push(c.r, c.g, c.b);
    }
    // per-corner normals: average of the two adjacent faces (edge-rounded look)
    const nrm = [
      [b.x + n.x, b.y + n.y, b.z + n.z],
      [b.x - n.x, b.y - n.y, b.z - n.z],
      [-b.x - n.x, -b.y - n.y, -b.z - n.z],
      [-b.x + n.x, -b.y + n.y, -b.z + n.z],
    ];
    for (const [x, y, z] of nrm) {
      const l = Math.hypot(x, y, z);
      nor.push(x / l, y / l, z / l);
    }
    if (i < samples) {
      const a = i * 4;
      const d = a + 4;
      for (let k = 0; k < 4; k++) {
        const k2 = (k + 1) % 4;
        idx.push(a + k, d + k, d + k2, a + k, d + k2, a + k2);
      }
    }
  }
  // caps
  const first = 0;
  const last = samples * 4;
  idx.push(first, first + 2, first + 1, first, first + 3, first + 2);
  idx.push(last, last + 1, last + 2, last, last + 2, last + 3);

  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute("normal", new THREE.Float32BufferAttribute(nor, 3));
  g.setAttribute("color", new THREE.Float32BufferAttribute(col, 3));
  g.setIndex(idx);
  return g;
}

function useGlowTexture() {
  return useMemo(() => {
    const size = 256;
    const c = document.createElement("canvas");
    c.width = c.height = size;
    const ctx = c.getContext("2d")!;
    const grd = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    grd.addColorStop(0, "rgba(255,255,255,1)");
    grd.addColorStop(0.18, "rgba(235,245,255,0.85)");
    grd.addColorStop(0.45, "rgba(175,228,253,0.28)");
    grd.addColorStop(1, "rgba(97,81,194,0)");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, size, size);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }, []);
}

function Core() {
  const ref = useRef<THREE.Group>(null);
  const glow = useGlowTexture();
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const s = 1 + Math.sin(clock.elapsedTime * 0.9) * 0.03;
    ref.current.scale.setScalar(s);
  });
  return (
    <group ref={ref}>
      <mesh>
        <sphereGeometry args={[0.3, 64, 64]} />
        <meshPhysicalMaterial color="#dbeeff" emissive="#8fcbff" emissiveIntensity={1.25} roughness={0.3} clearcoat={1} clearcoatRoughness={0.12} />
      </mesh>
      <pointLight color="#9fd4ff" intensity={5} distance={3} decay={2} />
      {[
        [1.8, 0.3, "#a792fd"],
        [1.15, 0.42, "#bfe0ff"],
        [0.72, 0.62, "#ffffff"],
      ].map(([size, opacity, color], i) => (
        <sprite key={i} scale={[size as number, size as number, 1]}>
          <spriteMaterial map={glow} color={color as string} transparent opacity={opacity as number} blending={THREE.AdditiveBlending} depthWrite={false} />
        </sprite>
      ))}
    </group>
  );
}

function Weave() {
  const geos = useMemo(() => {
    const specs: RibbonSpec[] = [];
    for (let i = 0; i < RIBBONS; i++) {
      const th = (i / RIBBONS) * Math.PI * 2;
      specs.push({ theta0: th, dir: 1, phase: 0 });
      specs.push({ theta0: th + Math.PI / RIBBONS, dir: -1, phase: Math.PI });
    }
    return specs.map((s) => ribbonGeometry(s));
  }, []);
  const mat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        vertexColors: true,
        roughness: 0.42,
        metalness: 0.05,
        clearcoat: 0.7,
        clearcoatRoughness: 0.3,
        envMapIntensity: 0.8,
        side: THREE.DoubleSide,
      }),
    [],
  );
  return (
    <group>
      {geos.map((g, i) => (
        <mesh key={i} geometry={g} material={mat} />
      ))}
    </group>
  );
}

export default function SeedObject() {
  const group = useRef<THREE.Group>(null);
  const eased = useRef({ x: 0.3, y: 0 });
  const { size } = useThree();

  useFrame(({ clock, pointer }) => {
    if (!group.current) return;
    const t = clock.elapsedTime;
    const targetX = 0.32 - pointer.y * 0.08;
    const targetY = t * 0.11 + pointer.x * 0.12;
    eased.current.x += (targetX - eased.current.x) * 0.04;
    eased.current.y = targetY;
    group.current.rotation.set(eased.current.x, eased.current.y, -0.22);
    group.current.position.y = Math.sin(t * 0.5) * 0.03;
  });

  const scale = size.width < 640 ? 0.86 : 1.04;
  return (
    <group ref={group} scale={scale}>
      <Weave />
      <Core />
    </group>
  );
}
