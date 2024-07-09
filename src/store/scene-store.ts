import { create } from "zustand";

type Object3D = {
  type: string;
  props: {};
  children: Object3D[];
};

type SceneStore = {
  objects: Object3D[];
};
type Actions = {
  add: (obj: Object3D) => void;
};

export const useSceneStore = create<SceneStore & Actions>()((set) => ({
  objects: [
    {
      type: "mesh",
      props: {},
      children: [
        {
          type: "boxGeometry",
          props: {},
          children: [],
        },
      ],
    },
  ],
  add: (obj) =>
    set((state) => ({ ...state, objects: [...state.objects, obj] })),
}));
