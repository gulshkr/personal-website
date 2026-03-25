'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Torus } from '@react-three/drei';
import * as THREE from 'three';

function ExpandingRings() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x -= delta * 0.1;
      groupRef.current.rotation.y -= delta * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {[0, 1, 2, 3].map((i) => (
        <Torus 
          key={i} 
          args={[2 + i * 0.8, 0.015, 16, 100]} 
          rotation={[Math.PI / (i + 1), 0, i]}
        >
          <meshBasicMaterial color="#06b6d4" transparent opacity={0.3 - i * 0.06} />
        </Torus>
      ))}
    </group>
  );
}

export default function RingsBackground() {
  return (
    <div 
      style={{ 
        position: 'absolute', 
        inset: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 0, 
        pointerEvents: 'none', 
        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)'
      }}
    >
      <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
        <ExpandingRings />
      </Canvas>
    </div>
  );
}
