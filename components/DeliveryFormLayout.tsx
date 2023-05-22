import React from "react";
import DeliveryLayout from "./layout/DeliveryLayout";

const DeliveryFormLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <DeliveryLayout>
      <div className="m-3 bg-white px-3 py-4 rounded-md">
        <div className="w-full md:p-5 col-span-3">{children}</div>
        <div
          className="hidden lg:block lg:col-span-2 bg-[url('/images/rider.jpg')] rounded-md"
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </DeliveryLayout>
  );
};

export default DeliveryFormLayout;
