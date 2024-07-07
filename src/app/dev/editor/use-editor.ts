import { create } from "zustand";

type SceneItem = {
  id: string;
  name: string;
  position: number[];
  rotation: number[];
  scale: number[];
  path: string;
};

type Scene = {
  objects: SceneItem[];
};

// open scene
interface CurrentScene {
  scene: Scene;
  add: (obj: SceneItem) => void;
}

export const useEditor = create<CurrentScene>((set) => ({
  scene: { objects: [] },
  add: (item) =>
    set((state) => ({
      scene: {
        ...state.scene,
        objects: [...state.scene.objects, item],
      },
    })),
}));
