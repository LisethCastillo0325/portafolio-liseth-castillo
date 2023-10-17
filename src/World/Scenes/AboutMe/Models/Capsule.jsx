import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const Capsule = (props) => {
  const { nodes, materials } = useGLTF("assets/models/spaceship_cockpit.glb");
  return (
    <RigidBody type={"fixed"} colliders={"trimesh"} friction={0.7} restitution={1}>
        <group {...props} dispose={null}>
        <group name="Sketchfab_Scene">
            <group
            name="Sketchfab_model"
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.006}
            >
            <group
                name="8f4c48db1557438b957dabce418e0b45fbx"
                rotation={[Math.PI / 2, 0, 0]}
            >
                <group name="RootNode">
                <group
                    name="Cube007"
                    position={[-9.005, 0, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                >
                    <mesh
                    name="Cube007_Glass_Material_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube007_Glass_Material_0.geometry}
                    material={materials.Glass_Material}
                    />
                </group>
                <group
                    name="SpaceShipBody"
                    position={[152.425, -15.129, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                >
                    <mesh
                    name="SpaceShipBody_Body_Material_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.SpaceShipBody_Body_Material_0.geometry}
                    material={materials.Body_Material}
                    />
                    <mesh
                    name="SpaceShipBody_Dashboard_Material_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.SpaceShipBody_Dashboard_Material_0.geometry}
                    material={materials.Dashboard_Material}
                    />
                </group>
                </group>
            </group>
            </group>
        </group>
        </group>
    </RigidBody>
  );
}
export default Capsule;

useGLTF.preload("assets/models/spaceship_cockpit.glb");