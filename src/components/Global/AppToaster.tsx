"use client";

import dynamic from "next/dynamic";
import "react-toastify/dist/ReactToastify.css";

const ToastContainer = dynamic(
  () => import("react-toastify").then((m) => m.ToastContainer),
  { ssr: false },
);

type AppToasterProps = {
  locale: string;
};

export default function AppToaster({ locale }: AppToasterProps) {
  const isRtl = locale === "ar";

  return (
    <ToastContainer
      position={isRtl ? "top-left" : "top-right"}
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={isRtl}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
}
