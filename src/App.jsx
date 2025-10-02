// src/App.jsx
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import styled from 'styled-components';
import { Suspense } from 'react';
import { CoffeeBean } from './components/CoffeeBean';

const CanvasContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`;

function App() {
  return (
    <CanvasContainer>
      <Suspense fallback={null}>
        {/* --- FIX IS HERE: Setting camera position further back (z: 15) --- */}
        <Canvas camera={{ position: [0, 0, 15], fov: 15 }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 5, 5]} intensity={2} />
          
          <CoffeeBean />

          <OrbitControls />
        </Canvas>
      </Suspense>
    </CanvasContainer>
  );
}

export default App;