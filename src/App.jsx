import { Canvas } from "@react-three/fiber";

import Experience from "./Components/Experience";
import Info from "./Components/Info/Info";

const App = () => {

    const cameraSettings = {
        position: [0, 0, 5],
        fov: 60
    }

    return <>
        <Info 
            name="Liseth Castillo"
            biography="Web 3D Developer." />
        <Canvas 
            camera={cameraSettings}
        >
            <Experience />
        </Canvas>
    </>
}
export default App;