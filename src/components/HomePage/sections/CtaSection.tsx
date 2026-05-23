import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function CtaSection() {
  const t = await getTranslations("Landing.cta");
  const tFooter = await getTranslations("Landing.footer");
  const locale = await getLocale();
  const isRTL = locale === "ar";

  return (
    <section id="contact" className="bg-white py-16 dark:bg-[#0d1117] md:py-20">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-[60px] bg-linear-to-r from-purple-600 to-purple-700 p-10 text-center text-white shadow-[0_30px_60px_-15px_rgba(124,58,237,0.5)] dark:from-purple-500 dark:to-purple-600 dark:shadow-[0_30px_60px_-15px_rgba(168,85,247,0.4)] lg:p-20">
          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <h2 className="relative z-10 mb-8 text-4xl font-black">{t("title")}</h2>
          <p className="relative z-10 mx-auto mb-10 max-w-2xl text-md font-medium leading-relaxed text-purple-100 dark:text-purple-200">
            {t("description")}
          </p>
          <div
            className={`relative z-10 flex flex-wrap justify-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}
          >
            <Link
              href="/auth/login"
              prefetch={false}
              className="inline-block rounded-full bg-white px-10 py-5 text-md font-black text-purple-700 shadow-2xl transition-all hover:bg-purple-50"
            >
              {t("button")}
            </Link>
            <a
              href="#footer"
              className="rounded-full border border-purple-400 bg-purple-800/50 px-10 py-5 text-md font-black text-white backdrop-blur-md transition-all hover:bg-purple-700/50"
            >
              {tFooter("contactUs")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
