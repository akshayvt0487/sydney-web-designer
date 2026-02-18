"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function PortfolioHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 500, 0.1, 1000);
    camera.position.z = 20;

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, 500);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Floating grid dots
    const count = 200;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 60;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
      // Alternate orange and white particles
      if (i % 3 === 0) {
        colors[i * 3] = 0.961; colors[i * 3 + 1] = 0.620; colors[i * 3 + 2] = 0.043; // orange
      } else {
        colors[i * 3] = 1; colors[i * 3 + 1] = 1; colors[i * 3 + 2] = 1; // white
      }
    }
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({ size: 0.15, vertexColors: true, transparent: true, opacity: 0.7 });
    const points = new THREE.Points(geo, mat);
    scene.add(points);

    // Wireframe torus
    const torusGeo = new THREE.TorusGeometry(6, 1.5, 12, 60);
    const torusMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b, wireframe: true, transparent: true, opacity: 0.08 });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    torus.position.x = 15;
    torus.position.y = -2;
    scene.add(torus);

    const torus2 = new THREE.Mesh(
      new THREE.TorusGeometry(4, 1, 8, 40),
      new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, transparent: true, opacity: 0.05 })
    );
    torus2.position.x = -14;
    torus2.position.y = 2;
    scene.add(torus2);

    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove);

    const onResize = () => {
      camera.aspect = window.innerWidth / 500;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, 500);
    };
    window.addEventListener("resize", onResize);

    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      points.rotation.y += 0.0008;
      torus.rotation.x += 0.003;
      torus.rotation.y += 0.002;
      torus2.rotation.x -= 0.002;
      torus2.rotation.z += 0.003;
      camera.position.x += (mouseX * 2 - camera.position.x) * 0.03;
      camera.position.y += (mouseY * 1 - camera.position.y) * 0.03;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      geo.dispose();
      mat.dispose();
      torusGeo.dispose();
      torusMat.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
