"use client";

import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "@/lib/theme-context";

const PALETTE = {
  light: { body: "#2b2620", accent: "#c2410c", glow: "#fb923c", ring: "#e7e1d8" },
  dark: { body: "#e7ded0", accent: "#fb923c", glow: "#fdba74", ring: "#352f26" },
};

function DevAvatar() {
  const { theme } = useTheme();
  const colors = PALETTE[theme];
  const group = useRef<THREE.Group>(null);
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      target.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: (event.clientY / window.innerHeight) * 2 - 1,
      };
    };
    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  useFrame((_, delta) => {
    if (!group.current) return;
    const damp = 1 - Math.pow(0.001, delta);
    group.current.rotation.y += (target.current.x * 0.35 - group.current.rotation.y) * damp;
    group.current.rotation.x += (target.current.y * -0.15 - group.current.rotation.x) * damp;
  });

  return (
    <group ref={group}>
      <Float speed={1.6} rotationIntensity={0.25} floatIntensity={0.7}>
        {/* head */}
        <RoundedBox args={[1, 1, 1]} radius={0.18} smoothness={4} position={[0, 0.75, 0]}>
          <meshStandardMaterial color={colors.body} roughness={0.55} metalness={0.1} />
        </RoundedBox>
        {/* face / visor */}
        <RoundedBox args={[0.62, 0.34, 0.05]} radius={0.08} position={[0, 0.78, 0.51]}>
          <meshStandardMaterial
            color={colors.glow}
            emissive={colors.glow}
            emissiveIntensity={1.1}
            roughness={0.3}
          />
        </RoundedBox>
        {/* body */}
        <RoundedBox args={[1.15, 1.05, 0.85]} radius={0.22} smoothness={4} position={[0, -0.45, 0]}>
          <meshStandardMaterial color={colors.body} roughness={0.6} metalness={0.08} />
        </RoundedBox>
        {/* chest badge */}
        <RoundedBox args={[0.4, 0.4, 0.06]} radius={0.1} position={[0, -0.35, 0.46]}>
          <meshStandardMaterial color={colors.accent} emissive={colors.accent} emissiveIntensity={0.6} />
        </RoundedBox>
        {/* arms */}
        <RoundedBox args={[0.28, 0.85, 0.28]} radius={0.12} position={[-0.78, -0.35, 0]} rotation={[0, 0, 0.12]}>
          <meshStandardMaterial color={colors.body} roughness={0.6} />
        </RoundedBox>
        <RoundedBox args={[0.28, 0.85, 0.28]} radius={0.12} position={[0.78, -0.35, 0]} rotation={[0, 0, -0.12]}>
          <meshStandardMaterial color={colors.body} roughness={0.6} />
        </RoundedBox>
        {/* floating laptop */}
        <group position={[0, -0.95, 0.75]} rotation={[-0.35, 0, 0]}>
          <RoundedBox args={[0.9, 0.06, 0.6]} radius={0.03}>
            <meshStandardMaterial color={colors.ring} roughness={0.4} />
          </RoundedBox>
          <RoundedBox args={[0.9, 0.55, 0.04]} radius={0.03} position={[0, 0.28, -0.28]} rotation={[-1.05, 0, 0]}>
            <meshStandardMaterial
              color={colors.accent}
              emissive={colors.accent}
              emissiveIntensity={0.5}
              roughness={0.3}
            />
          </RoundedBox>
        </group>
      </Float>
      {/* hover ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -1.35, 0]}>
        <torusGeometry args={[0.85, 0.03, 16, 64]} />
        <meshStandardMaterial color={colors.accent} emissive={colors.accent} emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

export default function Avatar3DScene() {
  const { theme } = useTheme();

  return (
    <Canvas
      camera={{ position: [0, 0.3, 4.2], fov: 38 }}
      dpr={[1, 1.75]}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={theme === "dark" ? 0.6 : 0.9} />
      <directionalLight position={[3, 4, 2]} intensity={1.2} />
      <directionalLight position={[-3, -1, -2]} intensity={0.35} />
      <directionalLight position={[0, -2, 3]} intensity={0.25} />
      <DevAvatar />
      <ContactShadows position={[0, -1.5, 0]} opacity={0.35} scale={4} blur={2.4} far={2} />
    </Canvas>
  );
}
