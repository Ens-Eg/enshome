import type { NextConfig } from "next";
import path from "node:path";
import createNextIntlPlugin from "next-intl/plugin";
import bundleAnalyzer from "@next/bundle-analyzer";

const modernPolyfill = path.join(process.cwd(), "src/lib/modern-polyfill.js");
const nextPolyfillModule = path.join(
  process.cwd(),
  "node_modules/next/dist/build/polyfills/polyfill-module.js",
);

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  reactStrictMode: false,
  experimental: {
    optimizePackageImports: [
      "react-icons",
      "react-toastify",
      "react-redux",
      "@reduxjs/toolkit",
      "date-fns",
    ],
  },
  // Next.js always bundles polyfill-module (~14 KiB) unless aliased (vercel/next.js#86785).
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        [nextPolyfillModule]: modernPolyfill,
        "next/dist/build/polyfills/polyfill-module": modernPolyfill,
        "next/dist/build/polyfills/polyfill-module.js": modernPolyfill,
      };
    }
    return config;
  },
  turbopack: {
    resolveAlias: {
      [nextPolyfillModule]: modernPolyfill,
      "next/dist/build/polyfills/polyfill-module": modernPolyfill,
      "next/dist/build/polyfills/polyfill-module.js": modernPolyfill,
    },
  },
};

const withNextIntl = createNextIntlPlugin();

export default withBundleAnalyzer(withNextIntl(nextConfig));
