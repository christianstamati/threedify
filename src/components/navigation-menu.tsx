"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { clsx } from "clsx";
import { NavigationItem } from "@/lib/types";

export default function NavigationMenu({
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
      {item.icon}
      {item.name}
    </Link>
  ));
}
