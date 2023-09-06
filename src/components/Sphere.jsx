import { useFrame } from "@react-three/fiber";
import { useRef } from "react";


const Sphere = ({position, color}) => {

    const sphereRef = useRef()

    useFrame(({clock}) => {
        const time = clock.getElapsedTime()
        const positionX = Math.sin(time);
        const positionY = Math.cos(time);

        sphereRef.current.position.x = positionX;
        sphereRef.current.position.y = positionY;
    })

    return <>
        {/* Esfera */} 
        <mesh ref={sphereRef} position={position} scale={0.2}>
            <sphereGeometry args={[1, 32]} />
            <meshStandardMaterial color={color}  />
        </mesh>
    </>

}
export default Sphere;