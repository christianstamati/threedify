import { useCursor, useGLTF } from "@react-three/drei";
import React, { useState } from "react";
import logger from "@/logger";

function MeshComponent(props: { src: string }) {
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);
  const gltf = useGLTF(props.src);
  return (
    <group
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
