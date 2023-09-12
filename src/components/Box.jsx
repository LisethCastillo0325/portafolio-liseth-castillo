
const Box = (props) => {

    return <>
        <mesh {...props} >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={props.color} />
        </mesh>
    </>
}
export default Box;