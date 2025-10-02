import { Canvas } from '@react-three/fiber';
import { OrbitControls, ScrollControls } from '@react-three/drei';
import styled from 'styled-components';
import { Suspense } from 'react';
import { CoffeeBean } from './components/CoffeeBean';
import { CameraAnimations } from './components/CameraAnimations'; // Import the new component

const CanvasContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #101010;
`;

function App() {
  return (
    <CanvasContainer>
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 0, 10], fov: 25 }}>
          <color attach="background" args={['#101010']} />
          <ambientLight intensity={1.5} />
          <directionalLight intensity={2} position={[5, 5, 5]} />

          {/* ScrollControls wraps the scene that will be affected by scroll */}
          <ScrollControls pages={10} damping={0.25}>
            <CameraAnimations />
            <CoffeeBean />
          </ScrollControls>
        </Canvas>
      </Suspense>
    </CanvasContainer>
  );
}

export default App;