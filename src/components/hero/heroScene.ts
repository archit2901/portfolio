import * as THREE from 'three';

/**
 * Hero 3D scene: a low-poly wireframe globe with surface "node" dots and
 * glowing arcs that periodically fly between random pairs of nodes.
 *
 * Lifecycle: call `initHeroScene(canvas)` once the canvas is in the viewport.
 * It returns a `cleanup()` function — call it on page leave / hot-reload.
 */
export function initHeroScene(canvas: HTMLCanvasElement): () => void {
  // ── Renderer ────────────────────────────────────────────────────────
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);

  // ── Scene + Camera ──────────────────────────────────────────────────
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  camera.position.set(0, 0, 3.4);

  // ── Globe group (everything rotates together) ──────────────────────
  const globe = new THREE.Group();
  scene.add(globe);

  // ── Wireframe sphere ────────────────────────────────────────────────
  const sphereGeom = new THREE.IcosahedronGeometry(1, 4);
  const wireGeom = new THREE.WireframeGeometry(sphereGeom);
  const wireMat = new THREE.LineBasicMaterial({
    color: 0x22d3ee,
    transparent: true,
    opacity: 0.22,
  });
  const wireframe = new THREE.LineSegments(wireGeom, wireMat);
  globe.add(wireframe);

  // Faint inner sphere fill so the wireframe reads as a globe, not just edges
  const fillMat = new THREE.MeshBasicMaterial({
    color: 0x0a0a0a,
    transparent: true,
    opacity: 0.55,
  });
  const fill = new THREE.Mesh(new THREE.SphereGeometry(0.995, 48, 32), fillMat);
  globe.add(fill);

  // ── Node dots scattered across the surface ─────────────────────────
  const NODE_COUNT = 64;
  const nodePositions = generateSurfacePoints(NODE_COUNT, 1.002);
  const nodeGeom = new THREE.BufferGeometry();
  nodeGeom.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(flatten(nodePositions), 3)
  );
  const nodeMat = new THREE.PointsMaterial({
    color: 0x67e8f9,
    size: 0.028,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.95,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const nodes = new THREE.Points(nodeGeom, nodeMat);
  globe.add(nodes);

  // ── Arc pool ────────────────────────────────────────────────────────
  // We pre-allocate a fixed number of line objects and reuse them. Each
  // active arc holds onto two surface points + an animation progress value.
  const MAX_ARCS = 14;
  const ARC_SEGMENTS = 48;
  type Arc = {
    line: THREE.Line;
    material: THREE.LineBasicMaterial;
    positions: Float32Array;
    geometry: THREE.BufferGeometry;
    start: THREE.Vector3;
    end: THREE.Vector3;
    control: THREE.Vector3;
    /** seconds since spawn */
    t: number;
    /** total lifetime in seconds */
    life: number;
    active: boolean;
  };

  const arcs: Arc[] = [];
  for (let i = 0; i < MAX_ARCS; i++) {
    const positions = new Float32Array(ARC_SEGMENTS * 3);
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setDrawRange(0, 0);
    const material = new THREE.LineBasicMaterial({
      color: 0x22d3ee,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const line = new THREE.Line(geometry, material);
    line.visible = false;
    globe.add(line);
    arcs.push({
      line,
      material,
      positions,
      geometry,
      start: new THREE.Vector3(),
      end: new THREE.Vector3(),
      control: new THREE.Vector3(),
      t: 0,
      life: 0,
      active: false,
    });
  }

  function spawnArc() {
    const slot = arcs.find((a) => !a.active);
    if (!slot) return;
    const a = nodePositions[Math.floor(Math.random() * nodePositions.length)];
    let b = nodePositions[Math.floor(Math.random() * nodePositions.length)];
    // Make sure endpoints aren't trivially close together
    let guard = 0;
    while (a.distanceTo(b) < 0.6 && guard++ < 8) {
      b = nodePositions[Math.floor(Math.random() * nodePositions.length)];
    }
    slot.start.copy(a);
    slot.end.copy(b);
    // Control point: midpoint pushed outward to give the arc an above-surface curve
    const mid = new THREE.Vector3().addVectors(a, b).multiplyScalar(0.5);
    const lift = 1.0 + 0.35 * a.distanceTo(b);
    slot.control.copy(mid.normalize().multiplyScalar(lift));
    slot.t = 0;
    slot.life = 1.5 + Math.random() * 0.8;
    slot.active = true;
    slot.line.visible = true;
  }

  function updateArc(arc: Arc, dt: number) {
    arc.t += dt;
    const p = Math.min(arc.t / arc.life, 1);
    // How many segments of the curve to draw (animated "shooting" effect)
    const headEase = easeOutCubic(Math.min(p * 1.6, 1));
    const tailEase = easeOutCubic(Math.max((p - 0.35) / 0.65, 0));
    const headIdx = Math.floor(headEase * (ARC_SEGMENTS - 1));
    const tailIdx = Math.floor(tailEase * (ARC_SEGMENTS - 1));
    const count = Math.max(0, headIdx - tailIdx + 1);

    if (count > 0) {
      // Recompute the visible portion of the bezier curve into the buffer
      const tmp = new THREE.Vector3();
      for (let i = 0; i <= count; i++) {
        const u = (tailIdx + i) / (ARC_SEGMENTS - 1);
        quadraticBezier(arc.start, arc.control, arc.end, u, tmp);
        const offset = i * 3;
        arc.positions[offset] = tmp.x;
        arc.positions[offset + 1] = tmp.y;
        arc.positions[offset + 2] = tmp.z;
      }
      arc.geometry.attributes.position.needsUpdate = true;
      arc.geometry.setDrawRange(0, count + 1);
    } else {
      arc.geometry.setDrawRange(0, 0);
    }

    // Fade in fast, fade out toward the end
    const fadeIn = Math.min(p / 0.15, 1);
    const fadeOut = 1 - Math.max((p - 0.7) / 0.3, 0);
    arc.material.opacity = 0.85 * fadeIn * fadeOut;

    if (p >= 1) {
      arc.active = false;
      arc.line.visible = false;
    }
  }

  // ── Cursor tilt ─────────────────────────────────────────────────────
  const targetRot = { x: 0, y: 0 };
  const currentRot = { x: 0, y: 0 };

  function onMove(e: PointerEvent) {
    if (e.pointerType !== 'mouse') return;
    const rect = canvas.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    targetRot.y = nx * 0.35;
    targetRot.x = -ny * 0.25;
  }
  window.addEventListener('pointermove', onMove);

  // ── Resize ──────────────────────────────────────────────────────────
  function resize() {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (w === 0 || h === 0) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  const ro = new ResizeObserver(resize);
  ro.observe(canvas);
  resize();

  // ── Animation loop ──────────────────────────────────────────────────
  let raf = 0;
  let last = performance.now();
  let nextSpawn = 0.3;

  function frame(now: number) {
    raf = requestAnimationFrame(frame);
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;

    // Auto-rotate the globe gently
    globe.rotation.y += dt * 0.08;

    // Cursor tilt: lerp current toward target, then apply as small offset
    currentRot.x += (targetRot.x - currentRot.x) * 0.045;
    currentRot.y += (targetRot.y - currentRot.y) * 0.045;
    globe.rotation.x = currentRot.x;
    // Add the cursor Y offset on top of the auto rotation
    // (we don't reset Y because auto-rotation drives it; we just nudge x.)

    // Arc lifecycle
    nextSpawn -= dt;
    if (nextSpawn <= 0) {
      spawnArc();
      nextSpawn = 0.55 + Math.random() * 0.9;
    }
    for (const arc of arcs) if (arc.active) updateArc(arc, dt);

    renderer.render(scene, camera);
  }
  raf = requestAnimationFrame(frame);

  // ── Cleanup ─────────────────────────────────────────────────────────
  return () => {
    cancelAnimationFrame(raf);
    ro.disconnect();
    window.removeEventListener('pointermove', onMove);
    for (const arc of arcs) {
      arc.geometry.dispose();
      arc.material.dispose();
    }
    nodeGeom.dispose();
    nodeMat.dispose();
    wireGeom.dispose();
    wireMat.dispose();
    sphereGeom.dispose();
    fillMat.dispose();
    fill.geometry.dispose();
    renderer.dispose();
  };
}

// ── helpers ───────────────────────────────────────────────────────────

/** Even-ish distribution of points on a sphere via Fibonacci lattice. */
function generateSurfacePoints(count: number, radius: number): THREE.Vector3[] {
  const pts: THREE.Vector3[] = [];
  const phi = Math.PI * (3 - Math.sqrt(5)); // golden angle
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = phi * i;
    const x = Math.cos(theta) * r;
    const z = Math.sin(theta) * r;
    pts.push(new THREE.Vector3(x * radius, y * radius, z * radius));
  }
  return pts;
}

function flatten(pts: THREE.Vector3[]): number[] {
  const out: number[] = [];
  for (const p of pts) {
    out.push(p.x, p.y, p.z);
  }
  return out;
}

function quadraticBezier(
  p0: THREE.Vector3,
  p1: THREE.Vector3,
  p2: THREE.Vector3,
  t: number,
  out: THREE.Vector3
) {
  const it = 1 - t;
  out.x = it * it * p0.x + 2 * it * t * p1.x + t * t * p2.x;
  out.y = it * it * p0.y + 2 * it * t * p1.y + t * t * p2.y;
  out.z = it * it * p0.z + 2 * it * t * p1.z + t * t * p2.z;
}

function easeOutCubic(x: number): number {
  return 1 - Math.pow(1 - x, 3);
}
