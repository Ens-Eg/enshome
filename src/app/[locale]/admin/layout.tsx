"use client";

import AppProgressBar from "@/components/Global/AppProgressBar";
import Layout from "@/components/Dashboard/Layout";
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
    <>
      <AppProgressBar />
      <AuthUserHydrate />
      <FcmTokenSync />
      <Layout segment={null} isAdmin={true}>
        {children}
      </Layout>
    </>
  );
}
