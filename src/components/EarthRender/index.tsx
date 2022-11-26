import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { DDSLoader } from 'three-stdlib'
import { Suspense } from 'react'
import { Earth } from './Earth'

import { Container3d } from './style'

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader())

export default function Render3D() {
  return (
    <Container3d>
      <Canvas>
        <Suspense fallback={null}>
          <pointLight position={[30, 5, 10]} />
          <Earth />
          <OrbitControls autoRotate enableZoom={false} />
        </Suspense>
      </Canvas>
    </Container3d>
  )
}
