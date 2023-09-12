
const Cone = (props) => {

    return <>
        <mesh {...props} rotation-x={1} >
            <coneGeometry  />
            <meshNormalMaterial color={props.color} wireframe />
        </mesh>
    </>
}
export default Cone;