"use client";
import { Canvas, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controls.minDistance = 3;
    controls.maxDistance = 20;
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};

export function Editor() {
  return (
    <Canvas>
      <CameraController />
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 0, 5]} />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </Canvas>
  );
}
