// src/App.jsx
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import styled from 'styled-components'
import { Suspense } from 'react'
import { CoffeeBean } from './components/CoffeeBean'

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
        <Canvas camera={{ position: [0, 0, 5], fov: 25 }}>
          <color attach="background" args={['#101010']} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={2} />
          <CoffeeBean />
          <OrbitControls />
        </Canvas>
      </Suspense>
    </CanvasContainer>
  )
}

export default App