import axios from "@/lib/axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { IoMdHome } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";

export const SearchBar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() => {}, [search]);

  return (
    <div
      className={`fixed z-50 w-full cursor-pointer px-5 py-3 gap-2 shadow-lg`}
    >
      <Image
        src="/images/search-bg.jpg"
        className="absolute object-cover duration-500"
        fill={true}
        alt=""
      />
      <div className="absolute inset-0 h-full w-full bg-black opacity-60"></div>
      <div className="relative z-10 flex flex-col gap-3 h-full w-full items-center justify-between">
        <div className="">
          {/* Logo */}
          <div className="p-1 rounded">
            <Image
              src={"/images/name-logo.png"}
              width={100}
              height={50}
              alt="logo"
            />
          </div>
        </div>

        <div className="flex justify-between w-full">
          {/* Search Bar */}
          <div className="relative flex bg-white max-w-2xl items-center rounded-full border-2 px-2">
            <input
              type="text"
              className="outline-none flex-1 py-0.5"
              placeholder="Search for product..."
            />
            <BiSearch className="shrink-0 text-xl text-gray-500" />
          </div>

          <div className="flex items-center justify-end space-x-1 text-2xl text-pink-500">
            <IoMdHome onClick={() => router.push("/")} />
            <CiUser className="cursor-pointer" />
            <Link href={`/cart`} className="relative">
              <TiShoppingCart className="cursor-pointer" />
              <div className="absolute -right-1.5 -top-1.5 flex h-5  w-5 items-center justify-center rounded-full bg-[red]">
                <span className="text-[10px] text-white">20</span>
              </div>
            </Link>
          </div>
        </div>
        {/* Menu */}
      </div>
    </div>
  );
};
