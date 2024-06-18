import React, { useRef, useState } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";

interface BoxProps {
  // Define the props expected by the Box component here
  // For example, if your props include position and rotation:
  position?: [number, number, number];
  rotation?: [number, number, number];
}

const Box: React.FC<BoxProps> = (props) => {
  // This reference will give us direct access to the mesh
  const meshRef = useRef<Mesh>(null);
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);

  return (
    <mesh
      {...props}
      ref={meshRef}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
};

export default Box;
