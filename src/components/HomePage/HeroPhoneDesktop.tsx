"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import {
  FiMenu as Menu,
  FiShoppingCart as ShoppingCart,
} from "react-icons/fi";
import { BsQrCode } from "react-icons/bs";
import { menuItemsData } from "@/modules/menuItems";
import { MenuItem } from "@/types/types";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { StyledQrCode } from "@/components/Global/StyledQrCode";

type HeroPhoneDesktopProps = {
  loginQrUrl: string;
};

export default function HeroPhoneDesktop({ loginQrUrl }: HeroPhoneDesktopProps) {
  const [step, setStep] = useState(0);
  const t = useTranslations("heroSection");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const [qrValue, setQrValue] = useState(loginQrUrl);

  useEffect(() => {
    if (loginQrUrl.startsWith("http")) {
      setQrValue(loginQrUrl);
      return;
    }
    setQrValue(`${window.location.origin}${loginQrUrl}`);
  }, [loginQrUrl]);

  useEffect(() => {
    const timer = setInterval(() => setStep((prev) => (prev + 1) % 3), 4500);
    return () => clearInterval(timer);
  }, []);

  const menuItems: MenuItem[] = menuItemsData.map((item) => ({
    name: isRTL ? item.nameAr : item.nameEn,
    price: item.price,
    image: item.image,
    desc: isRTL ? item.descAr : item.descEn,
    category: item.category,
  }));

  const categories = isRTL
    ? ["الكل", "مشروبات", "مخبوزات", "حلويات"]
    : ["All", "Drinks", "Bakery", "Desserts"];

  return (
    <div
      className="relative aspect-[340/680] w-full max-w-[340px] overflow-hidden rounded-[50px] border-12 border-slate-800 bg-slate-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3),0_30px_60px_-30px_rgba(124,58,237,0.3)] dark:border-slate-900 dark:bg-slate-950"
      style={{ height: "680px", minHeight: "680px" }}
    >
      <div className="absolute left-1/2 top-3 z-50 flex h-6 w-24 -translate-x-1/2 items-center justify-center gap-1.5 rounded-full border border-white/5 bg-slate-800 shadow-sm dark:bg-slate-900">
        <div className="size-1.5 rounded-full bg-slate-700 dark:bg-slate-800" />
        <div className="h-1 w-8 rounded-full bg-slate-700 opacity-40 dark:bg-slate-800" />
      </div>
      <div className="relative h-full w-full overflow-hidden bg-white dark:bg-gray-50">
        {step === 0 && (
          <div
            key="qr"
            className="flex h-full flex-col items-center justify-center bg-purple-50 p-8 dark:bg-purple-100"
          >
            <div className="mb-8 flex min-h-[180px] items-center justify-center rounded-[40px] border-2 border-white/10 bg-white p-5 shadow-2xl">
              <StyledQrCode
                value={qrValue}
                size={280}
                displaySize={160}
                className="rounded-xl"
              />
            </div>
            <p className="text-center text-lg font-bold leading-relaxed text-purple-700">
              {t("scanCodeToBrowse")}
            </p>
          </div>
        )}
        {step === 1 && (
          <div
            key="scanning"
            className="relative flex h-full flex-col items-center justify-center bg-black p-8"
          >
            <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-[40px] border-2 border-white/20 bg-black p-3">
              <BsQrCode size={140} className="text-white/40" />
              <div className="animate-hero-qr-scan pointer-events-none absolute left-6 right-6 top-0 z-10 h-1 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.9)]" />
            </div>
            <p className="mt-8 text-lg font-medium tracking-wide text-white">
              {t("scanningMenu")}
            </p>
          </div>
        )}
        {step === 2 && (
          <div
            key="menu"
            className="flex h-full flex-col bg-white"
            dir={isRTL ? "rtl" : "ltr"}
          >
            <div className="rounded-b-[40px] bg-linear-to-br from-purple-600 to-indigo-700 p-7 pt-10 text-white shadow-lg">
              <div className="mb-4 flex items-center justify-between">
                <Menu size={22} />
                <p className="text-sm font-black tracking-tight">
                  {t("businessName")}
                </p>
                <ShoppingCart size={22} />
              </div>
            </div>
            <div className="no-scrollbar flex gap-3 overflow-x-auto px-7 py-4">
              {categories.map((cat, i) => (
                <div
                  key={i}
                  className={`whitespace-nowrap rounded-full px-4 py-1.5 text-[11px] font-bold ${
                    i === 0
                      ? "bg-purple-600 text-white shadow-md"
                      : "border border-slate-100 bg-slate-50 text-slate-500"
                  }`}
                >
                  {cat}
                </div>
              ))}
            </div>
            <div className="no-scrollbar flex-1 space-y-4 overflow-y-auto px-7 pb-8">
              {menuItems.map((item, i) => (
                <div
                  key={i}
                  className="flex cursor-pointer items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-3 transition-all hover:border-purple-100 hover:bg-white"
                >
                  <div className="relative h-14 w-14">
                    <OptimizedImage
                      src={item.image}
                      alt={item.name}
                      width={56}
                      height={56}
                      className="h-full w-full rounded-xl object-cover shadow-sm"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-md font-black text-slate-800">
                      {item.name}
                    </h4>
                    <p className="line-clamp-1 text-[10px] text-slate-500">
                      {item.desc}
                    </p>
                  </div>
                  <div className="rounded-lg border border-purple-50 bg-white px-2 py-1 text-[12px] font-black text-purple-600 shadow-sm">
                    {item.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
