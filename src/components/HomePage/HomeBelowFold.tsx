"use client";

import TemplateShow from "@/components/HomePage/TemplateShow";
import PhoneVideoSection from "@/components/HomePage/PhoneVideoSection";
import PricingSection from "@/components/HomePage/PricingSection";
import FAQ from "@/components/HomePage/FAQ";

/** Single client boundary so below-fold sections hydrate together (one JS chunk). */
export default function HomeBelowFold() {
  return (
    <>
      <TemplateShow />
      <PhoneVideoSection />
      <PricingSection />
      <FAQ />
    </>
  );
}
