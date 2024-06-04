import Header from "@/components/header";
import SideNavigation from "@/components/side-navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid min-h-svh w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <SideNavigation />
      <div className="flex flex-col">
        <Header />
        {children}
      </div>
    </div>
  );
}
