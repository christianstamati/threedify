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
import { cn } from "@/lib/utils";

export function SideBarNav() {
  const pathname = usePathname();

  return navigation.map((item, index) => (
    <Tooltip key={index}>
      <TooltipTrigger asChild>
        <Link
          href={item.link}
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded-lg text-accent-foreground  transition-colors hover:text-foreground md:h-8 md:w-8",
            {
              "bg-accent": pathname === item.link,
              "text-muted-foreground": pathname !== item.link,
            },
          )}
        >
          {React.cloneElement(item.icon, { className: "h-5 w-5" })}
          <span className="sr-only">{item.name}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">{item.name}</TooltipContent>
    </Tooltip>
  ));
}
