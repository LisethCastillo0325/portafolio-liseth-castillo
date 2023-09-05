import "./styles.css"
import { createRoot} from "react-dom/client";
import App from "./App"


const root = createRoot(document.getElementById('root'));


// root.render(
//     <Experience title="Portafolio - Liseth Castillo" info="Web 3D Developer"/>
// );


root.render(
    <App />
);