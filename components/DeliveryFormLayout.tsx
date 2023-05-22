import React from "react";

const DeliveryFormLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="h-screen flex justify-center items-center p-5">
        <div className="grid grid-cols-1 lg:grid-cols-5 md:max-w-2xl lg:max-w-4xl w-full shadow-md rounded-lg p-3 pl-5 border">
          <div className="w-full pr-5 col-span-3">{children}</div>
          <div
            className="hidden lg:block lg:col-span-2 bg-[url('/images/rider.jpg')] rounded-md"
            style={{
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryFormLayout;
