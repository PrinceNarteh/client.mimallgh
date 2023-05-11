import React from "react";

export const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 z-50 bg-opacity-80">
      <div className="flex justify-center">
        <span className="circle bg-teal-500 animate-loader"></span>
        <span className="circle animation-delay-200 animate-loader"></span>
        <span className="circle animation-delay-400 animate-loader"></span>
      </div>
    </div>
  );
};
