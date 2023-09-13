import { useHelper } from "@react-three/drei";
import { useControls } from "leva";
import { useMemo, useRef } from "react";
import { DirectionalLightHelper, HemisphereLightHelper, PointLightHelper, SpotLightHelper } from "three";

const Lights = () => {

    const directionalLightRef = useRef();
    // useHelper(directionalLightRef, DirectionalLightHelper);

    const pointLightRef = useRef()
    // useHelper(pointLightRef, PointLightHelper)

    const spotLightRef = useRef()
    // useHelper(spotLightRef, SpotLightHelper)

    const hemisphereLightRef = useRef(); 
    // useHelper(hemisphereLightRef, HemisphereLightHelper);

    const options = useMemo(() => {
        return{
            intensitySL: { value: 100, min: 0, max: 1000, step: 1 },
            colorSL: {value: "white"}
           
        }
    }, [])

    const { intensitySL, colorSL } = useControls("Spot Light", options);

    return (
        <>
            <ambientLight intensity={0.5}/>
            <directionalLight 
                ref={directionalLightRef} 
                position={[10, 10, 5]} 
                intensity={5} 
                color={0x2471A3} 
                castShadow
                shadow-mapSize={[256, 256]}
                shadow-camera-far={32}
                shadow-camera-left={-8}
                shadow-camera-right={8}
                shadow-camera-top={4}
                shadow-camera-bottom={-4}
                />
            <pointLight ref={pointLightRef} position={[0, 4, -2]} intensity={4}  color={"red"} />
            <spotLight
                ref={spotLightRef}
                position={[0, 4, 2]}
                angle={Math.PI / 12} // dividido en 12 unidades
                intensity={intensitySL}
                color={colorSL}
                penumbra={1}
                distance={8}
            />
            <hemisphereLight 
                ref={hemisphereLightRef} 
                // position={[2, 10, -2]}
                intensity={10}
                color={"red"}
                />

        </>
    )
}
export default Lights