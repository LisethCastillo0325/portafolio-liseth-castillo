
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Torus = ({position, color}) => {

    const torusRef = useRef()

    useFrame((state, delta) => {
        torusRef.current.rotation.x += 2 * -delta;

        // const positionX = Math.sin(delta) * 2;

        // const positionY = Math.cos(delta / 1000) * 1;

        // torusRef.current.position.x += positionX;
        // torusRef.current.position.y += positionX;

    })

    return <>
        <mesh ref={torusRef} position={position} >
            <torusGeometry />
            <meshPhongMaterial color={color}  />
        </mesh>
    </>

}
export default Torus;