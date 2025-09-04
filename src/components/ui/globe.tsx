"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";

interface GlobeProps {
  className?: string;
  data?: Array<{
    lat: number;
    lng: number;
    size: number;
    color: string;
  }>;
}

function GlobeComponent({ data = [] }: { data: GlobeProps["data"] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group>
      {/* Main Globe */}
      <Sphere
        ref={meshRef}
        args={[2, 64, 64]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial
          color={hovered ? "#22c55e" : "#15803d"}
          wireframe={false}
          transparent
          opacity={0.8}
        />
      </Sphere>
      
      {/* Globe wireframe overlay */}
      <Sphere args={[2.01, 32, 32]}>
        <meshBasicMaterial
          color="#22c55e"
          wireframe={true}
          transparent
          opacity={0.3}
        />
      </Sphere>

      {/* Data points */}
      {data.map((point, index) => {
        const phi = (90 - point.lat) * (Math.PI / 180);
        const theta = (point.lng + 180) * (Math.PI / 180);
        
        const x = -(2.1 * Math.sin(phi) * Math.cos(theta));
        const z = 2.1 * Math.sin(phi) * Math.sin(theta);
        const y = 2.1 * Math.cos(phi);

        return (
          <Sphere key={index} args={[point.size, 8, 8]} position={[x, y, z]}>
            <meshBasicMaterial color={point.color} />
          </Sphere>
        );
      })}
    </group>
  );
}

export function Globe({ className, data }: GlobeProps) {
  const conservationPoints = data || [
    { lat: 28.7041, lng: 77.1025, size: 0.1, color: "#22c55e" }, // Delhi
    { lat: -3.4653, lng: -62.2159, size: 0.12, color: "#16a34a" }, // Amazon
    { lat: -1.9403, lng: 29.8739, size: 0.08, color: "#15803d" }, // Rwanda
    { lat: 0.7893, lng: 113.9213, size: 0.1, color: "#22c55e" }, // Borneo
    { lat: 78.2232, lng: 15.6267, size: 0.09, color: "#16a34a" }, // Svalbard
    { lat: 9.7489, lng: -83.7534, size: 0.07, color: "#15803d" }, // Costa Rica
    { lat: -26.2041, lng: 28.0473, size: 0.11, color: "#22c55e" }, // South Africa
    { lat: 61.2181, lng: -149.9003, size: 0.08, color: "#16a34a" }, // Alaska
  ];

  return (
    <div className={`w-full h-96 ${className}`}>
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <GlobeComponent data={conservationPoints} />
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          enableRotate={true}
          autoRotate={false}
          maxDistance={10}
          minDistance={3}
        />
      </Canvas>
    </div>
  );
}
