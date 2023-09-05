// const Experience = ({title, info}) => {
//     return (
//         <>
//             <h2 className="title"> {title} </h2>
//             <span> {info} </span>
//         </>
//     );
// }

import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Experience = ({title, info}) => {

    const boxRef = useRef()

    useFrame((state, delta) => {
        boxRef.current.rotation.x += 1 * delta;
    })

    return <>
        <OrbitControls makeDefault />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <mesh ref={boxRef}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial position={[10, 10, 5]} intensity={2} color="yellow" />
        </mesh>
    </>

}
export default Experience;