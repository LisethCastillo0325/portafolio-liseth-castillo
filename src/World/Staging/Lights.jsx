import { useHelper } from "@react-three/drei";
// import { useControls } from "leva";
import { useMemo, useRef } from "react";
import { DirectionalLightHelper, HemisphereLightHelper, SpotLightHelper } from "three";

const Lights = () => {

    const directionalLightRef = useRef();
    // useHelper(directionalLightRef, DirectionalLightHelper);

    const hemisphereLightRef = useRef(); 
    // useHelper(hemisphereLightRef, HemisphereLightHelper);

    // const options = useMemo(() => {
    //     return{
    //         intensitySL: { value: 100, min: 0, max: 1000, step: 1 },
    //         colorSL: {value: "white"}
           
    //     }
    // }, [])

    // const { intensitySL, colorSL } = useControls("Spot Light", options);

    return (
        <>
            <ambientLight intensity={0.3}/>
            <directionalLight 
                ref={directionalLightRef} 
                position={[-6, 5, 1]} 
                intensity={2} 
                color={0xFFFFFF} 
                castShadow
                shadow-mapSize={[258, 258]}
                />
           
            <hemisphereLight 
                ref={hemisphereLightRef} 
                position={[2, 10, -2]}
                intensity={0.7}
                color={"blue"}
                />

        </>
    )
}
export default Lights