import { getLocale, getTranslations } from "next-intl/server";
import { features } from "@/modules/FeatureSection/data";
import type { FeatureCardProps } from "@/types/types";

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-[35px] border border-slate-100 bg-white p-8 shadow-xl shadow-slate-100/50 transition-all hover:shadow-2xl hover:shadow-purple-100/50 dark:border-slate-800 dark:bg-[#15203c] dark:shadow-slate-900/50 dark:hover:shadow-purple-900/50">
      <div className="absolute -right-12 -top-12 h-24 w-24 rounded-bl-[100px] bg-purple-50/50 transition-all group-hover:scale-150 group-hover:bg-purple-100/50 dark:bg-purple-500/10 dark:group-hover:bg-purple-500/20" />
      <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white dark:bg-purple-500/20 dark:text-purple-400">
        <Icon size={28} />
      </div>
      <h3 className="relative z-10 mb-4 text-[18px]! font-bold text-slate-900 dark:text-white">
        {title}
      </h3>
      <p className="relative z-10 text-base font-medium leading-relaxed text-slate-500 dark:text-slate-400">
        {description}
      </p>
    </div>
  );
}

export default async function FeaturesSection() {
  const t = await getTranslations("Landing.features");
  const locale = await getLocale();
  const isRTL = locale === "ar";

  const featuresList = features.map((feature) => ({
    id: feature.id,
    title: t(`items.${feature.translationKey}.title`),
    description: t(`items.${feature.translationKey}.description`),
    icon: feature.icon,
  }));

  return (
    <section id="features" className="bg-white py-16 dark:bg-[#0d1117] md:py-24">
      <div className="container mx-auto px-6">
        <div
          className={`mb-12 flex flex-col items-end justify-between gap-6 md:mb-16 md:flex-row ${
            isRTL ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="flex gap-2">
            <div className="h-1.5 w-12 rounded-full bg-purple-600" />
            <div className="h-1.5 w-4 rounded-full bg-purple-200 dark:bg-purple-800" />
            <div className="h-1.5 w-4 rounded-full bg-purple-200 dark:bg-purple-800" />
          </div>
          <div
            className={`max-w-2xl ${isRTL ? "text-right md:text-right" : "text-left md:text-left"}`}
          >
            <h2 className="mb-6 text-4xl font-extrabold text-slate-900 dark:text-white">
              {t("title")}
            </h2>
            <p className="text-md font-medium leading-relaxed text-slate-500 dark:text-slate-400">
              {t("description")}
            </p>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuresList.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
