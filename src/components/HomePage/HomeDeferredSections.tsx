"use client";

import dynamic from "next/dynamic";
import LazyWhenVisible from "@/components/HomePage/LazyWhenVisible";

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
      <LazyWhenVisible minHeight={480}>
        <TemplateShow />
      </LazyWhenVisible>
      <LazyWhenVisible minHeight={520}>
        <PhoneVideoSection />
      </LazyWhenVisible>
      <LazyWhenVisible minHeight={640}>
        <PricingSection />
      </LazyWhenVisible>
      <LazyWhenVisible minHeight={400}>
        <FAQ />
      </LazyWhenVisible>
    </>
  );
}
