"use client";
import { useEffect, useRef } from "react";
import { Editor } from "@/lib/editor";
import { cn } from "@/lib/utils";

export function EditorComponent({ className }: { className?: string }) {
  const containerRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current!;
    const editor = new Editor(container);
    return () => {
      editor.clear();
    };
  });
  return (
    <div ref={containerRef} className={cn("h-full w-full", className)}></div>
  );
}
