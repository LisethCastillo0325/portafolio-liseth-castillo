
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Torus = ({position, color, scale}) => {

    const torusRef = useRef()

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime()
        torusRef.current.position.y = Math.sin(time);;
        torusRef.current.rotation.y = Math.cos(time);
    })

    return <>
        <mesh ref={torusRef} position={position} scale={scale} >
            <torusGeometry />
            <meshPhongMaterial color={color}  />
        </mesh>
    </>

}
export default Torus;