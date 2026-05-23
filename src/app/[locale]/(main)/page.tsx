import type { Metadata } from "next";
import { preload } from "react-dom";
import { getTranslations } from "next-intl/server";
import { buildSeoMetadata } from "@/lib/seo";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import HeroSectionServer from "@/components/HomePage/sections/HeroSectionServer";
import FeaturesSection from "@/components/HomePage/sections/FeaturesSection";
import HowItWorksSection from "@/components/HomePage/sections/HowItWorksSection";
import HomeDeferredSections from "@/components/HomePage/HomeDeferredSections";
import CtaSection from "@/components/HomePage/sections/CtaSection";
import FooterSectionServer from "@/components/HomePage/sections/FooterSectionServer";

const HOME_WHATSAPP_URL = "https://wa.me/201500800050";
type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return buildSeoMetadata({
    locale,
    path: "",
    title: t("home.title"),
    description: t("home.description"),
    keywords: t("home.keywords"),
    coreKeywords: t("coreKeywords"),
    siteName: t("siteName"),
    robots: "index, follow",
  });
}

function buildLoginQrUrl(locale: string): string {
  const base = process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "");
  const path = locale === "ar" ? "/auth/login" : "/en/auth/login";
  if (base) return `${base}${path}`;
  return path;
}

async function Page({ params }: Props) {
  const { locale } = await params;
  preload("/images/temp/1sst.webp", {
    as: "image",
    fetchPriority: "high",
  });
  const t = await getTranslations({ locale, namespace: "personalProfile" });
  const loginQrUrl = buildLoginQrUrl(locale);

  return (
    <>
      <HeroSectionServer loginQrUrl={loginQrUrl} />
      <FeaturesSection />
      <HowItWorksSection />
      <HomeDeferredSections />
      <CtaSection />
      <FooterSectionServer />
      <a
        href={HOME_WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("contactWhatsApp")}
        className="fixed bottom-4 left-4 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl focus-visible:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
      >
        <WhatsAppIcon className="size-8" />
      </a>
    </>
  );
}

export default Page;
