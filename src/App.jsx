import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import styled from 'styled-components'

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
      <Canvas>
        <ambientLight />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#00704A" />
        </mesh>
        <OrbitControls />
      </Canvas>
    </CanvasContainer>
  )
}

export default App