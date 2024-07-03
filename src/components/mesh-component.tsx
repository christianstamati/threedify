"use client";
import {
  MeshProps,
  PrimitiveProps,
  useLoader as useThreeLoader,
} from "@react-three/fiber";
import { useMemo } from "react";
import { FBXLoader, GLTFLoader, OBJLoader, PLYLoader } from "three-stdlib";
import { BufferGeometry, Group, Mesh } from "three";
import logger from "@/logger";

// GLB
// scene

export function useLoader(src: string) {
  const extension = src.split("?")[0]?.split(".").pop();
  const Loader = useMemo(() => {
    switch (extension) {
      case "glb":
      case "gltf":
        return GLTFLoader;
      case "obj":
        return OBJLoader;
      case "ply":
        return PLYLoader;
      case "fbx":
        return FBXLoader;
      default:
        throw new Error("Extension " + extension + " is not supported");
    }
  }, [extension]);

  const model = useThreeLoader(Loader, src);

  let geometry: BufferGeometry | undefined = undefined;

  if (model instanceof Group) {
    model.traverse((child) => {
      if (child.type === "Mesh") {
        const _c = child as Mesh;
        geometry = _c.geometry;
        geometry.computeVertexNormals();
      }
    });
  } else if (model instanceof BufferGeometry) {
    // convert buffer geometry to GROUP
    model?.computeVertexNormals();
    geometry = model;
  } else {
    model.scene.traverse((child) => {
      if (child.type === "Mesh") {
        const _c = child as Mesh;
        geometry = _c.geometry;
        geometry.computeVertexNormals();
      }
    });
  }

  return { geometry };
}

interface MeshComponentProps extends MeshProps {
  src: string;
}

interface MeshComponentPropsV2 {
  src: string;
}

export function MeshComponent(props: MeshComponentProps) {
  const { geometry } = useLoader(props.src);
  return (
    <mesh geometry={geometry} {...props}>
      {props.children}
    </mesh>
  );
}

export function useLoaderV2(src: string) {
  const extension = src.split("?")[0]?.split(".").pop();
  const Loader = useMemo(() => {
    switch (extension) {
      case "glb":
      case "gltf":
        return GLTFLoader;
      case "obj":
        return OBJLoader;
      case "ply":
        return PLYLoader;
      case "fbx":
        return FBXLoader;
      default:
        throw new Error("Extension " + extension + " is not supported");
    }
  }, [extension]);

  const model = useThreeLoader(Loader, src);

  let group: Group | undefined;

  if (model instanceof Group) {
    group = model;
  } else if (model instanceof BufferGeometry) {
    group = new Group();
    const mesh = new Mesh(model);
    group.add(mesh);
  } else {
    group = model.scene;
    logger.info("loading GLB, ", group);
  }

  return { group };
}

// mesh component v2
export function MeshComponentV2(props: MeshComponentPropsV2) {
  const { group } = useLoaderV2(props.src);
  return <primitive object={group}></primitive>;
}
