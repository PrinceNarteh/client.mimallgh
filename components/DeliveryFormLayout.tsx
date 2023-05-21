import React from "react";

const DeliveryFormLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="h-screen grid place-content-center p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl w-full shadow-md rounded-lg p-5 border">
          <div>{children}</div>
          <div className="hidden md:block">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            molestias quae ad quod aperiam, fugit distinctio quidem eligendi qui
            aspernatur, ratione quo sint. Nemo rerum, molestiae ad ducimus quia
            autem?
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryFormLayout;
