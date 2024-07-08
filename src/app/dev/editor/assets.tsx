"use client";
import React from "react";
import { useEditor } from "@/app/dev/editor/use-editor";
import { Button } from "@/components/ui/button";

function Assets() {
  const add = useEditor((state) => state.add);

  return (
    <div>
      <Button
        onClick={() => {
          add({
            id: "12345",
            name: "cube.glb",
            path: "/static/models/cube.glb",
            position: [0, 0, 0],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          });
        }}
      >
        Add Box
      </Button>

      <Button
        onClick={() => {
          add({
            id: "123",
            name: "duck.glb",
            path: "/static/models/duck.glb",
            position: [0, 0, 0],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          });
        }}
      >
        Add Duck
      </Button>
    </div>
  );
}

export default Assets;
