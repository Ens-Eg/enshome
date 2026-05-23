"use client";

import { useAuthHydrate } from "@/hooks/useAuthHydrate";

export default function AuthHydrate() {
  useAuthHydrate();
  return null;
}
