// src/components/CoffeeBean.jsx
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function CoffeeBean(props) {
  const { nodes, materials } = useGLTF('/models/coffee_bean.glb');

  // This robustly finds the first mesh and its material in the model,
  // regardless of their names. This is the fix for the console error.
  let geometry, material;
  for (const nodeKey in nodes) {
    if (nodes[nodeKey].isMesh) {
      geometry = nodes[nodeKey].geometry;
      material = materials[nodes[nodeKey].material.name];
      break;
    }
  }

  // If for some reason no mesh is found, render nothing to prevent a crash.
  if (!geometry || !material) {
    return null;
  }

  return (
    <mesh
      {...props}
      geometry={geometry}
      material={material}
      scale={2}
      rotation={[0.5, 0, 0]} // Give it a slight initial tilt
      position={[0, 0, 0]}
    />
  );
}

useGLTF.preload('/models/coffee_bean.glb');