"use client";

import React from "react";
import NextAuthSessionProvider from "./sessionProvider";
import ReduxProvider from "./reduxProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextAuthSessionProvider>
      <ReduxProvider>{children}</ReduxProvider>
    </NextAuthSessionProvider>
  );
};

export default Providers;
