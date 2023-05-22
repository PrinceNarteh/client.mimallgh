import React from "react";

const DeliveryFormLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="h-screen grid place-content-center p-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-5xl w-full shadow-md rounded-lg p-5 border">
          <div className="w-full pr-5">{children}</div>
          <div
            className="hidden lg:block bg-[url('/images/rider.jpg')] rounded-md"
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
