
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Cone = ({position, color, scale}) => {

    const coneRef = useRef()

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime()
        coneRef.current.rotation.x = Math.sin(time) 
        coneRef.current.rotation.y = Math.cos(time) 
        coneRef.current.position.y = Math.sin(time) * -1
    })


    return <>
        <mesh ref={coneRef} position={position} rotation-x={1} scale={scale}>
            <coneGeometry  />
            <meshNormalMaterial color={color} wireframe />
        </mesh>
    </>

}
export default Cone;