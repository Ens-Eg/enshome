import { getLocale, getTranslations } from "next-intl/server";
import { BsCheckCircle } from "react-icons/bs";

export default async function HowItWorksSection() {
  const t = await getTranslations("Landing.howItWorks");
  const locale = await getLocale();
  const isRTL = locale === "ar";

  const steps = Array.from({ length: 3 }).map((_, i) => ({
    number: t(`steps.${i}.number`),
    title: t(`steps.${i}.title`),
    description: t(`steps.${i}.description`),
  }));

  return (
    <section
      id="how-it-works"
      className="bg-slate-50 py-16 dark:bg-[#15203c]/50 md:py-24"
    >
      <div className="container mx-auto px-6">
        <div
          className={`mb-12 text-center md:mb-16 ${isRTL ? "text-right md:text-center" : "text-left md:text-center"}`}
        >
          <h2 className="mb-4 text-4xl font-extrabold text-slate-900 dark:text-white">
            {t("title")}
          </h2>
          <p className="mx-auto max-w-xl text-lg font-medium text-slate-500 dark:text-slate-400">
            {t("description")}
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative rounded-[45px] border border-white bg-white p-10 shadow-xl dark:border-slate-800 dark:bg-[#15203c]"
            >
              <span className="absolute left-10 top-6 text-7xl font-black text-slate-100/80 dark:text-slate-800/50">
                {step.number}
              </span>
              <div className="relative z-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-r from-purple-600 to-purple-700 text-white shadow-xl dark:from-purple-500 dark:to-purple-600">
                  <BsCheckCircle size={28} />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-base font-medium leading-relaxed text-slate-500 dark:text-slate-400">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
