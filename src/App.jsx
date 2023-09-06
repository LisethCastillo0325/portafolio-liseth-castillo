import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

import Info from "./components/Info";
import Box from "./components/Box";
import Sphere from "./components/Sphere";
import Cone from "./components/Cone"
import Torus from "./components/Torus"


const App = () => {
    return <>
        <Info 
            name="Liseth Castillo"
            biography="Soy estudiante de Ingenieria de Sistemas." />
         <Canvas 
            camera={{ position: [2, 0, 5] }}>
            
            <OrbitControls />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} /> 
            <Stars/>

            <Box color="orange" /> 
            <Sphere position={[-2, 2, 0]} color="#A518E9" />
            {/* <Sphere position={[2, 0, 0]} color="#3918E9" /> */}
            <Cone position={[1, 2, 1]} color="#18E9D8" />
            <Torus position={[-4, -1, -2]} color="#18A1E9" />

        </Canvas>
    </>
}
export default App;