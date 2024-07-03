import { useMemo } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { useLoader as useThreeLoader } from "@react-three/fiber";
import { Group } from "three";

export function useLoader(src: string) {
  const extension = src.split(".").pop();
  const Loader = useMemo(() => {
    switch (extension) {
      case "glb":
      case "gltf":
        return GLTFLoader;
      case "obj":
        return OBJLoader;
      case "fbx":
        return FBXLoader;
      default:
        throw new Error("Extension " + extension + " is not supported");
    }
  }, [extension]);
  const loadedModel = useThreeLoader(Loader, src);
  const object = loadedModel instanceof Group ? loadedModel : loadedModel.scene;
  return { object };
}
