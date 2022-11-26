import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { DDSLoader } from 'three-stdlib'
import { Suspense } from 'react'
import { Earth } from './Earth'

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader())

export default function Render3D() {
  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={null}>
          <pointLight position={[10, 5, 10]} />
          <Earth />
          <OrbitControls autoRotate />
        </Suspense>
      </Canvas>
    </div>
  )
}
