import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Background from "@/components/Global/Background";
import OptimizedImage from "@/components/ui/OptimizedImage";
import HeroPhoneDesktopGate from "@/components/HomePage/HeroPhoneDesktopGate";

type HeroSectionServerProps = {
  loginQrUrl: string;
};

export default async function HeroSectionServer({
  loginQrUrl,
}: HeroSectionServerProps) {
  const t = await getTranslations("heroSection");
  const locale = await getLocale();
  const isRTL = locale === "ar";
  const ArrowIcon = isRTL ? FiArrowLeft : FiArrowRight;

  return (
    <section
      id="hero"
      className="relative flex min-h-0 items-center overflow-x-clip bg-white pt-24 pb-12 dark:bg-[#0d1117] md:min-h-[92vh] md:overflow-hidden md:pt-30 md:pb-24"
    >
      <Background />
      <div className="container relative z-10 mx-auto px-6">
        <div
          className={`flex flex-col items-center gap-10 lg:flex-row lg:gap-20 ${
            isRTL ? "lg:flex-row-reverse" : ""
          }`}
        >
          <div className="order-1 w-full lg:order-2 lg:w-1/2">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50 px-5 py-2 text-sm font-bold text-purple-700 shadow-sm dark:border-purple-500/30 dark:bg-purple-500/20 dark:text-purple-400">
              <span>{t("badge")}</span>
              <span>🚀</span>
            </div>

            <h1 className="mb-6 text-2xl font-extrabold leading-[1.1] tracking-tight text-slate-900 dark:text-white sm:text-3xl lg:text-4xl">
              {t("title1")}{" "}
              <span className="bg-linear-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-indigo-400">
                {t("title2")}
              </span>
            </h1>

            <p className="mb-8 max-w-xl text-base font-medium leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
              {t("description")}
            </p>

            <div className="mb-8 flex flex-wrap items-center gap-4">
              <Link
                href="/auth/login"
                prefetch={false}
                className="flex items-center gap-3 rounded-full bg-linear-to-r from-purple-600 to-purple-700 px-8 py-4 text-base font-bold text-white shadow-2xl shadow-purple-300/40 transition-transform hover:scale-[1.02] dark:from-purple-500 dark:to-purple-600 dark:shadow-purple-900/50"
              >
                <span>{t("cta")}</span>
                <ArrowIcon size={22} />
              </Link>
            </div>
          </div>

          <div className="relative order-2 flex w-full justify-center lg:order-1 lg:w-1/2">
            <div className="relative w-full max-w-[280px] lg:max-w-none">
              <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-purple-700 opacity-15 blur-[100px] dark:from-purple-500 dark:to-purple-600 dark:opacity-25" />
              <div className="relative lg:hidden">
                <OptimizedImage
                  src="/images/temp/1sst.webp"
                  alt=""
                  width={280}
                  height={560}
                  priority
                  className="mx-auto w-full rounded-[40px] border-4 border-slate-800 shadow-2xl"
                />
              </div>
              <HeroPhoneDesktopGate loginQrUrl={loginQrUrl} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
