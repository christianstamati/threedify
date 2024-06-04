import { ReactNode } from "react";
import Link from "next/link";

export function LoginLink({
  children,
  callback,
}: {
  children: ReactNode;
  callback: string;
}) {
  return (
    <Link href={`/api/auth/signin?callbackUrl=${callback}`}>{children}</Link>
  );
}
