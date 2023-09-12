
const Sphere = (props) => {

    return <>
        {/* Esfera */} 
        <mesh  {...props} >
            <sphereGeometry args={[1, 32]} />
            <meshStandardMaterial color={props.color}  />
        </mesh>
    </>
}
export default Sphere;