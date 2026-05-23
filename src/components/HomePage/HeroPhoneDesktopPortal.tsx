"use client";

import { useEffect, useState, type ComponentType } from "react";
import { createPortal } from "react-dom";

type HeroPhoneDesktopPortalProps = {
  loginQrUrl: string;
};

/**
 * Desktop hero phone mounted at the end of the page. A client boundary inside
 * #hero blocks iOS WebKit from painting sections below until hydration finishes.
 */
export default function HeroPhoneDesktopPortal({
  loginQrUrl,
}: HeroPhoneDesktopPortalProps) {
  const [mount, setMount] = useState<HTMLElement | null>(null);
  const [Phone, setPhone] = useState<ComponentType<{
    loginQrUrl: string;
  }> | null>(null);

  useEffect(() => {
    if (!window.matchMedia("(min-width: 1024px)").matches) return;

    setMount(document.getElementById("hero-phone-mount"));

    let cancelled = false;
    import("./HeroPhoneDesktop").then((mod) => {
      if (!cancelled) setPhone(() => mod.default);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  if (!mount || !Phone) return null;

  return createPortal(<Phone loginQrUrl={loginQrUrl} />, mount);
}
