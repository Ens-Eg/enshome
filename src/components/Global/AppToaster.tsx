"use client";

import dynamic from "next/dynamic";
import { useLocale } from "next-intl";
import "react-toastify/dist/ReactToastify.css";

const ToastContainer = dynamic(
  () => import("react-toastify").then((m) => m.ToastContainer),
  { ssr: false },
);

export default function AppToaster() {
  const locale = useLocale();

  return (
    <ToastContainer
      position={locale === "ar" ? "top-left" : "top-right"}
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={locale === "ar"}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
}
