"use client";

import "@/styles/globals.css";
import { poppins } from "@/utils/fonts";
import { Toaster } from "react-hot-toast";
import Providers from "../components/providers";

const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
