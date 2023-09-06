
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Cone = ({position, color}) => {

    const coneRef = useRef()

    useFrame(({ clock }) => {
        const a = Math.sin(clock.getElapsedTime())
        coneRef.current.rotation.y = a
    })


    return <>
        <mesh ref={coneRef} position={position} rotation-x={1} >
            <coneGeometry  />
            <meshNormalMaterial color={color} wireframe />
        </mesh>
    </>

}
export default Cone;