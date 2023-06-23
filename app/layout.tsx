"use client";

import { Loader, Navbar, SearchBar } from "@/components";
import { store } from "@/store/store";
import { poppins } from "@/utils/fonts";
import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";
import { Router } from "next/router";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import "./globals.css";
import NextAuthSessionProvider from "./providers/sessionProvider";

let persistor = persistStore(store);

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  Router.events.on("routeChangeStart", () => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", () => {
    setLoading(false);
  });

  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextAuthSessionProvider>
          <Provider store={store}>
            <PersistGate persistor={persistor}>
              <>
                {!pathname.startsWith("/auth") &&
                !pathname.startsWith("/delivery") ? (
                  <>
                    <SearchBar />
                    <Navbar />
                  </>
                ) : null}
                {children}
                {loading && <Loader />}
              </>
            </PersistGate>
          </Provider>
        </NextAuthSessionProvider>
        <Toaster />
      </body>
    </html>
  );
}
