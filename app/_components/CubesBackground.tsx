'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function FloatingCubes() {
  const count = 40;
  const meshRef = useRef<THREE.InstancedMesh>(null);
  
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  const cubes = useMemo(() => {
    return Array.from({ length: count }, () => ({
      position: [
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 10 - 2
      ],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
      speed: Math.random() * 0.3 + 0.1
    }));
  }, [count]);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    
    cubes.forEach((cube, i) => {
      cube.rotation[0] += delta * cube.speed;
      cube.rotation[1] += delta * cube.speed;
      cube.position[1] += delta * (cube.speed * 0.5); // float up
      
      // reset to bottom if it floats too high
      if (cube.position[1] > 8) {
        cube.position[1] = -8;
      }
      
      dummy.position.set(cube.position[0], cube.position[1], cube.position[2]);
      dummy.rotation.set(cube.rotation[0], cube.rotation[1], cube.rotation[2]);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <boxGeometry args={[0.6, 0.6, 0.6]} />
      <meshStandardMaterial 
        color="#8b5cf6" 
        wireframe 
        transparent 
        opacity={0.2} 
        emissive="#8b5cf6" 
        emissiveIntensity={0.8} 
      />
    </instancedMesh>
  );
}

export default function CubesBackground() {
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
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <FloatingCubes />
      </Canvas>
    </div>
  );
}
