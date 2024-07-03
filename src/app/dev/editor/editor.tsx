"use client";
import { Canvas } from "@react-three/fiber";
import {
  Center,
  Environment,
  Grid,
  OrbitControls,
  SoftShadows,
  TransformControls,
  useCursor,
} from "@react-three/drei";
import { useControls } from "leva";
import { useState } from "react";
import { create } from "zustand";
import { MeshComponent } from "@/app/dev/editor/mesh-component";

const useStore = create<{ target: any; setTarget: (target: any) => void }>(
  (set) => ({
    target: null,
    setTarget: (target: any) => set({ target }),
  }),
);

function Box(props: any) {
  const setTarget = useStore((state) => state.setTarget);
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);
  return (
    <Center top>
      <mesh
        {...props}
        castShadow
        onClick={(e) => setTarget(e.object)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry />
        <meshStandardMaterial metalness={1} roughness={1} />
      </mesh>
    </Center>
  );
}

function ShadowPlane() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <shadowMaterial transparent opacity={0.4} />
    </mesh>
  );
}

export function Editor() {
  const { target, setTarget } = useStore();

  const { mode } = useControls({
    mode: { value: "translate", options: ["translate", "rotate", "scale"] },
  });

  return (
    <Canvas shadows camera={{ position: [-3.5, 2, 3.5], fov: 60 }}>
      <SoftShadows />
      <Grid scale={10} cellSize={0.1} />
      <directionalLight
        castShadow
        position={[2.5, 8, 5]}
        intensity={1.5}
        shadow-mapSize={1024}
      >
        <orthographicCamera
          attach="shadow-camera"
          args={[-10, 10, -10, 10, 0.1, 50]}
        />
      </directionalLight>
      <Environment preset={"sunset"} background backgroundBlurriness={0.65} />

      {target && ( // @ts-ignore
        <TransformControls object={target} mode={mode} />
      )}
      <OrbitControls makeDefault />
      <MeshComponent src="/static/models/duck.glb" />
    </Canvas>
  );
}
