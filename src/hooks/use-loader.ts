import { useMemo } from "react";
import { GLTFLoader, OBJLoader, FBXLoader, PLYLoader } from "three-stdlib";
import { useLoader as useThreeLoader } from "@react-three/fiber";
import { BufferGeometry, Group, Mesh, MeshStandardMaterial } from "three";
import logger from "@/logger";
