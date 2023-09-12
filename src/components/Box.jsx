
const Box = (props) => {

    return <>
        <mesh {...props} >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={props.color} {...props.propsTexture} />
        </mesh>
    </>
}
export default Box;