"use client";

import { useLocale } from "next-intl";
import AppToaster from "./AppToaster";

export default function AppToasterLocale() {
  const locale = useLocale();
  return <AppToaster locale={locale} />;
}
