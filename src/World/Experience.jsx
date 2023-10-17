
import Lights from "./Staging/Lights";
import Environments from "./Staging/Environments";
import Controls from "./Controls/Controls";
import Welcome from "./Scenes/Welcome/Welcome"
import AboutMe from "./Scenes/AboutMe/AboutMe";
import { Suspense } from "react";
import { Physics } from "@react-three/rapier";


const Experience = () => {
    return <>
        <Controls />
        <Environments />
        <Lights />

        <Suspense fallback={null}>
            <Physics>
                <Welcome />
                <AboutMe />
            </Physics>
        </Suspense>
    </>
}
export default Experience;