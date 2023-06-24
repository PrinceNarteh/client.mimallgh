"use client";

import { Navbar, SearchBar } from "@/components";
import { poppins } from "@/utils/fonts";
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";
import Providers from "../components/providers";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          {!pathname.startsWith("/auth") &&
          !pathname.startsWith("/delivery") ? (
            <>
              <SearchBar />
              <Navbar />
            </>
          ) : null}
          {children}
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
