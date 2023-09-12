import { useFrame } from "@react-three/fiber";
import { useRef } from "react";


const Sphere = ({position, color, scale}) => {

    const sphereRef = useRef()

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime()
        sphereRef.current.position.x = Math.sin(time);
        sphereRef.current.position.y =  Math.cos(time) ;
    })

    return <>
        {/* Esfera */} 
        <mesh ref={sphereRef} position={position} scale={scale} position-z={1}>
            <sphereGeometry args={[1, 32]} />
            <meshStandardMaterial color={color}  />
        </mesh>
    </>

}
export default Sphere;