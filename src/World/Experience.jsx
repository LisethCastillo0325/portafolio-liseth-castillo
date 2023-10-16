
import Lights from "./Staging/Lights";
import Environments from "./Staging/Environments";
import Controls from "./Controls/Controls";
import Welcome from "./Scenes/Welcome/Welcome"


const Experience = () => {
    return <>
        <Controls />
        <Environments />
        <Lights />

        <Welcome />
    </>
}
export default Experience;