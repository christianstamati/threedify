"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { clsx } from "clsx";
import { NavigationItem } from "@/lib/types";
import React from "react";
import { Home, Package2 } from "lucide-react";

export function DesktopNavigation({
  navigation,
}: {
  navigation: readonly NavigationItem[];
}) {
  const pathname = usePathname();
  return navigation.map((item, index) => (
    <Link
      key={index}
      href={item.link}
      className={clsx(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
        {
          "bg-muted": pathname === item.link,
          "text-primary": pathname === item.link,
        },
      )}
    >
      {React.cloneElement(item.icon, { className: "h-4 w-4" })}
      {item.name}
    </Link>
  ));
}

export function MobileNavigation({
  navigation,
}: {
  navigation: readonly NavigationItem[];
}) {
  const pathname = usePathname();
  return navigation.map((item, index) => (
    <Link
      key={index}
      href={item.link}
      className={clsx(
        "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground",
        {
          "bg-muted": pathname === item.link,
          "text-primary": pathname === item.link,
        },
      )}
    >
      {React.cloneElement(item.icon, { className: "h-5 w-5" })}
      {item.name}
    </Link>
  ));
}
