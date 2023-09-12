
import { OrbitControls, Stars } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import Box from "./components/Box";
import Sphere from "./components/Sphere";
import Cone from "./components/Cone"
import Torus from "./components/Torus"


const Experience = ({title, info}) => {

    // const boxRef = useRef()

    // useFrame((state, delta) => {
    //     boxRef.current.rotation.x += 1 * delta;
    // })

    return <>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} /> 
        <Stars color="orange"/>

        <Box color="orange" scale={0.5}/> 
        <Sphere position={[-2, 2, 0]} color="#A518E9" scale={0.3}/>
        <Cone position={[4, 0, -2]} color="#18E9D8" scale={0.6}/>
        <Torus position={[-4, -1, -2]} color="#18A1E9" scale={0.5}/>
    </>

}
export default Experience;