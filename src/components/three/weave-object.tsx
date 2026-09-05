"use client";

import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import shapes from "./mark-shapes.json";

/**
 * The DeepWeaver mark, dimensionalised and exploded into its four parts:
 * the D cut along its weave slot (top wedge + body), and the two weave
 * bars. Each part is one of the four AI domains; the binary thread that
 * runs along the slot binds them into one object.
 *
 * Geometry is traced from the supplied logo asset (mark-shapes.json).
 */

type Poly = number[][];
type Shapes = { top: Poly[]; body: Poly[]; capsule: Poly[]; stub: Poly[]; _meta: { axis: number[]; centre: number[]; slotWidth: number } };
const S = shapes as unknown as Shapes;

function polyToShape(polys: Poly[]): THREE.Shape {
  // Largest polygon is the outline; ignore slivers.
  const main = polys.filter((p) => p.length >= 12).sort((a, b) => b.length - a.length)[0];
  const shape = new THREE.Shape();
  main.forEach(([x, y], i) => (i === 0 ? shape.moveTo(x, y) : shape.lineTo(x, y)));
  shape.closePath();
  return shape;
}

const BRAND = {
  sky: new THREE.Color("#afe4fd"),
  blue: new THREE.Color("#3f7cf5"),
  lavender: new THREE.Color("#6151c2"),
  violet: new THREE.Color("#a792fd"),
  side: new THREE.Color("#b3c1f5"),
};

/** Paint the front/back faces with the deck's diagonal gradient (sky → violet). */
function applyGradient(geo: THREE.ExtrudeGeometry, from: THREE.Color, to: THREE.Color) {
  geo.computeBoundingBox();
  const pos = geo.attributes.position;
  const colors = new Float32Array(pos.count * 3);
  const c = new THREE.Color();
  // Gradient runs top-left → bottom-right across the whole mark (fixed frame),
  // so the four parts share one continuous gradient when assembled.
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const t = THREE.MathUtils.clamp((x - y + 1.6) / 3.2, 0, 1);
    c.copy(from).lerp(to, t);
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
  }
  geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
}

type PieceProps = {
  polys: Poly[];
  depth: number;
  z: number;
  from: THREE.Color;
  to: THREE.Color;
  offset?: [number, number];
  floatSeed: number;
  floatAmp: number;
};

function Piece({ polys, depth, z, from, to, offset = [0, 0], floatSeed, floatAmp }: PieceProps) {
  const ref = useRef<THREE.Mesh>(null);
  const geo = useMemo(() => {
    const shape = polyToShape(polys);
    const g = new THREE.ExtrudeGeometry(shape, {
      depth,
      bevelEnabled: true,
      bevelThickness: 0.05,
      bevelSize: 0.055,
      bevelSegments: 9,
      curveSegments: 18,
    });
    g.translate(0, 0, -depth / 2);
    applyGradient(g, from, to);
    return g;
  }, [polys, depth, from, to]);

  // Faces carry the gradient in vertex colour; sides use the same gradient
  // multiplied by a deeper blue so the extrusion reads as one material in shadow.
  const faceMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        vertexColors: true,
        roughness: 0.48,
        metalness: 0.0,
        clearcoat: 0.5,
        clearcoatRoughness: 0.42,
        envMapIntensity: 0.7,
      }),
    [],
  );
  const sideMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        vertexColors: true,
        color: BRAND.side,
        roughness: 0.62,
        metalness: 0.0,
        clearcoat: 0.25,
        clearcoatRoughness: 0.55,
        envMapIntensity: 0.55,
      }),
    [],
  );

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.elapsedTime;
    ref.current.position.z = z + Math.sin(t * 0.55 + floatSeed) * floatAmp;
  });

  return (
    <mesh
      ref={ref}
      geometry={geo}
      material={[faceMat, sideMat]}
      position={[offset[0], offset[1], z]}
      castShadow
      receiveShadow
    />
  );
}

/** A chain of 0/1 glyphs following a curve through the weave slot. */
function BinaryThread({ count = 260 }: { count?: number }) {
  const ref = useRef<THREE.InstancedMesh>(null);
  const { axis, centre } = S._meta;
  const dir = useMemo(() => new THREE.Vector3(axis[0], axis[1], 0).normalize(), [axis]);

  const texture = useMemo(() => {
    const c = document.createElement("canvas");
    c.width = 128;
    c.height = 64;
    const ctx = c.getContext("2d")!;
    ctx.clearRect(0, 0, 128, 64);
    ctx.fillStyle = "#ffffff";
    ctx.font = "600 44px Inter, ui-sans-serif, system-ui";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("0", 32, 34);
    ctx.fillText("1", 96, 34);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 4;
    return t;
  }, []);

  // Two UV sets: left half = "0", right half = "1". Use per-instance uv offset via a tiny shader patch.
  const mat = useMemo(() => {
    const m = new THREE.MeshBasicMaterial({ map: texture, color: "#f2f6ff", transparent: true, depthWrite: false, opacity: 0.8 });
    m.onBeforeCompile = (shader) => {
      shader.vertexShader = shader.vertexShader
        .replace("#include <common>", "#include <common>\nattribute float glyph;\nvarying float vGlyph;")
        .replace("#include <uv_vertex>", "#include <uv_vertex>\nvGlyph = glyph;");
      shader.fragmentShader = shader.fragmentShader
        .replace("#include <common>", "#include <common>\nvarying float vGlyph;")
        .replace(
          "#include <map_fragment>",
          "vec2 guv = vec2(vMapUv.x * 0.5 + vGlyph * 0.5, vMapUv.y);\n vec4 sampledDiffuseColor = texture2D( map, guv );\n diffuseColor *= sampledDiffuseColor;",
        );
    };
    return m;
  }, [texture]);

  const geo = useMemo(() => {
    const g = new THREE.PlaneGeometry(0.085, 0.085);
    const glyph = new Float32Array(count);
    // Deterministic pseudo-random so the pattern is stable across renders.
    let seed = 1337;
    for (let i = 0; i < count; i++) {
      seed = (seed * 1103515245 + 12345) & 0x7fffffff;
      glyph[i] = (seed >> 16) & 1;
    }
    g.setAttribute("glyph", new THREE.InstancedBufferAttribute(glyph, 1));
    return g;
  }, [count]);

  // Path: a long gentle S-curve along the slot axis, passing through the mark's centre.
  const curve = useMemo(() => {
    const c = new THREE.Vector3(centre[0], centre[1], 0);
    const perp = new THREE.Vector3(-dir.y, dir.x, 0);
    const pts: THREE.Vector3[] = [];
    for (let i = -6; i <= 6; i++) {
      const t = i / 6;
      const p = c
        .clone()
        .addScaledVector(dir, t * 3.0)
        .addScaledVector(perp, Math.sin(t * Math.PI * 1.2) * 0.06)
        .setZ(Math.sin(t * Math.PI) * 0.55); // dives behind the body, rises in front of the wedge
      pts.push(p);
    }
    return new THREE.CatmullRomCurve3(pts);
  }, [centre, dir]);

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const camera = useThree((s) => s.camera);

  useFrame(({ clock }) => {
    const m = ref.current;
    if (!m) return;
    const t = clock.elapsedTime * 0.035;
    for (let i = 0; i < count; i++) {
      const u = ((i / count + t) % 1 + 1) % 1;
      curve.getPointAt(u, dummy.position);
      dummy.quaternion.copy(camera.quaternion);
      const fade = Math.sin(u * Math.PI); // fade at both ends
      const s = 0.55 + fade * 0.55;
      dummy.scale.setScalar(s);
      dummy.updateMatrix();
      m.setMatrixAt(i, dummy.matrix);
    }
    m.instanceMatrix.needsUpdate = true;
  });

  return <instancedMesh ref={ref} args={[geo, mat, count]} frustumCulled={false} />;
}

export default function WeaveObject({ simplified = false }: { simplified?: boolean }) {
  const group = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const { size } = useThree();

  useFrame(({ clock, pointer: p }) => {
    if (!group.current) return;
    const t = clock.elapsedTime;
    // Slow idle sway + damped pointer parallax (clamped to ~6°).
    const targetY = -0.36 + Math.sin(t * 0.25) * 0.07 + p.x * 0.1;
    const targetX = 0.22 + Math.cos(t * 0.2) * 0.04 - p.y * 0.08;
    pointer.current.x += (targetX - pointer.current.x) * 0.04;
    pointer.current.y += (targetY - pointer.current.y) * 0.04;
    group.current.rotation.set(pointer.current.x, pointer.current.y, 0.04);
  });

  const scale = size.width < 640 ? 0.92 : 0.98;

  return (
    <group ref={group} scale={scale} position={[0.02, -0.04, 0]}>
      {/* 01 Digital — top wedge */}
      <Piece polys={S.top} depth={0.24} z={0.14} from={BRAND.sky} to={BRAND.blue} floatSeed={0} floatAmp={0.03} offset={[-0.05, 0.06]} />
      {/* 04 Sovereign — the body */}
      <Piece polys={S.body} depth={0.3} z={-0.12} from={BRAND.blue} to={BRAND.violet} floatSeed={2.1} floatAmp={0.025} offset={[0.05, -0.06]} />
      {/* 02 Physical — capsule bar, floats proud of the body */}
      <Piece polys={S.capsule} depth={0.2} z={0.22} from={BRAND.sky} to={BRAND.lavender} floatSeed={4.2} floatAmp={0.05} />
      {/* 03 Frontier — stub */}
      <Piece polys={S.stub} depth={0.18} z={0.34} from={BRAND.violet} to={BRAND.lavender} floatSeed={1.3} floatAmp={0.06} />
      <BinaryThread count={simplified ? 140 : 260} />
    </group>
  );
}
