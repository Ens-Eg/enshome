"use client";

import dynamic from "next/dynamic";

const AppToasterLocale = dynamic(
  () => import("@/components/Global/AppToasterLocale"),
  { ssr: false },
);

export default function LazyAppToasterLocale() {
  return <AppToasterLocale />;
}
