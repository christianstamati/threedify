import { Home, Box } from "lucide-react";
import React from "react";

export const navigation = [
  {
    icon: React.createElement(Home),
    link: "/dashboard",
    name: "Dashboard",
  },
  {
    icon: React.createElement(Box),
    link: "/dashboard/projects",
    name: "Projects",
  },
] as const;
