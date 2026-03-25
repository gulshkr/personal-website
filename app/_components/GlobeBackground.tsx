'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

function Globe() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
      meshRef.current.rotation.x = 0.2; // slight tilt
    }
  });

  return (
    <Sphere ref={meshRef} args={[2.5, 32, 32]}>
      <meshStandardMaterial 
        color="#3b82f6" 
        wireframe={true} 
        transparent 
        opacity={0.12}
        emissive="#3b82f6"
        emissiveIntensity={0.8}
      />
    </Sphere>
  );
}

export default function GlobeBackground() {
  return (
    <div 
      style={{ 
        position: 'absolute', 
        inset: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 0, 
        pointerEvents: 'none',
        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)'
      }}
    >
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <Globe />
      </Canvas>
    </div>
  );
}
