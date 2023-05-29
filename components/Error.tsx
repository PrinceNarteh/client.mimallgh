import React from "react";
import somethingWentWrong from "../assets/images/something-went-wrong.png";
import Image from "next/image";

export const Error = () => {
  return (
    <div className="h-screen grid place-content-center">
      <Image priority src={somethingWentWrong} alt="" className="max-w-sm" />
    </div>
  );
};
