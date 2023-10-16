import { Center, Float, Text, Text3D } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import { useRef, useState } from "react";
import { MathUtils } from "three";


const WelcomeText = ({size}) => {

    const aboutMeRef = useRef()
    const [active, setActive] = useState(false)

    useFrame((state, delta) => {
        state.camera.position.x = MathUtils.lerp(state.camera.position.x, active ? 15 : 0, 0.02)
        state.camera.position.z = MathUtils.lerp(state.camera.position.z, active ? -8 : 9, 0.02)
        state.camera.position.y = MathUtils.lerp(state.camera.position.y, active ? -1 : 0, 0.01)
    })

    const handleSign = (e, type) => {
        aboutMeRef.current.material.color.set(0xbd16a1)
    };

    const handleOutput = (e, type) => {
        aboutMeRef.current.material.color.set(0x00BFE1)
    };


    return (
        <>
            <Float
                speed={2} // Animation speed
                rotationIntensity={1} // XYZ rotation intensity
                floatIntensity={2} // Up/down float intensity
            >
                <Center top left
                    position-y={0.5}
                    position-x={-2.9}
                    >
                    <Text3D
                        font="/assets/fonts/Permanent Marker_Regular.json"
                        size={0.5}
                        bevelEnabled
                        bevelSize={0.005}
                        bevelThickness={0.01}
                        height={0.2}
                        lineHeight={0.5}
                        letterSpacing={0.05}
                        >
                            {`World X`}
                            <meshStandardMaterial color={0xbd16a1} />
                    </Text3D>
                </Center>

                <Center top left
                    position-y={0}
                    position-x={-3}
                    onPointerOver={(e) => handleSign(e, "About Me")}
                    onPointerLeave={(e) => {handleOutput(e, "About Me")}}
                    onClick={() => setActive(!active)}
                    >
                    <Text3D
                        font="/assets/fonts/Permanent Marker_Regular.json"
                        size={0.2}
                        bevelEnabled
                        bevelSize={0.005}
                        bevelThickness={0.01}
                        height={0.2}
                        lineHeight={0.5}
                        letterSpacing={0.05}
                        ref={aboutMeRef}
                        >
                            {`About me`}
                            <meshStandardMaterial color={0x00BFE1} />
                    </Text3D>
                </Center>
            </Float>
        </>
    )
}
export default WelcomeText;