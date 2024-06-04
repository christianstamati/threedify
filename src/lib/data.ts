import { Home, Box, LucideProps } from "lucide-react";
import React, { ReactNode } from "react";

function createIcon(type: React.FunctionComponent<LucideProps>) {
  return React.createElement(type, { className: "h-4 w-4" }) as ReactNode;
}

export const navigation = [
  {
    icon: createIcon(Home),
    link: "/app",
    name: "Dashboard",
  },
  {
    icon: createIcon(Box),
    link: "/app/projects",
    name: "Projects",
  },
] as const;
