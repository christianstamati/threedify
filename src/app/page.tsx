import LoginButton from "@/components/login-button";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="mb-3 text-6xl font-bold">This is Threedify.</h1>
        <p className="mb-4">One platform infinite configurations</p>
        <div>
          <LoginButton>Click to start!</LoginButton>
        </div>
      </div>
    </div>
  );
}
