import React from "react";
// #165474 - navbar
// #c8b600 -
const Delivery = () => {
  return (
    <div>
      <div className="bg-teal-500 h-32 relative flex justify-center items-center">
        <div className="absolute bg-blue-500 h-16 w-11/12 mx-auto -bottom-8"></div>
      </div>
      <div className="h-screen bg-slate-500"></div>
      <div className=" bg-gray-300">
        <div className="flex flex-col justify-center w-11/12 mx-auto mb-32">
          <div className="bg-white p-5 w-full mx-auto text-center -translate-y-16 text-blue-500">
            <h3 className="text-4xl font-bold underline mb-2">What We Do</h3>
            <p className="text-3xl">
              We <span className="text-orange-500 font-bold">CONNECT</span> you
              to Sellers, you{" "}
              <span className="text-orange-500 font-bold">ORDER</span>, We{" "}
              <span className="text-orange-500 font-bold">DELIVER</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-10 justify-center">
            <div className="w-[300px] h-[300px] bg-teal-400"></div>
            <div className="w-[300px] h-[300px] bg-teal-400"></div>
            <div className="w-[300px] h-[300px] bg-teal-400"></div>
            <div className="w-[300px] h-[300px] bg-teal-400"></div>
            <div className="w-[300px] h-[300px] bg-teal-400"></div>
            <div className="w-[300px] h-[300px] bg-teal-400"></div>
            <div className="w-[300px] h-[300px] bg-teal-400"></div>
            <div className="w-[300px] h-[300px] bg-teal-400"></div>
            <div className="w-[300px] h-[300px] bg-teal-400"></div>
          </div>
        </div>

        <div className="bg-white p-5 w-11/12 mx-auto text-center -translate-y-16 text-blue-500 shadow-md">
          <h3 className="text-4xl font-bold mb-2">OTHER SERVICES</h3>
        </div>

        <div className="flex flex-col justify-center w-11/12 mx-auto mb-32">
          <div className="flex flex-wrap gap-10 justify-center">
            <div className="w-72 h-72 bg-teal-400"></div>
            <div className="w-72 h-72 bg-teal-400"></div>
            <div className="w-72 h-72 bg-teal-400"></div>
            <div className="w-72 h-72 bg-teal-400"></div>
          </div>
        </div>

        <div className="bg-white p-5 w-6/12 mx-auto flex justify-evenly text-2xl font-bold text-center -translate-y-16 text-blue-500 shadow-md">
          <p>Call: 024 123 4567</p>
          <p>Call: 050 123 4567</p>
        </div>
      </div>

      <div className="w-11/12 flex mx-auto justify-between text-xl gap-5 py-5">
        <p>About us</p>
        <p>Pricing Policies</p>
        <p>Pricing Policies</p>
        <p>Customer Service</p>
        <p>Services</p>
        <p>Tutorial Videos</p>
        <p>Follow Us</p>
      </div>
    </div>
  );
};

export default Delivery;
