import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, Torus, Stars } from "@react-three/drei";

function MovingShape({ position, color, geometry: Geometry }) {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.x += 0.005;
    meshRef.current.rotation.y += 0.006;
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <Geometry ref={meshRef} position={position} args={[1, 0.4, 100]}>
        <meshStandardMaterial
          color={color}
          roughness={0.1}
          metalness={0.8}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </Geometry>
    </Float>
  );
}

const ThreeBackground = () => {
  return (
    <div className="absolute inset-0 z-0 bg-slate-900 pointer-events-none w-full h-full overflow-hidden">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#4f46e5" />
        <pointLight
          position={[-10, -10, -10]}
          intensity={0.5}
          color="#ec4899"
        />

        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />

        <MovingShape position={[-3, 2, -5]} color="#6366f1" geometry={Torus} />
        <MovingShape position={[4, -1, -8]} color="#a855f7" geometry={Sphere} />
        <MovingShape
          position={[-5, -4, -10]}
          color="#3b82f6"
          geometry={Torus}
        />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
