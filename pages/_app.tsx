import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${poppins.className}`}>
      <Component {...pageProps} />;
    </div>
  );
}
