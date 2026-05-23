import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import GoogleAnalytics from "@/components/Global/GoogleAnalytics";
import GoogleTagManager from "@/components/Global/GoogleTagManager";
import GoogleAds from "@/components/Global/GoogleAds";

const appUrl = process.env.NEXT_PUBLIC_APP_URL;

export const metadata: Metadata = {
  metadataBase: appUrl ? new URL(appUrl) : undefined,
  title: "ENSmenu",
  description:
    "ENSmenu is a platform for creating digital menus for restaurants and cafes",
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "32x32" }],
    shortcut: "/favicon.ico",
  },
};

const themeScript = `
  (function() {
    try {
      var theme = localStorage.getItem('theme');
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {}
  })();
`;

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body suppressHydrationWarning>
        <Suspense fallback={null}>
          <GoogleTagManager />
          <GoogleAnalytics />
          <GoogleAds />
        </Suspense>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
