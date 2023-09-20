import { Center, Float, Html, Text, Text3D } from "@react-three/drei"
import { Color } from "three";

const WelcomeText = (props) => {
    return (
        // <Html position={[0, 3, 0]} center distanceFactor={12} >
        //     <h2 className="welcome-text"> Welcome </h2>
        // </Html>
        // <Float>
        //     <Text
        //         fontSize={0.3}
        //         color={new Color(0xFF6E09)}
        //         position-y={3}
        //         maxWidth={2}
        //         textAlign="center"
        //         font="/assets/fonts/Bangers-Regular.ttf"
        //     >
        //         Welcome to Alu's Villa
        //     </Text>
        // </Float>

        <Float
            speed={2} // Animation speed
            rotationIntensity={1.5} // XYZ rotation intensity
            floatIntensity={2} // Up/down float intensity
        >
            <Center 
                position-y={3}
                >
                <Text3D
                    font={"/assets/fonts/Bangers_Regular.json"}
                    bevelEnabled
                    bevelSize={0.005}
                    bevelThickness={0.01}
                    height={0.1}
                    lineHeight={0.5}
                    letterSpacing={0.05}
                    size={0.25}
                    >
                    {`    Welcome to\nAlu's Villaworld`}

                    <meshNormalMaterial />
                </Text3D>
            </Center>

        </Float>
    )
}
export default WelcomeText;