import { useEffect, useRef } from "react"

const { useGLTF, useAnimations } = require("@react-three/drei")

const Bee = () => {
    const beeRef = useRef()
    const beeModel = useGLTF('/assets/models/bee/scene.gltf')
    const { animations } = beeModel;
    const { actions } = useAnimations(animations, beeRef)

    useEffect(()=>{
        const action = actions["All Animations"]
        action.play()
    })

    return(
        <mesh ref={beeRef} position-x={2} rotation-y={-Math.PI * 0.15} scale={2}>
            <primitive object={beeModel.scene} />
        </mesh>
    );
}
export default Bee;
useGLTF.preload("/assets/models/bee/scene.gltf");
