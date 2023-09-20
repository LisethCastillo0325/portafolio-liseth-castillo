import React from "react";
import { useGLTF } from "@react-three/drei";
import { useTexture } from "@react-three/drei";

export function WoodenFence(props) {
  const { nodes } = useGLTF("/assets/models/woodenFence/woodenFence.glb");
  const PATH = "/assets/textures/wood/";

  const propsTexture = useTexture({
    map: PATH + 'woodColor.jpg',
    normalMap: PATH + 'woodNormal.jpg',
    roughnessMap: PATH + 'woodRoughness.jpg',
    aoMap: PATH + 'woodAO.jpg',
  })

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.WoodenFence.geometry}
        castShadow
        onClick={(e) => e.stopPropagation()}
      >
        <meshStandardMaterial {...propsTexture} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/assets/models/woodenFence/woodenFence.glb");
