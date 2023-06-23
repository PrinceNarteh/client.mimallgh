import Image from "next/image";
import React from "react";

const WebStoreFooter = () => {
  return (
    <footer className="footer before:-top-9 before:h-20 relative bg-gray-800 text-white overflow-hidden">
      <div className="w-11/12 flex flex-col mx-auto text-xl gap-5 pt-28 pb-10">
        <div className="flex justify-evenly gap-5 flex-wrap">
          <p>About us</p>
          <p>Pricing Policies</p>
          <p>Pricing Policies</p>
          <p>Customer Service</p>
          <p>Services</p>
          <p>Tutorial Videos</p>
          <p>Follow Us</p>
        </div>
        <div className="flex my-3 flex-col items-center">
          <p className="mb-3">Payment Methods:</p>
          <div className="flex gap-2">
            <div className="w-20 h-14">
              <Image
                src="/images/mtn-momo.png"
                width={200}
                height={100}
                alt=""
                className="bg-white"
              />
            </div>
            <div className="w-20 h-14">
              <Image
                src="/images/vodafone-cash.png"
                width={100}
                height={50}
                alt=""
                className="bg-white"
              />
            </div>
            <Image
              src="/images/airteltigo-money.jpg"
              width={100}
              height={0}
              alt=""
              className="bg-white"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <span className="inline-block pr-3">Powered By:</span>
          <Image src="/images/name-logo.png" alt="" width={100} height={200} />
        </div>
      </div>
    </footer>
  );
};

export default WebStoreFooter;
