
import Lights from "./Staging/Lights";
import Environments from "./Staging/Environments";
import Controls from "./Controls/Controls";
import Welcome from "./Scenes/Welcome/Welcome"
import AboutMe from "./Scenes/AboutMe/AboutMe";


const Experience = () => {
    return <>
        <Controls />
        <Environments />
        <Lights />

        <Welcome />
        <AboutMe />
    </>
}
export default Experience;