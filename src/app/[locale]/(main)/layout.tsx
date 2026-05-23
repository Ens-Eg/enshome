import MainChrome from "@/components/Global/MainChrome";
import LazyAppToasterLocale from "@/components/Global/LazyAppToasterLocale";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MainChrome />
      <LazyAppToasterLocale />
      {children}
    </>
  );
}
