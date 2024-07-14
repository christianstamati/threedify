"use client";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { useSceneStore } from "@/store/scene-store";
import { OrbitControls } from "@react-three/drei";

export function ThreeScene() {
  const scene = useSceneStore((state) => state.scene);
  const renderElement = (element: any) => {
    const { type, props, children } = element;
    return React.createElement(
      type,
      props,
      children && children.map((child: any) => renderElement(child)),
    );
  };
  return (
    <Canvas shadows camera={{ position: [-3.5, 2, 3.5], fov: 60 }}>
      <OrbitControls makeDefault />
      {scene.map((element, index) => (
        <React.Fragment key={index}>{renderElement(element)}</React.Fragment>
      ))}
    </Canvas>
  );
}
