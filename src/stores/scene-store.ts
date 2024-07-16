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

export const useSceneStore = create<SceneStore & Actions>()((set) => ({
  scene: [
    {
      type: "directionalLight",
      props: {
        position: [2.5, 8, 5],
        intensity: 1.5,
      },
    },
    {
      type: "mesh",
      props: {
        castShadow: true,
        position: [0, 0, 0],
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
  ],
  add: (obj) => set((state) => ({ ...state, scene: [...state.scene, obj] })),
}));
