"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const AuthHydrate = dynamic(() => import("./AuthHydrate"), { ssr: false });

export default function DeferredAuthHydrate() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const enable = () => setReady(true);
    const idle = window.requestIdleCallback?.(enable, { timeout: 2500 });
    if (idle !== undefined) {
      return () => window.cancelIdleCallback?.(idle);
    }
    const timer = setTimeout(enable, 1);
    return () => clearTimeout(timer);
  }, []);

  return ready ? <AuthHydrate /> : null;
}
