
const Sphere = (props) => {

    return <>
        {/* Esfera */} 
        <mesh  {...props} >
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial 
                color={props.color} 
                {...props.propsTexture}
                roughness={0.8} 
                metalness={0.7}
                />
        </mesh>
    </>
}
export default Sphere;