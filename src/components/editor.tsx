"use client";
import { create } from "zustand";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

type EditorStore = {};

type EditorActions = {
  add: () => void;
};

const useEditorStore = create<EditorStore & EditorActions>();

function Editor() {
  return (
    <Canvas shadows camera={{ position: [-3.5, 2, 3.5], fov: 60 }}>
      <OrbitControls makeDefault />
      <directionalLight position={[2.5, 8, 5]} />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </Canvas>
  );
}

export { useEditorStore, Editor };
