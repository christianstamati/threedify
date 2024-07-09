"use client";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { useSceneStore } from "@/store/scene-store";

export function ThreeCanvas() {
  const objects = useSceneStore((state) => state.objects);
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
      {objects.map((element, index) => (
        <React.Fragment key={index}>{renderElement(element)}</React.Fragment>
      ))}
    </Canvas>
  );
}
