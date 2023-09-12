
const Torus = (props) => {

    return <>
        <mesh {...props} >
            <torusGeometry />
            <meshPhongMaterial color={props.color}  />
        </mesh>
    </>
}
export default Torus;