"use client";
import { Canvas, Vector3 } from "@react-three/fiber";
import {
  CameraControls,
  Select,
  useSelect,
  Environment,
  MeshTransmissionMaterial,
  Edges,
  useCursor,
} from "@react-three/drei";
import { useState } from "react";

function Cube({ position }: { position?: Vector3 }) {
  const [hovered, setHover] = useState(false);
  console.log("HOVER: " + hovered);

  useCursor(hovered);
  return (
    <mesh
      position={position}
      onPointerOver={(e) => (e.stopPropagation(), setHover(true))}
      onPointerOut={(e) => setHover(false)}
    >
      <boxGeometry />
      <meshBasicMaterial />
    </mesh>
  );
}

export function Editor() {
  const [selected, setSelected] = useState<any>([]);

  return (
    <Canvas camera={{ position: [-2, 2, 2] }}>
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 0, 5]} />

      <Select multiple box onChange={setSelected}>
        <Cube></Cube>
        <Cube position={[0, 0, 5]}></Cube>
      </Select>
      <gridHelper />
      <Environment preset="city" />
      <CameraControls makeDefault />
    </Canvas>
  );
}
