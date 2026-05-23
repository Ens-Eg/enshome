import AppProgressBar from "@/components/Global/AppProgressBar";
import Header from "@/components/Global/Header";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AppProgressBar />
      <Header />
      {children}
    </>
  );
}
