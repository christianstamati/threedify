"use client";
import { Canvas, useThree } from "@react-three/fiber";
import {
  Html,
  OrbitControls,
  TransformControls,
  useCursor,
  useGLTF,
} from "@react-three/drei";
import React, { useState } from "react";
import { useEditor } from "@/app/dev/editor/use-editor";
import { create } from "zustand";
import { Button } from "@/components/ui/button";

const useStore = create<{ target: any; setTarget: (target: any) => void }>(
  (set) => ({
    target: null,
    setTarget: (target: any) => set({ target }),
  }),
);

function MeshComponent(props: { src: string }) {
  const setTarget = useStore((state) => state.setTarget);
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);
  const { scene } = useGLTF(props.src);
  console.log(scene);
  return (
    <primitive
      onClick={(e: any) => setTarget(e.object)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      object={scene}
    ></primitive>
  );
}

function DebugPanel() {
  const scene = useThree((state) => state.scene);

  return (
    <Html>
      <Button
        onClick={() => {
          scene.traverse((object) => {
            console.log(object);
          });
        }}
      >
        Print Scene elements
      </Button>
    </Html>
  );
}

export function Scene() {
  const { target, setTarget } = useStore();
  const scene = useEditor((state) => state.scene);

  return (
    <Canvas
      shadows
      onPointerMissed={() => setTarget(null)}
      camera={{ position: [-3.5, 2, 3.5], fov: 60 }}
    >
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
      <OrbitControls makeDefault />
      {scene.objects.map((object, idx) => (
        <MeshComponent key={idx} src={object.path} />
      ))}
      {target && ( // @ts-ignore
        <TransformControls object={target} mode={"translate"} />
      )}

      <DebugPanel></DebugPanel>
    </Canvas>
  );
}
