"use client";

import { Provider } from "react-redux";
import { store } from "@/store/store";
import useCatchError from "@/hooks/useCatchError";
import DeferredAuthHydrate from "./DeferredAuthHydrate";
import AppProgressBar from "./AppProgressBar";
import Header from "./Header";

/**
 * Header + auth + toasts setup only. Must NOT wrap page content — on iOS,
 * nesting the full page inside a client Provider delays painting below the hero.
 */
export default function MainChrome() {
  useCatchError();

  return (
    <Provider store={store}>
      <DeferredAuthHydrate />
      <AppProgressBar />
      <Header />
    </Provider>
  );
}
