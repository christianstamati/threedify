import { useState } from "react";
import { Center, useCursor } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useLoader } from "@react-three/fiber";

type Props = {
  src: string;
};

export function MeshComponent(props: Props) {
  const gltf = useLoader(GLTFLoader, "/static/duck.glb");
  return (
    <Center>
      <primitive object={gltf.scene}></primitive>
    </Center>
  );
}
