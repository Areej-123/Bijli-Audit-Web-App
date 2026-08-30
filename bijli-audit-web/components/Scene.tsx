"use client";
import { Canvas } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 8] }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[1.6, 100, 200]} position={[-2.5, 1, -2]}>
          <MeshDistortMaterial color="#14274E" attach="material" distort={0.4} speed={1.5} />
        </Sphere>
      </Float>

      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
        <Sphere args={[1, 100, 200]} position={[2.5, -1, -1]}>
          <MeshDistortMaterial color="#F2A93B" attach="material" distort={0.5} speed={2} />
        </Sphere>
      </Float>
    </Canvas>
  );
}