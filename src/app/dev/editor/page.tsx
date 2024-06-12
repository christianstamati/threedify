"use client";
import { useEffect } from "react";
import { Editor } from "@/lib/editor";

export default function EditorPage() {
  useEffect(() => {
    const editor = new Editor();
    return () => {
      editor.clear();
    };
  });

  return null;
}
