"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function LoginButton() {
  return (
    <Link href={"/api/auth/signin?callbackUrl=/dashboard"}>
      <Button className="mt-4">Login</Button>
    </Link>
  );
}
