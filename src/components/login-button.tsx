"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ReactNode } from "react";
export default function LoginButton({ children }: { children?: ReactNode }) {
  return (
    <Link href={"/api/auth/signin?callbackUrl=/dashboard"}>
      <Button size={"lg"} className="mt-4">
        {children}
      </Button>
    </Link>
  );
}
