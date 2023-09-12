
const Sphere = (props) => {

    return <>
        {/* Esfera */} 
        <mesh  {...props} >
            <sphereGeometry  />
            <meshStandardMaterial color={props.color} {...props.propsTexture}/>
        </mesh>
    </>
}
export default Sphere;