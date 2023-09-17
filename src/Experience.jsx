
import { OrbitControls, Stars, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";

import Box from "./components/Box";
import Sphere from "./components/Sphere";
import Cone from "./components/Cone"
import Torus from "./components/Torus"

import RobotGbl from "./World/RobotGbl";
import Lights from "./World/Lights";
import Environments from "./World/Environments";


const Experience = ({title, info}) => {

    const PATH = "/assets/textures/terrain/"

    const robotRef = useRef()
    const sphereRef = useRef()
    const sphereRef2 = useRef()

    const propsTexture3 = useTexture({
        map: PATH + "texture2/textureColor.jpg",
        // displacementMap: PATH + 'texture3/textureHeight.png',
        normalMap: PATH + 'texture2/textureNormal.jpg',
        roughnessMap: PATH + 'texture2/textureRoughness.jpg',
        aoMap: PATH + 'texture2/textureAO.jpg'
    })

    const propsTexture1 = useTexture({
        map: PATH + "texture1/textureColor.jpg",
        //displacementMap: PATH + 'texture1/textureHeight.png',
        //normalMap: PATH + 'texture1/textureNormal.jpg',
        roughnessMap: PATH + 'texture1/textureRoughness.jpg',
        aoMap: PATH + 'texture1/textureAO.jpg'
    })

    useFrame((state, delta) => {
        const time = state.clock.getElapsedTime()
        
        // Robot
        robotRef.current.rotation.x = Math.sin(time) * 0.1 
        robotRef.current.rotation.y = Math.cos(time) * 0.2
        robotRef.current.position.x = Math.sin(time) * 0.1
        
        // Sphere
        sphereRef.current.rotation.y += 0.3 * delta 
        sphereRef2.current.rotation.y += 0.2 * delta 
    })

    return <>
        <OrbitControls />
        <Lights />
        <Environments />

        <mesh ref={sphereRef} position={[-5, 5, -20]}>
            <Sphere scale={1} propsTexture={propsTexture3} />
        </mesh>

        <mesh ref={sphereRef2} position={[18, 5, -20]}>
            <Sphere scale={5} propsTexture={propsTexture1} />
        </mesh>

        
        {/* <Robot /> */}
        <mesh ref={robotRef}>
            <RobotGbl position={[2, -1, 2]} rotation-y={-Math.PI * 0.15} scale={0.8}/>
        </mesh>

        <mesh position-y={-3} rotation-x={-Math.PI / 2} receiveShadow >
            <planeGeometry attach="geometry" args={[30, 12]} />
            <meshStandardMaterial {...propsTexture3}  />
        </mesh>
    </>

}
export default Experience;