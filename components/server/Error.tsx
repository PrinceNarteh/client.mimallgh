import React from "react";
import Image from "next/image";

export const Error = () => {
  return (
    <div className="h-screen grid place-content-center">
      <Image
        priority
        src="/images/something-went-wrong.png"
        alt=""
        width={500}
        height={500}
        className="max-w-sm"
      />
    </div>
  );
};
