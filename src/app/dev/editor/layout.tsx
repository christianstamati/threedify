import { Editor } from "@/app/dev/editor/editor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen">
      <Editor />
      {children}
    </div>
  );
}
