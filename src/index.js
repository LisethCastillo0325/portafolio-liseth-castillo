import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./styles.css"
import { createRoot} from "react-dom/client";
import App from "./App"


const root = createRoot(document.getElementById('root'));

root.render(
    <App />
);