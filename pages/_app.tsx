import { Loader } from "@/components/Loader";
import { Navbar } from "@/components/layout";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

import localFont from "next/font/local";
import { Router } from "next/router";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

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

  Router.events.on("routeChangeStart", () => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", () => {
    setLoading(false);
  });

  return (
    <div className={`${poppins.className}`}>
      <SessionProvider session={session}>
        <Navbar />
        {loading && <Loader />}
        <Component {...pageProps} />
      </SessionProvider>
      <Toaster />
    </div>
  );
}
