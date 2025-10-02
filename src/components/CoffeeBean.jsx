// src/components/CoffeeBean.jsx
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function CoffeeBean(props) {
  const { nodes, materials } = useGLTF('/models/coffee_bean.glb');
  
  // You can remove the console.logs now if you want
  // console.log("Model Nodes:", nodes); 
  // console.log("Model Materials:", materials);

  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.rotation.x += delta * 0.1;
    }
  });

  // --- FIX IS HERE ---
  // Replace 'Object_4' and 'Material.001' with the names you found.
  // 'Scene' and 'Material' are very common default names.
  const geometry = nodes.Scene?.children[0].geometry; // We find the first mesh inside the 'Scene'
  const material = materials.Material;

  if (!geometry || !material) {
    // This check is good practice
    return null;
  }

  return (
    <mesh
      {...props}
      ref={meshRef}
      geometry={geometry}
      material={material}
      scale={2}
      position={[0, 0, 0]}
    />
  );
}

useGLTF.preload('/models/coffee_bean.glb');