import axios from "@/lib/axios";
import { getProducts } from "@/services/products";
import { allProduct } from "@/store/features/products/productSlice";
import { useAppDispatch } from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { IoMdHome } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import { FaUserAlt } from "react-icons/fa";
import delivery from "../../assets/svgs/delivery-icon.svg";

export const SearchBar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getProducts(`search=${search}`);
      dispatch(allProduct(res));
    };

    if (search !== "") {
      fetchData();
    }
  }, [search]);

  return (
    <div
      className={`fixed z-50 w-full cursor-pointer px-5 md:py-3 gap-2 shadow-lg`}
    >
      <Image
        src="/images/search-bg.jpg"
        className="absolute object-cover duration-500"
        fill={true}
        alt=""
      />
      <div className="absolute inset-0 h-full w-full bg-black opacity-60"></div>
      <div className="relative z-10 flex py-3 flex-col md:flex-row gap-3 h-full w-full items-center justify-between">
        <div className="md:w-60">
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

        <div className="flex justify-between gap-5 w-full">
          {/* Search Bar */}
          <div className="relative flex bg-white md:py-1 md:max-w-xl mx-auto w-full flex-1 self-center items-center rounded-full border-2 px-2">
            <input
              type="search"
              className="outline-none flex-1 py-0.5 md:pl-3"
              placeholder="Search for product..."
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <BiSearch className="shrink-0 text-xl text-gray-500" />
          </div>

          <div className="flex items-center shrink-0 justify-end gap-3 text-2xl md:text-4xl md:space-x-3 text-pink-500">
            <IoMdHome onClick={() => router.push("/")} />
            <Image
              src={delivery}
              alt=""
              width={30}
              height={30}
              className="bg-[rgb(236, 72, 153)]"
            />
            <Link href={`/cart`} className="relative">
              <TiShoppingCart className="cursor-pointer" />
              <div className="absolute -right-1.5 -top-1.5 flex h-5  w-5 items-center justify-center rounded-full bg-[red]">
                <span className="text-[10px] text-white">20</span>
              </div>
            </Link>
            <FaUserAlt className="cursor-pointer" />
          </div>
        </div>
        {/* Menu */}
      </div>
    </div>
  );
};
