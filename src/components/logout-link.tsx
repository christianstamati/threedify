import { ReactNode } from "react";
import Link from "next/link";
export function LogoutLink({ children }: { children: ReactNode }) {
  return <Link href={`/api/auth/signout?callbackUrl=/`}>{children}</Link>;
}
