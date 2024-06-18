"use client";
import { Canvas, Vector3 } from "@react-three/fiber";
import {
  CameraControls,
  Select,
  Environment,
  useCursor,
} from "@react-three/drei";
import { useState } from "react";
import Box from "@/app/dev/editor/box";

export function Editor() {
  const [selected, setSelected] = useState<any>([]);
  return (
    <Canvas camera={{ position: [-2, 2, 2] }}>
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 0, 5]} />
      <gridHelper />
      <CameraControls makeDefault />
      <Box />
    </Canvas>
  );
}
