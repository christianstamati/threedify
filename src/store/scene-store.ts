import { create } from "zustand";

type Object3D = {
  type: string;
  props?: {};
  children?: Object3D[];
};

type SceneStore = {
  scene: Object3D[];
};

type Actions = {
  add: (obj: Object3D) => void;
};

// <meshStandardMaterial metalness={1} roughness={1} />

export const useSceneStore = create<SceneStore & Actions>()((set) => ({
  scene: [
    {
      type: "directionalLight",
      props: {
        castShadow: true,
        position: [2.5, 8, 5],
        intensity: 1.5,
        "shadow-mapSize": 1024,
      },
      children: [
        {
          type: "orthographicCamera",
          props: {
            attach: "shadow-camera",
            args: [-10, 10, -10, 0.1, 50],
          },
        },
      ],
    },
    {
      type: "mesh",
      props: {
        position: [0, 2, 0],
      },
      children: [
        {
          type: "boxGeometry",
        },
        {
          type: "meshStandardMaterial",
          props: {
            metalness: 1,
            roughness: 1,
          },
        },
      ],
    },
    {
      type: "mesh",
      props: {},
      children: [
        {
          type: "planeGeometry",
        },
        {
          type: "meshStandardMaterial",
          props: {
            metalness: 1,
            roughness: 1,
          },
        },
      ],
    },
  ],
  add: (obj) => set((state) => ({ ...state, scene: [...state.scene, obj] })),
}));
