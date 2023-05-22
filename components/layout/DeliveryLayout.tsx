import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import deliveryIcon from "../../assets/svgs/delivery-icon.svg";

const DeliveryLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="relative">
        <div className="h-24 hidden relative md:flex justify-center">
          <Image
            src={"/images/delivery-banner.jpg"}
            fill
            alt=""
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="bg-[#165474] md:absolute z-10 py-2 flex flex-col md:flex-row justify-between items-start md:items-center pr-5 md:h-16 md:w-11/12 m-auto left-0 right-0 bottom-6 md:-bottom-8">
          <div className="bg-white h-full rounded-r-full flex items-center py-2 px-4 shrink-0">
            <Image src={deliveryIcon} alt="" width={50} height={50} />
            <h5 className="ml-3 font-bold text-lg text-[#165474]">
              WINIKE DISPATCH
            </h5>
          </div>
          <div className="text-white flex px-2 pl-5 justify-evenly items-center text-sm py-2 mt-2 w-full">
            <Link href="/">Home</Link>
            <Link href="#">Services</Link>
            <Link href="#" className="">
              Working Hours
            </Link>
            <Link href="#">More</Link>
            <IoSearchOutline className="text-white text-2xl hidden md:block lg:hidden" />
          </div>

          <div className="bg-white hidden lg:block py-1 px-4 rounded-full">
            <input type="text" placeholder="Search all categories..." />
          </div>
        </div>
      </div>
      <div className="min-h-[calc(100vh_-_110px)] md:min-h-[calc(100vh_-_98px)] py-2 bg-gray-200 md:flex md:justify-center md:items-center lg:block md:pt-10 lg:pt-3 p-3 cursor-pointer">
        {children}
      </div>
    </div>
  );
};

export default DeliveryLayout;
