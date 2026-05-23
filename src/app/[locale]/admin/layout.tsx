"use client";

import AppProviders from "@/components/Global/AppProviders";
import AppProgressBar from "@/components/Global/AppProgressBar";
import AppToasterLocale from "@/components/Global/AppToasterLocale";
import Layout from "@/components/Dashboard/Layout";
import "@/styles/dashboard-utilities.css";
import "@/styles/vendor-forms.css";
import "@/styles/dashboard-forms.css";
import { AuthUserHydrate } from "@/components/Dashboard/AuthUserHydrate";
import { FcmTokenSync } from "@/components/Dashboard/FcmTokenSync";
import { type ReactNode } from "react";

interface ParentLayoutProps {
  children: ReactNode;
}

export default function ParentLayout({ children }: ParentLayoutProps) {
  return (
    <AppProviders>
      <AppToasterLocale />
      <AppProgressBar />
      <AuthUserHydrate />
      <FcmTokenSync />
      <Layout segment={null} isAdmin={true}>
        {children}
      </Layout>
    </AppProviders>
  );
}
