import "./AboutMe.css"
import { Html } from "@react-three/drei"

const AboutMeText = (props) => {

    return (
        <mesh onClick={(e) => e.stopPropagation()} >
            <Html position={[0, 6, -10]} center distanceFactor = {20} >
                <div className="container-about-me">
                    <div className="card-about-me" >
                        <h1 className="name-about-me">About Me</h1>
                        <span className="biography-about-me">
                        I am a systems engineering student and I love backend development. I have knowledge of Python, Django REST, PostgreSQL, Git, Linux, AWS. I like to work on the business logic of the application. 
                        </span>
                    </div>
                </div>
            </Html>
        </mesh>
    )
}

export default AboutMeText;