import { Center, Text3D } from "@react-three/drei";
import { useRef } from "react";


const AboutMeText = ({size, color, position_x, position_y}) => {

    const aboutMeRef = useRef()

    const handleSign = (e, type) => {
        aboutMeRef.current.material.color.set(0xbd16a1)
    };

    const handleOutput = (e, type) => {
        aboutMeRef.current.material.color.set(color)
    };

    return (
        <>
            <Center top left
                position-y={position_y}
                position-x={position_x}
                onPointerOver={(e) => handleSign(e, "About Me")}
                onPointerLeave={(e) => {handleOutput(e, "About Me")}}
                >
                <Text3D
                    font="/assets/fonts/Permanent Marker_Regular.json"
                    size={size}
                    bevelEnabled
                    bevelSize={0.005}
                    bevelThickness={0.01}
                    height={0.2}
                    lineHeight={0.5}
                    letterSpacing={0.05}
                    ref={aboutMeRef}
                    >
                        {`About me`}
                        <meshStandardMaterial color={color} />
                </Text3D>
            </Center>
        </>
    )
}
export default AboutMeText;