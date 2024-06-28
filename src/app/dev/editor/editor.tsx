"use client";
import { Canvas, useThree } from "@react-three/fiber";
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
import { useEffect, useRef, useState, useTransition } from "react";
import { create } from "zustand";
import { ObjectLoader } from "three";

const inputScene = {
  metadata: { version: 4.6, type: "Object", generator: "Object3D.toJSON" },
  geometries: [
    {
      uuid: "faaa28f1-41ca-412b-8eec-63fd9335341f",
      type: "BoxGeometry",
      width: 1,
      height: 1,
      depth: 1,
      widthSegments: 1,
      heightSegments: 1,
      depthSegments: 1,
    },
  ],
  materials: [
    {
      uuid: "324b697b-8d5a-4422-b0d7-8581fcb9bc5d",
      type: "MeshStandardMaterial",
      color: 16777215,
      roughness: 1,
      metalness: 1,
      emissive: 0,
      envMapRotation: [0, 0, 0, "XYZ"],
      envMapIntensity: 1,
      blendColor: 0,
    },
  ],
  object: {
    uuid: "d219890e-ccc7-4a3c-916c-113aa0a39bd6",
    type: "Scene",
    layers: 1,
    matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    up: [0, 1, 0],
    children: [
      {
        uuid: "bd9d1132-8545-4326-9151-429dd985fe57",
        type: "DirectionalLight",
        castShadow: true,
        layers: 1,
        matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1],
        up: [0, 1, 0],
        color: 16777215,
        intensity: 1.5,
        shadow: {
          mapSize: [1024, 1024],
          camera: {
            uuid: "fdeb6928-f06d-4b6a-a9e0-a776ccd909fa",
            type: "OrthographicCamera",
            layers: 1,
            up: [0, 1, 0],
            zoom: 1,
            left: -5,
            right: 5,
            top: 5,
            bottom: -5,
            near: 0.5,
            far: 500,
          },
        },
      },
      {
        uuid: "fa073bcd-8107-43b7-8ac8-da5ff83f5214",
        type: "Group",
        layers: 1,
        matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        up: [0, 1, 0],
        children: [
          {
            uuid: "a04bdae6-b16b-41e9-8939-448ab2a517ba",
            type: "Group",
            layers: 1,
            matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            up: [0, 1, 0],
            children: [
              {
                uuid: "75387959-1289-40b2-967a-63e008793ed6",
                type: "Group",
                layers: 1,
                matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                up: [0, 1, 0],
                children: [
                  {
                    uuid: "503bb14a-e600-48f1-b6a9-5a0026033b62",
                    type: "Mesh",
                    castShadow: true,
                    layers: 1,
                    matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                    up: [0, 1, 0],
                    geometry: "faaa28f1-41ca-412b-8eec-63fd9335341f",
                    material: "324b697b-8d5a-4422-b0d7-8581fcb9bc5d",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    backgroundRotation: [0, 0, 0, "XYZ"],
    environmentRotation: [0, 0, 0, "XYZ"],
  },
};

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
