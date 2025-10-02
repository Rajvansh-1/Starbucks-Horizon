// src/components/CoffeeBean.jsx
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function CoffeeBean(props) {
  const { nodes, materials } = useGLTF('/models/coffee_bean.glb');
  
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.rotation.x += delta * 0.1;
    }
  });

  // This robustly finds the first available mesh and its material in the model.
  let geometry, material;
  for (const nodeKey in nodes) {
    if (nodes[nodeKey].isMesh) {
      geometry = nodes[nodeKey].geometry;
      material = materials[nodes[nodeKey].material.name];
      break;
    }
  }

  if (!geometry || !material) {
    return null;
  }

  return (
    <mesh
      {...props}
      ref={meshRef}
      geometry={geometry}
      material={material}
      // --- FIX IS HERE: Reducing scale to a much smaller size ---
      scale={0.5}
      position={[0, 0, 0]}
    />
  );
}

useGLTF.preload('/models/coffee_bean.glb');