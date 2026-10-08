import { useEffect, useRef } from "react";
import * as THREE from "three";

// Full-page interactive background: particles that react to the mouse,
// wireframe shapes, and a camera that travels down the scene as you scroll.
export default function Background() {
  const cv = useRef(null);
  const glow = useRef(null);

  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;
    const R = new THREE.WebGLRenderer({ canvas: cv.current, antialias: true, alpha: true });
    R.setPixelRatio(Math.min(devicePixelRatio, 2));
    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(60, 1, 0.1, 200);
    cam.position.z = 28;
    const DEPTH = 70, N = 2400;

    const base = new Float32Array(N * 3), pos = new Float32Array(N * 3), col = new Float32Array(N * 3), off = new Float32Array(N * 3);
    const c1 = new THREE.Color("#8B5CF6"), c2 = new THREE.Color("#A78BFA"), c3 = new THREE.Color("#F4F4F5");
    for (let i = 0; i < N; i++) {
      base[i * 3] = (Math.random() - 0.5) * 90;
      base[i * 3 + 1] = -Math.random() * DEPTH + 12;
      base[i * 3 + 2] = (Math.random() - 0.5) * 50 - 5;
      const r = Math.random(), c = r < 0.5 ? c1 : r < 0.8 ? c2 : c3;
      col.set([c.r, c.g, c.b], i * 3);
    }
    pos.set(base);
    const pg = new THREE.BufferGeometry();
    pg.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    pg.setAttribute("color", new THREE.BufferAttribute(col, 3));
    const pm = new THREE.PointsMaterial({ size: 0.22, vertexColors: true, transparent: true, opacity: 0.85, depthWrite: false, blending: THREE.AdditiveBlending });
    const pts = new THREE.Points(pg, pm);
    scene.add(pts);

    const shapes = [];
    const mk = (g, c, y, x) => {
      const m = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ color: c, wireframe: true, transparent: true, opacity: 0.55 }));
      m.position.set(x, y, 0); scene.add(m); shapes.push(m); return m;
    };
    const knot = mk(new THREE.TorusKnotGeometry(5, 1.4, 160, 18), 0x8b5cf6, 0, 9);
    mk(new THREE.IcosahedronGeometry(5.5, 1), 0xa78bfa, -24, -10);
    mk(new THREE.TorusGeometry(5.5, 1.6, 16, 60), 0x8b5cf6, -44, 10);
    mk(new THREE.OctahedronGeometry(5, 0), 0xa78bfa, -62, -9);

    const m = { x: 0, y: 0, down: false };
    const onMove = (e) => {
      m.x = (e.clientX / innerWidth) * 2 - 1;
      m.y = -((e.clientY / innerHeight) * 2 - 1);
      glow.current.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
    };
    const onDown = () => (m.down = true), onUp = () => (m.down = false);
    let scroll = 0, target = 0;
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - innerHeight;
      target = h > 0 ? scrollY / h : 0;
    };
    const resize = () => {
      R.setSize(innerWidth, innerHeight, false);
      cam.aspect = innerWidth / innerHeight;
      cam.updateProjectionMatrix();
    };
    addEventListener("pointermove", onMove);
    addEventListener("pointerdown", onDown);
    addEventListener("pointerup", onUp);
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", resize);
    resize(); onScroll();

    const ray = new THREE.Vector3(), dir = new THREE.Vector3(), clock = new THREE.Clock();
    let raf;
    const loop = () => {
      const t = clock.getElapsedTime() * (reduce ? 0.15 : 1);
      scroll += (target - scroll) * 0.06;
      cam.position.y += (-scroll * (DEPTH - 18) + 4 - cam.position.y) * 0.1;
      cam.position.x += (m.x * 3 - cam.position.x) * 0.04;
      cam.rotation.x = m.y * 0.04;
      cam.rotation.y = -m.x * 0.05;

      // mouse position projected onto the z=0 plane
      ray.set(m.x, m.y, 0.5).unproject(cam);
      dir.copy(ray).sub(cam.position).normalize();
      const k = -cam.position.z / dir.z;
      const wx = cam.position.x + dir.x * k, wy = cam.position.y + dir.y * k;
      const rad = m.down ? 13 : 7, str = m.down ? -1.4 : 1.6; // hold to pull particles in

      for (let i = 0; i < N; i++) {
        const j = i * 3, dx = pos[j] - wx, dy = pos[j + 1] - wy, d2 = dx * dx + dy * dy;
        if (d2 < rad * rad && d2 > 0.01) {
          const d = Math.sqrt(d2), f = (1 - d / rad) * str;
          off[j] += (dx / d) * f; off[j + 1] += (dy / d) * f;
        }
        off[j] *= 0.93; off[j + 1] *= 0.93;
        pos[j] = base[j] + off[j] + Math.sin(t * 0.4 + i) * 0.25;
        pos[j + 1] = base[j + 1] + off[j + 1] + Math.cos(t * 0.35 + i * 1.3) * 0.25;
        pos[j + 2] = base[j + 2];
      }
      pg.attributes.position.needsUpdate = true;
      pts.rotation.y = t * 0.02 + m.x * 0.1;

      shapes.forEach((s, i) => {
        s.rotation.x = t * 0.25 * (i % 2 ? -1 : 1) + m.y * 0.5;
        s.rotation.y = t * 0.32 + m.x * 0.6 + scroll * 6;
        s.material.opacity = Math.max(0.12, 0.7 - Math.abs(s.position.y - cam.position.y) * 0.018);
        s.scale.setScalar(1 + Math.sin(t + i) * 0.04);
      });
      knot.material.color.lerpColors(c1, c2, scroll);
      R.render(scene, cam);
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("pointermove", onMove);
      removeEventListener("pointerdown", onDown);
      removeEventListener("pointerup", onUp);
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", resize);
      pg.dispose(); pm.dispose();
      shapes.forEach((s) => { s.geometry.dispose(); s.material.dispose(); });
      R.dispose();
    };
  }, []);

  return (
    <>
      <canvas ref={cv} id="bg" aria-hidden="true" />
      <div ref={glow} id="glow" aria-hidden="true" />
    </>
  );
}
