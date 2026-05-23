"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";

const HeroPhoneDesktop = dynamic(() => import("./HeroPhoneDesktop"), {
  ssr: false,
});

function subscribe(onChange: () => void) {
  const mq = window.matchMedia("(min-width: 1024px)");
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getDesktopSnapshot() {
  return window.matchMedia("(min-width: 1024px)").matches;
}

function getServerSnapshot() {
  return false;
}

type HeroPhoneDesktopGateProps = {
  loginQrUrl: string;
};

/**
 * Desktop-only hero phone animation. Must not mount on mobile — hidden
 * HeroPhoneDesktop still hydrates on iOS/Firefox and blocks painting below the hero.
 */
export default function HeroPhoneDesktopGate({
  loginQrUrl,
}: HeroPhoneDesktopGateProps) {
  const isDesktop = useSyncExternalStore(
    subscribe,
    getDesktopSnapshot,
    getServerSnapshot,
  );

  if (!isDesktop) return null;

  return (
    <div className="relative w-full">
      <HeroPhoneDesktop loginQrUrl={loginQrUrl} />
    </div>
  );
}
