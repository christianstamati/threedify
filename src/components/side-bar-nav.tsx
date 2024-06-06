"use client";

import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { navigation } from "@/lib/data";
import { usePathname } from "next/navigation";

function SideBarItem({
  name,
  icon,
}: {
  name: string;
  icon: React.ReactElement;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href="#"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
        >
          {React.cloneElement(icon, { className: "h-5 w-5" })}
          <span className="sr-only">{name}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">{name}</TooltipContent>
    </Tooltip>
  );
}

export function SideBarNav() {
  const pathname = usePathname();

  return navigation.map((item, index) => (
    <Tooltip key={index}>
      <TooltipTrigger asChild>
        <Link
          href="#"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
        >
          {React.cloneElement(item.icon, { className: "h-5 w-5" })}
          <span className="sr-only">{item.name}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">{item.name}</TooltipContent>
    </Tooltip>
  ));
}
