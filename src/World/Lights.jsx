import { useHelper } from "@react-three/drei";
// import { useControls } from "leva";
import { useMemo, useRef } from "react";
import { DirectionalLightHelper, HemisphereLightHelper, SpotLightHelper } from "three";

const Lights = () => {

    const directionalLightRef = useRef();
    // useHelper(directionalLightRef, DirectionalLightHelper);

    const spotLightRef = useRef()
    // useHelper(spotLightRef, SpotLightHelper)

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
            <ambientLight intensity={0.5}/>
            <directionalLight 
                ref={directionalLightRef} 
                position={[-6, 5, 1]} 
                intensity={2} 
                color={0xFFFFFF} 
                castShadow
                shadow-mapSize={[258, 258]}
                />
            <spotLight
                ref={spotLightRef}
                position={[-4, 4, 2]}
                angle={Math.PI / 16} // dividido en 12 unidades
                intensity={100}
                color={"white"}
                penumbra={1}
                distance={20}
            />
            <hemisphereLight 
                ref={hemisphereLightRef} 
                // position={[2, 10, -2]}
                intensity={1}
                color={"blue"}
                />

        </>
    )
}
export default Lights