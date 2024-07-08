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
import logger from "@/logger";
import { DirectionalLight } from "three";

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
  const gltf = useGLTF(props.src);

  console.log(gltf);
  return (
    <group
      onClick={(e: any) => setTarget(e.object)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {gltf.nodes &&
        Object.keys(gltf.nodes).map((key) => {
          const node = gltf.nodes[key] as any;
          if (node.isMesh) {
            logger.info("Adding node: ", node);
            return (
              <mesh
                key={key}
                geometry={node.geometry}
                material={node.material}
                scale={[1, 1, 1]}
              />
            );
          }
          return null;
        })}
    </group>
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
      <OrbitControls makeDefault />
      {target && <TransformControls object={target} mode={"translate"} />}

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

      {scene.objects.map((object, idx) => (
        <MeshComponent key={idx} src={object.path} />
      ))}
    </Canvas>
  );
}
