import { OrbitControls } from "@react-three/drei";
import Bee from "./World/Bee";
import { Tree } from "./World/Tree";
import { WoodenFence } from "./World/WoodenFence";

const Experience = () => {
    return (
        <>
            <OrbitControls makeDefault />
            <ambientLight intensity={2} />
            <directionalLight position={[10, 10, 5]} intensity={2} />
            <Bee />
            <Tree position={[-2, -2, 2]} scale={0.04} />
            <WoodenFence position={[0, -2, 0]} />
            <mesh position-y={-2} rotation-x={-Math.PI / 2} >
                <planeGeometry attach="geometry" args={[12, 12]} />
                <meshStandardMaterial attach="material" color="green" />
            </mesh>
        </>
    )
}

export default Experience;