import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { rooms } from '../data/portfolio.js';

const SPACING = 14;
const ACCENT = 0x2dd4bf;
const VIOLET = 0x6b7cff;
const BG = 0x03060c;

export default function Walkthrough() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const roomCount = rooms.length;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(BG, 26, 85);

    const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 300);
    camera.position.set(0, 7, 22);

    // Floor grid
    const grid = new THREE.GridHelper(260, 130, ACCENT, 0x0f2f35);
    grid.position.y = -2.6;
    grid.material.transparent = true;
    grid.material.opacity = 0.35;
    scene.add(grid);

    // Shared materials
    const teal = new THREE.LineBasicMaterial({ color: ACCENT, transparent: true, opacity: 0.85 });
    const violet = new THREE.LineBasicMaterial({ color: VIOLET, transparent: true, opacity: 0.85 });
    const plateMat = new THREE.MeshBasicMaterial({
      color: ACCENT,
      transparent: true,
      opacity: 0.05,
      side: THREE.DoubleSide,
    });
    const nodeMat = new THREE.MeshBasicMaterial({ color: ACCENT });

    // Floor plan: one room per section
    const plan = new THREE.Group();
    scene.add(plan);

    for (let i = 0; i < roomCount; i++) {
      const x = i * SPACING;
      const mat = i % 2 ? violet : teal;

      const shell = new THREE.LineSegments(
        new THREE.EdgesGeometry(new THREE.BoxGeometry(10, 4, 8)),
        mat
      );
      shell.position.set(x, -0.6, 0);
      plan.add(shell);

      const plate = new THREE.Mesh(new THREE.PlaneGeometry(10, 8), plateMat);
      plate.rotation.x = -Math.PI / 2;
      plate.position.set(x, -2.55, 0);
      plan.add(plate);

      const partition = new THREE.LineSegments(
        new THREE.EdgesGeometry(new THREE.BoxGeometry(0.08, 4, 8)),
        mat
      );
      partition.position.set(x + 1.8, -0.6, 0);
      plan.add(partition);

      const table = new THREE.LineSegments(
        new THREE.EdgesGeometry(new THREE.BoxGeometry(2.4, 0.9, 1.4)),
        mat
      );
      table.position.set(x - 2.2, -2.1, -1.8);
      plan.add(table);

      const node = new THREE.Mesh(new THREE.SphereGeometry(0.18, 12, 12), nodeMat);
      node.position.set(x, 1.8, 0);
      plan.add(node);
    }

    // Corridors between rooms
    for (let c = 0; c < roomCount - 1; c++) {
      const corridor = new THREE.LineSegments(
        new THREE.EdgesGeometry(new THREE.BoxGeometry(4, 0.2, 2)),
        teal
      );
      corridor.position.set(c * SPACING + 7, -2.6, 0);
      plan.add(corridor);
    }

    // Dust particles
    const N = 420;
    const positions = new Float32Array(N * 3);
    for (let p = 0; p < N; p++) {
      positions[p * 3] = Math.random() * roomCount * SPACING - 14;
      positions[p * 3 + 1] = Math.random() * 9 - 3;
      positions[p * 3 + 2] = (Math.random() - 0.5) * 36;
    }
    const pointsGeo = new THREE.BufferGeometry();
    pointsGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const pointsMat = new THREE.PointsMaterial({
      color: VIOLET,
      size: 0.07,
      transparent: true,
      opacity: 0.7,
    });
    const points = new THREE.Points(pointsGeo, pointsMat);
    scene.add(points);

    let mx = 0;
    let my = 0;
    let lookX = 0;
    let raf = 0;

    const onPointer = (e) => {
      mx = e.clientX / window.innerWidth - 0.5;
      my = e.clientY / window.innerHeight - 0.5;
    };

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };

    // 0 at the top of the page, 1 at the bottom
    const progress = () => {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      return Math.min(1, window.scrollY / max);
    };

    window.addEventListener('pointermove', onPointer, { passive: true });
    window.addEventListener('resize', resize);
    resize();

    const tick = () => {
      const t = performance.now() * 0.001;
      const cx = progress() * (roomCount - 1) * SPACING;

      camera.position.x += (cx + mx * 2.5 - camera.position.x) * 0.07;
      camera.position.y += (7 - my * 2.5 - camera.position.y) * 0.07;
      camera.position.z += (22 - camera.position.z) * 0.07;
      lookX += (cx - lookX) * 0.07;
      camera.lookAt(lookX, -0.6, 0);

      if (!reduce) {
        points.rotation.y = t * 0.02;
        plan.rotation.y = Math.sin(t * 0.3) * 0.015;
      }

      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    tick();

    // Cleanup: React StrictMode runs effects twice in dev, so this must be complete
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onPointer);
      window.removeEventListener('resize', resize);

      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
      });
      [teal, violet, plateMat, nodeMat, pointsMat, grid.material].forEach((m) => m.dispose());
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="scene" aria-hidden="true" />;
}