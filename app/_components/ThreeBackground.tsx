'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, PointMaterial, Points, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Floating particles
function Particles() {
  const count = 150;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, [count]);

  const ref = useRef<THREE.Points>(null);
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#3b82f6" size={0.06} sizeAttenuation={true} depthWrite={false} />
    </Points>
  );
}

// Interactive Cloud Node
function CoreNode() {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Auto-rotation
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.15;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
      
      // Interact with mouse (pointer is normalized -1 to +1)
      const targetX = (state.pointer.x * Math.PI) / 4;
      const targetY = (state.pointer.y * Math.PI) / 4;
      
      // Smooth interpolation towards mouse
      meshRef.current.rotation.y += 0.1 * (targetX - meshRef.current.rotation.y);
      meshRef.current.rotation.x += 0.1 * (targetY - meshRef.current.rotation.x);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <group ref={meshRef}>
        {/* Outer Wireframe Icosahedron */}
        <mesh>
          <icosahedronGeometry args={[2.2, 1]} />
          <meshStandardMaterial 
            color="#06b6d4" 
            wireframe={true} 
            emissive="#06b6d4"
            emissiveIntensity={2}
            transparent
            opacity={0.3}
          />
        </mesh>
        
        {/* Inner Distorting Core */}
        <Sphere args={[1.4, 64, 64]}>
          <MeshDistortMaterial 
            color="#0f172a"
            envMapIntensity={1}
            clearcoat={1}
            clearcoatRoughness={0.1}
            metalness={0.8}
            roughness={0.2}
            distort={0.4}
            speed={2}
            emissive="#3b82f6"
            emissiveIntensity={0.2}
          />
        </Sphere>
      </group>
    </Float>
  );
}

export default function ThreeBackground() {
  return (
    <div 
      style={{ 
        position: 'absolute', 
        inset: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 0 
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#3b82f6" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#8b5cf6" />
        
        <CoreNode />
        <Particles />
      </Canvas>
    </div>
  );
}
