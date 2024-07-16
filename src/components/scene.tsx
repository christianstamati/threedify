"use client";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { useSceneStore } from "@/stores/scene-store";
import { OrbitControls } from "@react-three/drei";

export function Scene() {
  const scene = useSceneStore((state) => state.scene);
  const renderElement = (element: any, index: number) => {
    const { type, props, children } = element;
    return React.createElement(
      type,
      { ...props, key: index },
      children &&
        children.map((child: any, idx: number) => renderElement(child, idx)),
    );
  };
  return (
    <Canvas shadows camera={{ position: [-3.5, 2, 3.5], fov: 60 }}>
      <OrbitControls makeDefault />
      {scene.map((element, index) => (
        <React.Fragment key={index}>
          {renderElement(element, index)}
        </React.Fragment>
      ))}
    </Canvas>
  );
}
