import { useGLTF } from "@react-three/drei";

export function MeshComponent(props: { src: string }) {
  const { scene } = useGLTF(props.src);
  return <primitive object={scene}></primitive>;
}
