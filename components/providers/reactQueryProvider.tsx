"use client";

import { queryClientOptions } from "@/utils/constants";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
  const [client] = useState(() => new QueryClient(queryClientOptions));
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default ReactQueryProvider;
