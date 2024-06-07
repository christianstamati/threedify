"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export function BreadcrumbNav() {
  const pathname = usePathname();

  const paths = pathname.split("/").filter((path) => path);

  const breadcrumbPaths = paths.map(
    (path, index) => "/" + paths.slice(0, index + 1).join("/"),
  );

  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        {breadcrumbPaths.map((path, index) => {
          const name = paths[index];

          if (index === breadcrumbPaths.length - 1) {
            return (
              <BreadcrumbItem key={index}>
                <BreadcrumbPage className="capitalize">{name}</BreadcrumbPage>
              </BreadcrumbItem>
            );
          } else {
            return (
              <div key={index} className={"flex items-center gap-x-3"}>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link className="capitalize" href={path}>
                      {name}
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </div>
            );
          }
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
