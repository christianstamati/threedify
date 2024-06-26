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
import { useState, useTransition } from "react";
import { create } from "zustand";

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

  const { roughness } = useControls({
    roughness: { value: 1, min: 0, max: 1 },
  });
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
        <meshStandardMaterial metalness={1} roughness={roughness} />
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

function Env() {
  const [preset, setPreset] = useState("sunset");
  // You can use the "inTransition" boolean to react to the loading in-between state,
  // For instance by showing a message
  const [inTransition, startTransition] = useTransition();
  const { blur } = useControls({
    blur: { value: 0.65, min: 0, max: 1 },
    preset: {
      value: preset,
      options: [
        "sunset",
        "dawn",
        "night",
        "warehouse",
        "forest",
        "apartment",
        "studio",
        "city",
        "park",
        "lobby",
      ],
      // If onChange is present the value will not be reactive, see https://github.com/pmndrs/leva/blob/main/docs/advanced/controlled-inputs.md#onchange
      // Instead we transition the preset value, which will prevents the suspense bound from triggering its fallback
      // That way we can hang onto the current environment until the new one has finished loading ...
      onChange: (value) => startTransition(() => setPreset(value)),
    },
  });
  // @ts-ignore
  return <Environment preset={preset} background backgroundBlurriness={blur} />;
}

export function Editor() {
  const { target, setTarget } = useStore();

  const { mode } = useControls({
    mode: { value: "translate", options: ["translate", "rotate", "scale"] },
  });

  return (
    <Canvas
      shadows
      camera={{ position: [-3.5, 2, 3.5], fov: 60 }}
      onPointerMissed={() => setTarget(null)}
    >
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
      <Env />

      {target && ( // @ts-ignore
        <TransformControls object={target} mode={mode} />
      )}
      <OrbitControls makeDefault />
      <group position={[0, 0, 0]}>
        <Box position={[0, 0, 0]} />
        <ShadowPlane />
      </group>
    </Canvas>
  );
}
