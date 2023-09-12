import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

const Robot = () => {
    const robotRef = useRef()
    const robotModel = useGLTF("assets/models/robot/scene.gltf")
    const { animations } = robotModel;
    const { actions } = useAnimations(animations, robotRef)

    useEffect(() => {
        const action = actions["Experiment"]
        action.play()
    }, [])

    return (
        <mesh ref={robotRef} position-x={2} position-y={-2} rotation-y={-Math.PI * 0.15} scale={1} >
            <primitive object={robotModel.scene} />
        </mesh>
    )
}
export default Robot;
useGLTF.preload("assets/models/robot/scene.gltf")