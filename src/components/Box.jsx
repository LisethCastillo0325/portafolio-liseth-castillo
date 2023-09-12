
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Box = ({position, color, scale}) => {

    const boxRef = useRef()

    useFrame((state, delta) => {
        boxRef.current.rotation.x += 1 * delta
    })

    return <>
        <mesh ref={boxRef} position={position} scale={scale} >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={color} />
        </mesh>
    </>

}
export default Box;