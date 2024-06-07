import { Button } from "@/components/ui/button";
import { LoginLink } from "@/components/login-link";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="mb-3 text-6xl font-bold">This is Threedify.</h1>
        <p className="mb-4">One platform infinite configurations</p>
        <div className="flex items-center justify-center gap-4">
          <LoginLink callback={"/dashboard"}>
            <Button size={"lg"}>Click to start!</Button>
          </LoginLink>
          <Link href={"/dashboard"}>
            <Button variant={"secondary"} size={"lg"}>
              Go to dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
