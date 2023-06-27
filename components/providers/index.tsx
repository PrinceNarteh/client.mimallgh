"use client";

import React from "react";
import NextAuthSessionProvider from "./sessionProvider";
import ReduxProvider from "./reduxProvider";
import ReactQueryProvider from "./reactQueryProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextAuthSessionProvider>
      <ReduxProvider>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </ReduxProvider>
    </NextAuthSessionProvider>
  );
};

export default Providers;
