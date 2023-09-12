import { Canvas } from "@react-three/fiber";

import Info from "./components/Info/Info";
import Experience from "./Experience";


const App = () => {

    const cameraSettings = {
        position: [0, 0, 5],
        fov: 60
    }

    return <>
        <Info 
            name="Liseth Castillo"
            biography="I am a systems engineering student. I like to learm and practice new things, for example, developing a 3D website." />
         <Canvas 
            camera={cameraSettings}>
            
           <Experience />
        </Canvas>
    </>
}
export default App;