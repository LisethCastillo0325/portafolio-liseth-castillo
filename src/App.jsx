import Experience from "./Experience";
import { Canvas } from "@react-three/fiber";


const App = () => {
    return <>
         <Canvas 
            camera={{ position: [3, 0, 5] }}>
            <Experience />
        </Canvas>
    </>
}
export default App;