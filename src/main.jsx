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
`;

function App() {
  return (
    <CanvasContainer>
      {/* The <Suspense> component is crucial. It allows us to show a 
        'fallback' (like a loading screen) while our 3D model is being downloaded.
      */}
      <Suspense fallback={null}>
        <Canvas>
          {/* Let's add more dramatic lighting */}
          <ambientLight intensity={0.2} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <pointLight position={[-5, -5, -5]} intensity={0.5} color="#d4af37" />

          <CoffeeBean />

          <OrbitControls enableZoom={false} />
        </Canvas>
      </Suspense>
    </CanvasContainer>
  )
}

export default App