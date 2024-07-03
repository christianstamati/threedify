import { Center } from "@react-three/drei";
import { useLoader } from "@/hooks/use-loader";
type Props = {
  src: string;
};
export function MeshComponent(props: Props) {
  const { object } = useLoader(props.src);
  return (
    <Center top>
      <primitive object={object}></primitive>
    </Center>
  );
}
