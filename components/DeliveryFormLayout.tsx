import React from "react";
import DeliveryLayout from "./layout/DeliveryLayout";

const DeliveryFormLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <DeliveryLayout>
      <div className="m-3 bg-white px-3 py-4 rounded-md md:w-9/12 mx-auto lg:w-8/12 lg:mt-10 lg:grid lg:grid-cols-5">
        <div className="w-full md:px-5 col-span-3">{children}</div>
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
