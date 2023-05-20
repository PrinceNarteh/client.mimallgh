import { Loader } from "@/components/Loader";
import { Navbar, SearchBar } from "@/components/layout";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import { store } from "@/store/store";
import localFont from "next/font/local";
import { Router, useRouter } from "next/router";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

let persistor = persistStore(store);

const poppins = localFont({
  src: [
    {
      path: "../assets/fonts/Poppins-Regular.ttf",
      weight: "400",
    },
    {
      path: "../assets/fonts/Poppins-SemiBold.ttf",
      weight: "600",
    },
  ],
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  Router.events.on("routeChangeStart", () => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", () => {
    setLoading(false);
  });

  return (
    <div className={`${poppins.className}`}>
      <SessionProvider session={session}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            {!router.pathname.startsWith("/auth") && (
              <>
                <SearchBar />
                <Navbar />
              </>
            )}
            {loading && <Loader />}
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </SessionProvider>
      <Toaster />
    </div>
  );
}
