"use client";

import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";

/**
 * The DeepWeaver orb — ported from the supplied hero illustration.
 * A bright nucleus inside a glass shell with a fresnel rim, two chrome rings
 * with a blue-violet cast, three hairline orbits carrying glowing electrons,
 * a studio environment the chrome reflects, and a light bloom so the
 * highlights breathe. Everything is procedural; no textures, no meshes.
 */

const GLOW = "#8fa6ff";

/** Studio environment: a graded dome plus four soft light cards, baked with PMREM. */
function StudioEnvironment() {
  const get = useThree((s) => s.get);
  useEffect(() => {
    const { gl, scene } = get();
    const env = new THREE.Scene();
    const dome = new THREE.Mesh(
      new THREE.SphereGeometry(40, 32, 32),
      new THREE.ShaderMaterial({
        side: THREE.BackSide,
        toneMapped: false,
        vertexShader: `varying vec3 vW; void main(){ vW = (modelMatrix*vec4(position,1.)).xyz; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }`,
        fragmentShader: `varying vec3 vW;
          void main(){
            float y = normalize(vW).y;
            vec3 bot = vec3(0.010,0.012,0.045);
            vec3 mid = vec3(0.045,0.060,0.220);
            vec3 top = vec3(0.180,0.240,0.620);
            vec3 c = mix(bot, mid, smoothstep(-1.,0.1,y));
            c = mix(c, top, smoothstep(0.1,1.,y));
            gl_FragColor = vec4(c,1.);
          }`,
      }),
    );
    env.add(dome);
    const card = (w: number, h: number, col: number, intensity: number, pos: [number, number, number]) => {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: col, toneMapped: false }));
      m.material.color.multiplyScalar(intensity);
      m.position.set(...pos);
      m.lookAt(0, 0, 0);
      env.add(m);
    };
    card(14, 6, 0xdfe8ff, 2.4, [-14, 14, 8]);
    card(10, 18, 0xb48cff, 1.8, [18, -6, 4]);
    card(20, 4, 0x5a72ff, 1.2, [0, -2, -18]);
    card(6, 6, 0xffffff, 3.0, [10, 16, 6]);
    const pmrem = new THREE.PMREMGenerator(gl);
    const tex = pmrem.fromScene(env, 0.04).texture;
    pmrem.dispose();
    scene.environment = tex;
    return () => {
      scene.environment = null;
      tex.dispose();
      env.traverse((o) => {
        if (o instanceof THREE.Mesh) {
          o.geometry.dispose();
          (o.material as THREE.Material).dispose();
        }
      });
    };
  }, [get]);
  return null;
}

function Core() {
  const fresnel = useMemo(
    () =>
      new THREE.ShaderMaterial({
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        toneMapped: false,
        uniforms: { c: { value: new THREE.Color(GLOW) } },
        vertexShader: `varying vec3 vN, vV; void main(){ vec4 mv = modelViewMatrix*vec4(position,1.); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix*mv; }`,
        fragmentShader: `uniform vec3 c; varying vec3 vN, vV; void main(){ float f = pow(1.0-max(dot(vN,vV),0.0), 2.6); gl_FragColor = vec4(c*f*1.6, f); }`,
      }),
    [],
  );
  const nucleusColor = useMemo(() => new THREE.Color(0xb9c6ff).multiplyScalar(2.2), []);
  return (
    <group>
      <mesh>
        <sphereGeometry args={[0.62, 64, 64]} />
        <meshBasicMaterial color={nucleusColor} />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.0, 96, 96]} />
        <meshPhysicalMaterial
          color={0x9db8ff}
          transparent
          opacity={0.5}
          roughness={0.04}
          metalness={0}
          clearcoat={1}
          clearcoatRoughness={0.05}
          envMapIntensity={1.6}
          depthWrite={false}
        />
      </mesh>
      <mesh material={fresnel}>
        <sphereGeometry args={[1.01, 96, 96]} />
      </mesh>
    </group>
  );
}

type RingSpec = { r: number; tube: number; rot: [number, number, number]; col: number; spd: [number, number, number] };
const RINGS: RingSpec[] = [
  { r: 1.9, tube: 0.175, rot: [0.42, 0.52, 0.18], col: 0x9aaefc, spd: [0.002, 0.0014, 0.0004] },
  { r: 1.72, tube: 0.15, rot: [1.42, 0.1, 0.7], col: 0xa393ff, spd: [0.0012, 0.0022, 0.0008] },
];

function Rings() {
  const refs = useRef<THREE.Mesh[]>([]);
  useFrame((_, delta) => {
    const k = delta * 60;
    refs.current.forEach((m, i) => {
      if (!m) return;
      const s = RINGS[i].spd;
      m.rotation.x += s[0] * k;
      m.rotation.y += s[1] * k;
      m.rotation.z += s[2] * k;
    });
  });
  return (
    <>
      {RINGS.map((d, i) => (
        <mesh
          key={i}
          ref={(el) => {
            if (el) refs.current[i] = el;
          }}
          rotation={d.rot}
        >
          <torusGeometry args={[d.r, d.tube, 64, 256]} />
          <meshPhysicalMaterial color={d.col} metalness={1} roughness={0.1} clearcoat={1} clearcoatRoughness={0.06} envMapIntensity={1.5} />
        </mesh>
      ))}
    </>
  );
}

type OrbitSpec = { r: number; rot: [number, number, number]; phase: number; spd: number };
const ORBITS: OrbitSpec[] = [
  { r: 2.55, rot: [1.25, 0.3, 0.45], phase: 0.4, spd: 0.0075 },
  { r: 2.85, rot: [0.55, -0.85, 1.05], phase: 2.5, spd: -0.0055 },
  { r: 2.35, rot: [1.9, 0.95, -0.3], phase: 4.7, spd: 0.0065 },
];

function Orbits() {
  const electrons = useRef<THREE.Mesh[]>([]);
  const t = useRef(0);
  const lineColor = useMemo(() => new THREE.Color(GLOW).multiplyScalar(0.9), []);
  useFrame((_, delta) => {
    t.current += delta * 60;
    electrons.current.forEach((e, i) => {
      if (!e) return;
      const o = ORBITS[i];
      const a = o.phase + t.current * o.spd;
      e.position.set(Math.cos(a) * o.r, Math.sin(a) * o.r, 0);
    });
  });
  return (
    <>
      {ORBITS.map((o, i) => (
        <group key={i} rotation={o.rot}>
          <mesh>
            <torusGeometry args={[o.r, 0.008, 6, 320]} />
            <meshBasicMaterial color={lineColor} transparent opacity={0.75} />
          </mesh>
          <mesh
            ref={(el) => {
              if (el) electrons.current[i] = el;
            }}
          >
            <sphereGeometry args={[0.115, 48, 48]} />
            <meshPhysicalMaterial color={0x3f55ff} emissive={0x8fa0ff} emissiveIntensity={2.2} roughness={0.05} metalness={0.1} clearcoat={1} envMapIntensity={1} />
          </mesh>
        </group>
      ))}
    </>
  );
}

/**
 * Bloom: scene → bright pass → two-iteration separable blur at half res →
 * composite with manual gamma and an alpha that lets the glow bleed past
 * the object's silhouette onto the page. Takes over the render loop.
 */
function createPipeline() {
  const opts: THREE.RenderTargetOptions = {
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
    format: THREE.RGBAFormat,
    type: THREE.HalfFloatType,
    colorSpace: THREE.LinearSRGBColorSpace,
  };
  const rtScene = new THREE.WebGLRenderTarget(2, 2, opts);
  const rtA = new THREE.WebGLRenderTarget(2, 2, opts);
  const rtB = new THREE.WebGLRenderTarget(2, 2, opts);
  const quad = (frag: string, uniforms: Record<string, THREE.IUniform>) => {
    const m = new THREE.ShaderMaterial({
      uniforms,
      toneMapped: false,
      depthTest: false,
      depthWrite: false,
      transparent: true,
      vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy,0.,1.); }`,
      fragmentShader: frag,
    });
    const sc = new THREE.Scene();
    sc.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), m));
    return { scene: sc, m };
  };
  const ortho = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const bright = quad(
    `uniform sampler2D t; uniform float th; varying vec2 vUv;
     void main(){ vec4 c = texture2D(t,vUv); float l = dot(c.rgb, vec3(.2126,.7152,.0722));
       float m = smoothstep(th, th+0.45, l); gl_FragColor = vec4(c.rgb*m, 1.); }`,
    { t: { value: null }, th: { value: 0.62 } },
  );
  const blur = quad(
    `uniform sampler2D t; uniform vec2 d; varying vec2 vUv;
     void main(){ vec3 s = texture2D(t,vUv).rgb*0.227;
       s += (texture2D(t,vUv+d*1.384).rgb + texture2D(t,vUv-d*1.384).rgb)*0.316;
       s += (texture2D(t,vUv+d*3.230).rgb + texture2D(t,vUv-d*3.230).rgb)*0.070;
       gl_FragColor = vec4(s,1.); }`,
    { t: { value: null }, d: { value: new THREE.Vector2() } },
  );
  const comp = quad(
    `uniform sampler2D base; uniform sampler2D bloom; uniform float k; varying vec2 vUv;
     void main(){ vec4 a = texture2D(base,vUv); vec3 b = texture2D(bloom,vUv).rgb*k;
       vec3 col = a.rgb + b;
       float alpha = clamp(a.a + max(b.r,max(b.g,b.b))*1.4, 0., 1.);
       col = pow(col, vec3(1./2.2));
       gl_FragColor = vec4(col, alpha); }`,
    { base: { value: null }, bloom: { value: null }, k: { value: 0.9 } },
  );
  return { rtScene, rtA, rtB, bright, blur, comp, ortho, w: 0, h: 0 };
}

function BloomPipeline() {
  const gl = useThree((s) => s.gl);
  const scene = useThree((s) => s.scene);
  const camera = useThree((s) => s.camera);
  const size = useThree((s) => s.size);

  // Imperative GPU resources live in a lazily initialised ref, not state.
  const pipe = useRef<ReturnType<typeof createPipeline> | null>(null);
  if (pipe.current === null) pipe.current = createPipeline();

  useEffect(() => {
    const p = pipe.current;
    return () => {
      p?.rtScene.dispose();
      p?.rtA.dispose();
      p?.rtB.dispose();
    };
  }, []);

  useFrame(() => {
    const p = pipe.current;
    if (!p) return;
    const pr = gl.getPixelRatio();
    const w = Math.max(2, Math.floor(size.width * pr));
    const h = Math.max(2, Math.floor(size.height * pr));
    if (p.w !== w || p.h !== h) {
      p.w = w;
      p.h = h;
      p.rtScene.setSize(w, h);
      p.rtA.setSize(Math.floor(w / 2), Math.floor(h / 2));
      p.rtB.setSize(Math.floor(w / 2), Math.floor(h / 2));
    }
    gl.setRenderTarget(p.rtScene);
    gl.clear();
    gl.render(scene, camera);
    p.bright.m.uniforms.t.value = p.rtScene.texture;
    gl.setRenderTarget(p.rtA);
    gl.clear();
    gl.render(p.bright.scene, p.ortho);
    for (let i = 0; i < 2; i++) {
      p.blur.m.uniforms.t.value = p.rtA.texture;
      p.blur.m.uniforms.d.value.set(1.6 / p.rtA.width, 0);
      gl.setRenderTarget(p.rtB);
      gl.clear();
      gl.render(p.blur.scene, p.ortho);
      p.blur.m.uniforms.t.value = p.rtB.texture;
      p.blur.m.uniforms.d.value.set(0, 1.6 / p.rtA.height);
      gl.setRenderTarget(p.rtA);
      gl.clear();
      gl.render(p.blur.scene, p.ortho);
    }
    p.comp.m.uniforms.base.value = p.rtScene.texture;
    p.comp.m.uniforms.bloom.value = p.rtA.texture;
    gl.setRenderTarget(null);
    gl.clear();
    gl.render(p.comp.scene, p.ortho);
  }, 1);

  return null;
}

export default function OrbObject() {
  const root = useRef<THREE.Group>(null);
  const t = useRef(0);
  useFrame(({ pointer }, delta) => {
    const g = root.current;
    if (!g) return;
    t.current += delta * 60;
    const tx = pointer.x * 0.15;
    const ty = -pointer.y * 0.1;
    g.rotation.y += (tx - g.rotation.y) * 0.05;
    g.rotation.x += (ty - g.rotation.x) * 0.05;
    g.position.y = Math.sin(t.current * 0.009) * 0.05;
  });
  return (
    <>
      <StudioEnvironment />
      <directionalLight color={0xe6edff} intensity={1.6} position={[-5, 7, 6]} />
      <pointLight color={0xb388ff} intensity={3} distance={40} decay={2} position={[6, -4, 3]} />
      <pointLight color={0x5f7cff} intensity={1.4} distance={40} decay={2} position={[-2, -5, -5]} />
      <group ref={root} scale={0.74}>
        <Core />
        <Rings />
        <Orbits />
      </group>
      <BloomPipeline />
    </>
  );
}
