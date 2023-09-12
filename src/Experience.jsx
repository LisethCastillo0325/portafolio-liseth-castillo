
import { OrbitControls, Stars, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

import Box from "./components/Box";
import Sphere from "./components/Sphere";
import Cone from "./components/Cone"
import Torus from "./components/Torus"

import Robot from "./World/Robot";
import RobotGbl from "./World/RobotGbl";

const Experience = ({title, info}) => {

    const PATH = "/assets/textures/terrain/"

    const robotRef = useRef()
    const boxRef = useRef()
    const coneRef = useRef()
    const sphereRef = useRef()
    const torusRef = useRef()

    const propsTexture1 = useTexture({
        map: PATH + "texture1/textureColor.jpg",
        // displacementMap: PATH + 'texture/texture1Height.png',
        normalMap: PATH + 'texture1/textureNormal.jpg',
        roughnessMap: PATH + 'texture1/textureRoughness.jpg',
        aoMap: PATH + 'texture1/textureAO.jpg'
    })

    const propsTexture2 = useTexture({
        map: PATH + "texture2/textureColor.jpg",
        // displacementMap: PATH + 'texture/texture2Height.png',
        normalMap: PATH + 'texture2/textureNormal.jpg',
        roughnessMap: PATH + 'texture2/textureRoughness.jpg',
        aoMap: PATH + 'texture2/textureAO.jpg'
    })

    useFrame((state, delta) => {
        const time = state.clock.getElapsedTime()
        
        // Robot
        robotRef.current.rotation.x = Math.sin(time) * 0.5 
        robotRef.current.rotation.y = Math.cos(time) * 0.2
        robotRef.current.position.x = Math.sin(time)

        // Box
        boxRef.current.rotation.x += 1 * delta
        boxRef.current.position.x = Math.sin(time) * 1

        // Cone
        coneRef.current.rotation.x = Math.sin(time) 
        coneRef.current.rotation.y = Math.cos(time) 
        coneRef.current.position.y = Math.sin(time) * -1

        // Sphere
        sphereRef.current.position.x = Math.sin(time) * -1;

        // Torus
        torusRef.current.position.y = Math.sin(time) * 1;
        torusRef.current.rotation.y = Math.cos(time) * -1;
    })

    return <>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} /> 
        <Stars />

        <mesh position-x={2} position-y={2} scale={0.5}> 
            <mesh ref={boxRef}>
                <Box position={[3, 0, 0]} scale={0.5}  propsTexture={propsTexture2}/> 
            </mesh>
            <mesh ref={sphereRef}>
                <Sphere position={[-3, 0, 0]} scale={0.4} propsTexture={propsTexture1} />
            </mesh>
            <mesh ref={coneRef}>
                <Cone position={[2, 0, -2]} scale={0.7} color="#18E9D8" />
            </mesh>
            <mesh ref={torusRef}>
                <Torus position={[-1, -1, -2]} scale={0.6} color="#18A1E9" />
            </mesh>
        </mesh>
        

        {/* <Robot /> */}
        <mesh ref={robotRef}>
            <RobotGbl position-x={2} position-y={-1.5} rotation-y={-Math.PI * 0.15} scale={0.8}/>
        </mesh>
    </>

}
export default Experience;