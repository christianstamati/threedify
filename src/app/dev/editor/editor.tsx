"use client";
import { Canvas, useThree, Vector3 } from "@react-three/fiber";
import {
  CameraControls,
  Select,
  Environment,
  useCursor,
} from "@react-three/drei";
import { useEffect, useState } from "react";
import Box from "@/app/dev/editor/box";

import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three-stdlib";
import { ObjectLoader, Scene } from "three";

export function Editor() {
  const [scene, setScene] = useState<Scene | undefined>();

  const response = async (r: Response) => {
    const text = await r.text();
    console.log(text);
    const scene = new ObjectLoader().parse(text) as Scene;
    setScene(scene);
  };

  useEffect(() => {
    fetch("/static/project.json").then(response);
  }, []);

  return (
    <Canvas scene={scene} camera={{ position: [-2, 2, 2] }}>
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 0, 5]} />
      <gridHelper />
      <CameraControls makeDefault />
    </Canvas>
  );
}
