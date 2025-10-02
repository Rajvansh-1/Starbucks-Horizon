// src/components/CoffeeBean.jsx
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function CoffeeBean(props) {
  const { nodes, materials } = useGLTF('/models/coffee_bean.glb');
  
  // --- DEBUGGING ---
  // This will show us the exact names of the parts of your 3D model.
  console.log("Model Nodes:", nodes); 
  console.log("Model Materials:", materials);
  // --- END DEBUGGING ---

  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.rotation.x += delta * 0.1;
    }
  });

  // Check if the expected parts exist before trying to render them
  if (!nodes.Object_4 || !materials['Material.001']) {
    console.error("The 3D model does not contain the expected 'Object_4' or 'Material.001'. Check the console logs above to find the correct names.");
    return null; // Return nothing if the model parts aren't found
  }

  return (
    <mesh
      {...props}
      ref={meshRef}
      geometry={nodes.Object_4.geometry}
      material={materials['Material.001']}
      scale={2}
      position={[0, 0, 0]}
    />
  );
}

useGLTF.preload('/models/coffee_bean.glb');