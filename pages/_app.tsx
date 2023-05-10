import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

import localFont from "next/font/local";
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
  return (
    <div className={`${poppins.className}`}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
      <Toaster />
    </div>
  );
}
