import { Cloud, Environment, Sky, Sparkles, Stars } from "@react-three/drei"

const Environments = () => {
    return (
        <>
            {/* <Environment 
                // preset="sunset" 
                files={"/assets/environments/sunset_fairway_4k.hdr"}
                background={true}
                ground={{ height: 20, scale: 256}} /> */}

            <Sky
                sunPosition={[-1, 0, 0]} // Places the sun below the horizon
                inclination={1} // Adjusts the tilt to simulate sunset
                azimuth={0} // Adjusts the azimuth angle to change the direction of the light
                mieCoefficient={0.005} // Adjusts the atmospheric scattering
                elevation={5} // Adjusts the elevation of the sun
                mieDirectionalG={0.8} // Adjusts the brightness of the sun
                rayleigh={1} // Adjusts the Rayleigh scattering
                turbidity={1000} // Adjusts the clarity of the sky]
                exposure={1} // Adjusts the overall exposure
            />

            <Stars
                radius={100} // Radius of the inner sphere (default=100)
                depth={50} // Depth of area where stars should fit (default=50)
                count={5000} // Amount of stars (default=5000)
                factor={2} // Size factor (default=4)
                saturation={0} // Saturation 0-1 (default=0)
            />

            <Sparkles
                color="white"
                count={100}
                size={4}
                fade={false}
                speed={0.5}
                scale={10}
            />

            {/* <Cloud
                opacity={0.5}
                speed={0.4} // Rotation speed
                width={50} // Width of the full cloud
                depth={5} // Z-dir depth
                segments={20} // Number of particles
                position-y={20}
            /> */}
        </>
    )
}
export default Environments;