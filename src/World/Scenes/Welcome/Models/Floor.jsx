import { useTexture } from "@react-three/drei";
import { RepeatWrapping, Vector2 } from "three";


const Floor = (props) => {

    const PATH = "/assets/textures/terrain/"

    const propsTexture = useTexture({
        map: PATH + "texture3/textureColor.jpg",
        displacementMap: PATH + 'texture3/textureHeight.png',
        normalMap: PATH + 'texture3/textureNormal.jpg',
        roughnessMap: PATH + 'texture3/textureRoughness.jpg',
        aoMap: PATH + 'texture3/textureAO.jpg'
    })

    const repeat = new Vector2(4, 2);

    for (const map of [
        propsTexture.map, 
        propsTexture.normalMap, 
        propsTexture.displacementMap, 
        propsTexture.roughnessMap, 
        propsTexture.aoMap
    ]) {
        map.repeat = repeat
    }

    const repeatWrapping = RepeatWrapping;
    for (const map of [
        propsTexture.map, 
        propsTexture.normalMap, 
        propsTexture.displacementMap, 
        propsTexture.roughnessMap, 
        propsTexture.aoMap
    ]) {
        map.wrapS = map.wrapT = repeatWrapping;
    }

    propsTexture.map.offset = propsTexture.normalMap.offset = propsTexture.displacementMap.offset = propsTexture.roughnessMap.offset = propsTexture.aoMap.offset = new Vector2(0.5, 0.5);

    return (
        <>
            <mesh {...props} >
                <planeGeometry attach="geometry" args={[100, 40, 50]} />
                <meshStandardMaterial {...propsTexture}  />
            </mesh>
        </>
    )

}
export default Floor;