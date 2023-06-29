"use client";

import React from "react";
import { Hydrate as RQHydrate, HydrateProps } from "@tanstack/react-query";

const ReactQueryHydrate = (props: HydrateProps) => {
  return <RQHydrate {...props} />;
};

export default ReactQueryHydrate;
