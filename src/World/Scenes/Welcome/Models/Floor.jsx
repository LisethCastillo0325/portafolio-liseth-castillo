import { useTexture } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
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

    const repeat = new Vector2(14, 14);

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
            <RigidBody type="fixed">
                <mesh {...props} >
                    <planeGeometry attach="geometry" args={[74, 74, 96, 96]} />
                    <meshStandardMaterial {...propsTexture}  />
                </mesh>
            </RigidBody>
        </>
    )

}
export default Floor;