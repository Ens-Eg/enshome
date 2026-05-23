"use client";

import { Provider } from "react-redux";
import { store } from "@/store/store";
import useCatchError from "@/hooks/useCatchError";
import AuthHydrate from "./AuthHydrate";

/** Full-tree provider for auth / dashboard / admin (forms + layout need Redux). */
export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  useCatchError();

  return (
    <Provider store={store}>
      <AuthHydrate />
      {children}
    </Provider>
  );
}
