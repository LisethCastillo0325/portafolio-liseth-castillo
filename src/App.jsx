import { Canvas } from "@react-three/fiber";

import Info from "./Components/Info/Info";
import Experience from "./World/Experience";
import { Loader } from "@react-three/drei";


const App = () => {

    const cameraSettings = {
        position: [0, 0.5, 9],
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
        <Loader
            containerStyles={{ backgroundColor: 'transparent', border: '2px solid #000' }}
            innerStyles={{ color: 'pink' }}
            />
    </>
}
export default App;