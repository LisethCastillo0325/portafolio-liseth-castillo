import { Physics, RigidBody } from "@react-three/rapier";
import Capsule from "./Models/Capsule";
import AboutMeText from "../../../Components/AboutMe/AboutMe";
import { useEffect, useRef, useState } from "react";
import { MathUtils } from "three";
import { useFrame } from "@react-three/fiber";


const AboutMe = () => {

    const [active, setActive] = useState(false);
    const [back, setBack] = useState(false);
    const [play, setPlay] = useState(false)
    const [hitSound] = useState(() => new Audio('/assets/sounds/cartoon-impact.wav'))
    

    // useFrame((state, delta) => {
    //     if (back) {
    //         state.camera.position.x = MathUtils.lerp(state.camera.position.x, -14, 0.02);
    //         state.camera.position.y = MathUtils.lerp(state.camera.position.y, 2, 0.01);
    //         state.camera.position.z = MathUtils.lerp(state.camera.position.z, 25, 0.02);
    //         // setBack(false);
    //     }
    // })

    const ball1Ref = useRef();
    const ball2Ref = useRef();
    const torusRef = useRef();

    useEffect(() => {
        ball1Ref.current.sleep()
        ball2Ref.current.sleep()
    },[])


    useEffect(() => {
        if (play) {
            hitSound.currentTime = 0
            hitSound.volume = Math.random()
            hitSound.play();
        }
    }, [play])

    const onHandleSphere1 = () => {
        ball1Ref.current.applyImpulse({x:0, y: 2, z:0}, true)
        setActive(!active)
    }

    const onHandleSphere2 = () => {
        ball2Ref.current.applyImpulse({x:-0.1, y: 0.2, z:0.1}, true)
        setActive(!active)
    }

    const onHandleTorus = () => {
        setBack(true)
        setActive(false)
    }

    return (
        <>
            <Capsule position={[12, -0.5, -7]} scale={2} rotation-y={0.1} />
            
            <RigidBody 
                ref={torusRef} 
                type={"dinamic"} 
                colliders={"trimesh"} 
                position={[11, -1, -6.6]}
                rotation-x={-Math.PI / 2} 
                >
                <mesh scale={0.5} onClick={onHandleTorus}>
                    <torusGeometry  />
                    <meshLambertMaterial color={"#63b8ca"} />
                </mesh> 
            </RigidBody> 

            <RigidBody 
                ref={ball1Ref} 
                colliders={"ball"}
                position={[11, -0.5, -6.6]} 
                restitution={0.3}
                onCollisionEnter={() => {setPlay(true)}}
                onCollisionExit={() => {setPlay(false)}}
                >
                <mesh scale={0.4} onClick={onHandleSphere1}>
                    <sphereGeometry />
                    <meshStandardMaterial color={"red"} />
                </mesh>
            </RigidBody>

            <RigidBody 
                ref={ball2Ref} 
                colliders={"ball"} 
                position={[10, -1, -8]} 
                restitution={0.3}
                friction={0.9}
                onCollisionEnter={() => {setPlay(true)}}
                onCollisionExit={() => {setPlay(false)}}
                >
                <mesh scale={0.2} onClick={onHandleSphere2}>
                    <sphereGeometry />
                    <meshStandardMaterial color={"pink"} />
                </mesh>
            </RigidBody>

            {active && (
                <AboutMeText  />
            )}
        </>
    )
}
export default AboutMe;