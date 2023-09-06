
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Box = ({position, color}) => {

    const boxRef = useRef()

    useFrame(({ clock }) => {
        const a = Math.sin(clock.getElapsedTime())
        boxRef.current.rotation.x = a
    })

    return <>
        <mesh ref={boxRef} position={position} scale={0.5} >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={color} />
        </mesh>
    </>

}
export default Box;