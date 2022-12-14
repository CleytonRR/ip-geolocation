/* eslint-disable @typescript-eslint/no-explicit-any */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Jiaxing (https://sketchfab.com/saitoyang)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/earth-night-9590b55657504631b4fcc89b671e93d5
title: Earth (Night)
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Earth(props) {
  const { nodes, materials } = useGLTF('/earth.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.44}>
          <group scale={6.74}>
            <mesh
              geometry={nodes.pSphere1_color_0.geometry}
              material={materials.color}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/earth.gltf')
