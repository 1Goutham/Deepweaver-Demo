/**
 * DeepWeaver hero mark — real-time 3D build of the brand mark.
 *
 * Ported from the supplied hero prototype. Geometry is traced from the flat
 * mark in "stroke units" (1 = stroke diameter) with the long strokes
 * horizontal, then rotated 45° so they run bottom-left → top-right. Colour is
 * baked per vertex from the brand render so it matches on every device.
 *
 * Change from the prototype: the entrance runs from the very first frame (no
 * static image first). The glow lives outside the canvas, in the host
 * component, so nothing lights the canvas rectangle itself.
 */
import * as THREE from "three";
import { mergeVertices } from "three/examples/jsm/utils/BufferGeometryUtils.js";

// ---------------------------------------------------------------------------
// Geometry
// ---------------------------------------------------------------------------
type Stroke = { x0: number; x1: number; y0: number; y1: number; flat: number; sweep: number };
const MARK = {
  small: { cx: 2.795, cy: 2.908, r: 0.5, chord: 3.036 },
  smallGap: 0.06,
  mid: { x0: 2.278, x1: 4.411, y0: 3.119, y1: 4.119, flat: 0.376, sweep: 0.622 } as Stroke,
  long: { x0: 3.359, x1: 5.997, y0: 4.2, y1: 5.2, flat: 0.23, sweep: 0.769 } as Stroke,
  cornerRadius: 0.05,
  rotation: Math.PI / 4,
};

function strokeShape({ x0, x1, y0, y1, sweep }: Stroke, cr: number) {
  const s = new THREE.Shape();
  const top = -y0;
  const bot = -y1;
  const capR = 0.5;
  s.moveTo(x0 + cr, top);
  s.lineTo(x1 - capR, top);
  s.absarc(x1 - capR, top - capR, capR, Math.PI / 2, -Math.PI / 2, true);
  s.lineTo(x0 + sweep, bot);
  s.absarc(x0 + sweep, bot + sweep, sweep, -Math.PI / 2, -Math.PI, true);
  s.lineTo(x0, top - cr);
  s.absarc(x0 + cr, top - cr, cr, Math.PI, Math.PI / 2, true);
  s.closePath();
  return s;
}

function smallShape({ cx, cy, r, chord }: typeof MARK.small, extraGap: number) {
  const s = new THREE.Shape();
  const c = -(cy - extraGap);
  const cut = -(chord - extraGap);
  const a = Math.asin((c - cut) / r);
  s.absarc(cx, c, r, -a, Math.PI + a, false);
  s.closePath();
  return s;
}

function extrude(shape: THREE.Shape, depth: number, bevel: number) {
  const g = new THREE.ExtrudeGeometry(shape, {
    depth,
    steps: 1,
    curveSegments: 64,
    bevelEnabled: true,
    bevelThickness: bevel,
    bevelSize: bevel,
    bevelOffset: -bevel,
    bevelSegments: 12,
  });
  g.deleteAttribute("normal");
  g.deleteAttribute("uv");
  const merged = mergeVertices(g, 1e-4);
  merged.computeVertexNormals();
  merged.translate(0, 0, -depth / 2);
  g.dispose();
  return merged;
}

type Stop = [number, THREE.Color];
const FACE: Stop[] = [
  [0.0, new THREE.Color("#8fb0fc")],
  [0.45, new THREE.Color("#8ea6fb")],
  [0.72, new THREE.Color("#968ffb")],
  [1.0, new THREE.Color("#ae88fb")],
];
const WALL: Stop[] = [
  [0.0, new THREE.Color("#4166f2")],
  [0.5, new THREE.Color("#4f62f4")],
  [1.0, new THREE.Color("#7052f6")],
];

function sampleGradient(stops: Stop[], t: number) {
  t = THREE.MathUtils.clamp(t, 0, 1);
  for (let i = 1; i < stops.length; i++) {
    if (t <= stops[i][0]) {
      const [t0, c0] = stops[i - 1];
      const [t1, c1] = stops[i];
      return c0.clone().lerp(c1, (t - t0) / (t1 - t0));
    }
  }
  return stops[stops.length - 1][1].clone();
}

function paintGradient(geometry: THREE.BufferGeometry, minX: number, maxX: number) {
  const pos = geometry.attributes.position;
  const nrm = geometry.attributes.normal;
  const col = new Float32Array(pos.count * 3);
  const p = new THREE.Vector3();
  const n = new THREE.Vector3();
  geometry.computeBoundingBox();
  const zMin = geometry.boundingBox!.min.z;
  const zMax = geometry.boundingBox!.max.z;
  for (let i = 0; i < pos.count; i++) {
    p.fromBufferAttribute(pos, i);
    n.fromBufferAttribute(nrm, i);
    const t = (p.x - minX) / (maxX - minX) + p.y * 0.05;
    const face = sampleGradient(FACE, t);
    const wall = sampleGradient(WALL, t);
    const facing = THREE.MathUtils.smoothstep(Math.abs(n.z), 0.3, 0.92);
    const depthShade = THREE.MathUtils.lerp(0.82, 1, (p.z - zMin) / (zMax - zMin));
    wall.multiplyScalar(depthShade);
    const c = wall.lerp(face, facing);
    col[i * 3] = c.r;
    col[i * 3 + 1] = c.g;
    col[i * 3 + 2] = c.b;
  }
  geometry.setAttribute("color", new THREE.BufferAttribute(col, 3));
}

export function buildLogoGeometry({ depth = 0.9, bevel = 0.035, stagger = 0.25 } = {}) {
  const geos = [
    { g: extrude(smallShape(MARK.small, MARK.smallGap), depth, bevel), z: -stagger },
    { g: extrude(strokeShape(MARK.mid, MARK.cornerRadius), depth, bevel), z: 0 },
    { g: extrude(strokeShape(MARK.long, MARK.cornerRadius), depth, bevel), z: stagger },
  ];
  const rot = new THREE.Matrix4().makeRotationZ(MARK.rotation);
  const all = new THREE.Box3();
  for (const item of geos) {
    item.g.translate(0, 0, item.z);
    item.g.applyMatrix4(rot);
    item.g.computeBoundingBox();
    all.union(item.g.boundingBox!);
  }
  const centre = all.getCenter(new THREE.Vector3());
  for (const item of geos) {
    item.g.translate(-centre.x, -centre.y, 0);
    item.g.computeBoundingBox();
  }
  const size = all.getSize(new THREE.Vector3());
  for (const item of geos) paintGradient(item.g, -size.x / 2, size.x / 2);
  return { geometries: geos.map((i) => i.g), size };
}

// ---------------------------------------------------------------------------
// Scene
// ---------------------------------------------------------------------------
export type HeroLogoOptions = {
  idlePeriod: number;
  idleYaw: number;
  idlePitch: number;
  idleDepth: number;
  parallaxMax: number;
  parallaxDamping: number;
  sweepEvery: number;
  sweepDuration: number;
  introDuration: number;
  introDelay: number;
  maxPixelRatio: number;
  fov: number;
  fill: number;
  onReady?: () => void;
  onError?: (err: unknown) => void;
};

const DEFAULTS: HeroLogoOptions = {
  idlePeriod: 13,
  idleYaw: 2.2,
  idlePitch: 1.4,
  idleDepth: 0.03,
  parallaxMax: 4,
  parallaxDamping: 4,
  sweepEvery: 12,
  sweepDuration: 2.6,
  introDuration: 1.9,
  introDelay: 0.05,
  maxPixelRatio: 2,
  fov: 24,
  fill: 0.86,
};

export type HeroLogoHandle = { destroy(): void };

function supportsWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
const bell = (t: number) => Math.sin(Math.PI * THREE.MathUtils.clamp(t, 0, 1)) ** 2;
const easeOutQuint = (t: number) => 1 - Math.pow(1 - THREE.MathUtils.clamp(t, 0, 1), 5);

export function createHeroLogo(container: HTMLElement, userOptions: Partial<HeroLogoOptions> = {}): HeroLogoHandle {
  const opts: HeroLogoOptions = { ...DEFAULTS, ...userOptions };
  if (typeof window === "undefined" || !supportsWebGL()) {
    opts.onError?.(new Error("WebGL unavailable"));
    return { destroy() {} };
  }
  const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)");
  const finePointer = window.matchMedia?.("(hover: hover) and (pointer: fine)");

  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
  } catch (err) {
    opts.onError?.(err);
    return { destroy() {} };
  }
  renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = THREE.NoToneMapping;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  const canvas = renderer.domElement;
  canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block;";
  canvas.setAttribute("aria-hidden", "true");
  container.appendChild(canvas);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(opts.fov, 1, 0.1, 100);
  const material = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    vertexColors: true,
    metalness: 0,
    roughness: 0.7,
    clearcoat: 0.08,
    clearcoatRoughness: 0.6,
    shadowSide: THREE.BackSide,
  });
  const { geometries, size } = buildLogoGeometry();
  const logo = new THREE.Group();
  for (const g of geometries) {
    const mesh = new THREE.Mesh(g, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    logo.add(mesh);
  }
  const REST = new THREE.Euler(THREE.MathUtils.degToRad(-23), THREE.MathUtils.degToRad(24), 0);
  scene.add(logo);

  // Lighting: calibrated so a front face renders at its baked colour.
  const introActive = !reduceMotion?.matches;
  if (introActive) material.transparent = true;
  const introEnd = opts.introDelay + opts.introDuration;
  const key = new THREE.DirectionalLight(0xffffff, 2.2);
  key.position.set(-1.5, 4, 10);
  key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048);
  key.shadow.radius = 10;
  key.shadow.bias = -0.0003;
  key.shadow.camera.left = key.shadow.camera.bottom = -5;
  key.shadow.camera.right = key.shadow.camera.top = 5;
  key.shadow.camera.near = 1;
  key.shadow.camera.far = 30;
  const fillLight = new THREE.DirectionalLight(0xdfe6ff, 1.7);
  fillLight.position.set(-6, -3, 4);
  const sweep = new THREE.DirectionalLight(0xffffff, 0);
  sweep.position.set(-6, 2, 4);
  scene.add(key, fillLight, sweep, new THREE.AmbientLight(0xffffff, 1.15));

  // Shadow catcher: an invisible plane behind the mark for a soft drop shadow.
  const catcher = new THREE.Mesh(
    new THREE.PlaneGeometry(40, 40),
    new THREE.ShadowMaterial({ color: 0x02061a, opacity: 0.22, transparent: true }),
  );
  catcher.position.z = -1.1;
  catcher.receiveShadow = true;
  scene.add(catcher);

  function fit() {
    const w = container.clientWidth || 1;
    const h = container.clientHeight || 1;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, opts.maxPixelRatio));
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    const vFov = THREE.MathUtils.degToRad(camera.fov);
    const hFov = 2 * Math.atan(Math.tan(vFov / 2) * camera.aspect);
    const dW = size.x / opts.fill / 2 / Math.tan(hFov / 2);
    const dH = size.y / 0.78 / 2 / Math.tan(vFov / 2);
    camera.position.set(0, 0, Math.max(dW, dH));
    camera.lookAt(0, 0, 0);
  }
  fit();
  let running = false;
  const ro = new ResizeObserver(() => {
    fit();
    if (!running) renderOnce();
  });
  ro.observe(container);

  // Pointer parallax, driven from the whole viewport.
  const pointerTarget = new THREE.Vector2(0, 0);
  const pointerSmooth = new THREE.Vector2(0, 0);
  let parallaxEnabled = !!finePointer?.matches && !reduceMotion?.matches;
  function onPointerMove(e: PointerEvent) {
    if (!parallaxEnabled) return;
    const r = container.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const span = Math.max(window.innerWidth, window.innerHeight) * 0.6;
    pointerTarget.set(
      THREE.MathUtils.clamp((e.clientX - cx) / span, -1, 1),
      THREE.MathUtils.clamp((e.clientY - cy) / span, -1, 1),
    );
  }
  function onPointerLeave() {
    pointerTarget.set(0, 0);
  }
  window.addEventListener("pointermove", onPointerMove, { passive: true });
  document.documentElement.addEventListener("pointerleave", onPointerLeave);

  const clock = new THREE.Clock(false);
  let raf = 0;
  let visible = true;
  let last = 0;
  let sweepStart = introActive ? introEnd - opts.sweepEvery + 0.1 : -Infinity;
  let sweepSeed = 0;

  function update(t: number, dt: number) {
    const w1 = (2 * Math.PI) / opts.idlePeriod;
    const w2 = (2 * Math.PI) / (opts.idlePeriod * 0.71);
    const yaw = Math.sin(t * w1) * opts.idleYaw;
    const pitch = Math.sin(t * w2 + 1.3) * opts.idlePitch;
    const depth = Math.sin(t * w1 * 0.5 + 0.7) * opts.idleDepth;
    const k = 1 - Math.exp(-opts.parallaxDamping * dt);
    pointerSmooth.lerp(pointerTarget, k);
    const px = pointerSmooth.x * opts.parallaxMax;
    const py = pointerSmooth.y * opts.parallaxMax;

    // Entrance: rises, comes forward and un-tilts, fading in over the first third.
    let introPos = 0;
    let introRot = 0;
    if (introActive && t < introEnd) {
      const p = easeOutQuint((t - opts.introDelay) / opts.introDuration);
      introPos = 1 - p;
      introRot = 1 - p;
      material.opacity = THREE.MathUtils.clamp((t - opts.introDelay) / (opts.introDuration * 0.35), 0, 1);
    } else if (introActive && material.transparent) {
      material.transparent = false;
      material.opacity = 1;
    }
    logo.rotation.set(
      REST.x + THREE.MathUtils.degToRad(pitch + py * 0.8 - 6 * introRot),
      REST.y + THREE.MathUtils.degToRad(yaw + px - 7 * introRot),
      0,
    );
    logo.position.set(0, -0.4 * introPos, depth - 0.6 * introPos);

    // Occasional light sweep across the clearcoat.
    if (t - sweepStart > opts.sweepEvery + sweepSeed) {
      sweepStart = t;
      sweepSeed = Math.random() * 3;
    }
    const sp = (t - sweepStart) / opts.sweepDuration;
    if (sp >= 0 && sp <= 1) {
      sweep.position.set(THREE.MathUtils.lerp(-7, 7, easeInOut(sp)), 3.5, 5);
      sweep.intensity = bell(sp) * 0.55;
    } else {
      sweep.intensity = 0;
    }
  }

  function renderOnce() {
    logo.rotation.copy(REST);
    logo.position.set(0, 0, 0);
    material.transparent = false;
    material.opacity = 1;
    renderer.render(scene, camera);
  }

  function frame() {
    if (!running) return;
    raf = requestAnimationFrame(frame);
    const t = clock.getElapsedTime();
    const dt = Math.min(t - last, 0.05);
    last = t;
    update(t, dt);
    renderer.render(scene, camera);
  }
  function start() {
    if (running || !visible || reduceMotion?.matches) return;
    running = true;
    clock.start();
    last = clock.getElapsedTime();
    frame();
  }
  function stop() {
    running = false;
    cancelAnimationFrame(raf);
    clock.stop();
  }
  const io = new IntersectionObserver(
    ([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    },
    { threshold: 0.05 },
  );
  io.observe(container);
  function onVisibility() {
    if (document.hidden) stop();
    else start();
  }
  document.addEventListener("visibilitychange", onVisibility);
  function onMotionPref() {
    parallaxEnabled = !!finePointer?.matches && !reduceMotion?.matches;
    if (reduceMotion?.matches) {
      stop();
      renderOnce();
    } else {
      start();
    }
  }
  reduceMotion?.addEventListener?.("change", onMotionPref);

  // The entrance owns the first frame: the mark starts invisible and rises in.
  if (introActive) {
    material.opacity = 0;
    renderer.render(scene, camera);
    start();
  } else {
    renderOnce();
  }
  requestAnimationFrame(() => opts.onReady?.());

  return {
    destroy() {
      stop();
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibility);
      reduceMotion?.removeEventListener?.("change", onMotionPref);
      for (const g of geometries) g.dispose();
      catcher.geometry.dispose();
      catcher.material.dispose();
      material.dispose();
      renderer.dispose();
      canvas.remove();
    },
  };
}
