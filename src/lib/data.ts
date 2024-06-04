import { Home, Box } from "lucide-react";
import React from "react";

export const navigation = [
  {
    icon: React.createElement(Home),
    link: "/app",
    name: "Dashboard",
  },
  {
    icon: React.createElement(Box),
    link: "/app/projects",
    name: "Projects",
  },
] as const;
