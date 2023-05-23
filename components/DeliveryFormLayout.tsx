import React from "react";
import DeliveryLayout from "./layout/DeliveryLayout";

const DeliveryFormLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <DeliveryLayout>
      <div className="p-5 md:pt-14 w-full md:flex md:items-center h-full">
        <div className="bg-white px-3 py-4 rounded-md md:w-9/12 mx-auto lg:w-8/12  lg:grid lg:grid-cols-5">
          <div className="w-full md:px-5 col-span-3">{children}</div>
          <div
            className="hidden lg:block lg:col-span-2 bg-[url('/images/rider.jpg')] rounded-md"
            style={{
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      </div>
    </DeliveryLayout>
  );
};

export default DeliveryFormLayout;
