"use client";

import dynamic from "next/dynamic";

function SectionPlaceholder({ minHeight = 320 }: { minHeight?: number }) {
  return (
    <div
      className="animate-pulse bg-slate-100/70 dark:bg-slate-800/30"
      style={{ minHeight }}
      aria-hidden
    />
  );
}

const TemplateShow = dynamic(() => import("@/components/HomePage/TemplateShow"), {
  loading: () => <SectionPlaceholder minHeight={480} />,
});

const PhoneVideoSection = dynamic(
  () => import("@/components/HomePage/PhoneVideoSection"),
  { loading: () => <SectionPlaceholder minHeight={520} /> },
);

const PricingSection = dynamic(
  () => import("@/components/HomePage/PricingSection"),
  { loading: () => <SectionPlaceholder minHeight={640} /> },
);

const FAQ = dynamic(() => import("@/components/HomePage/FAQ"), {
  loading: () => <SectionPlaceholder minHeight={400} />,
});

export default function HomeDeferredSections() {
  return (
    <>
      <TemplateShow />
      <PhoneVideoSection />
      <PricingSection />
      <FAQ />
    </>
  );
}
