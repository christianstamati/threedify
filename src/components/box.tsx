import { Center } from "@react-three/drei";

export function Box(props: any) {
  return (
    <Center top>
      <mesh {...props} castShadow>
        <boxGeometry />
        <meshStandardMaterial metalness={1} roughness={1} />
      </mesh>
    </Center>
  );
}
