import { Canvas } from "@react-three/fiber";

import Info from "./Components/Info/Info";
import Experience from "./World/Experience";


const App = () => {

    const cameraSettings = {
        position: [0, 1, 9],
        fov: 60
    }

    return <>
        <Info 
            name="Liseth Castillo"
            biography="Backend Developer." />
         <Canvas 
            camera={cameraSettings}
            shadows>
            
           <Experience />
        </Canvas>
    </>
}
export default App;