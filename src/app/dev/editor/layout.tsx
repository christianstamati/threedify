import { EditorComponent } from "@/app/dev/editor/editor-component";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen">
      <EditorComponent className="h-full w-full" />
      {children}
    </div>
  );
}
