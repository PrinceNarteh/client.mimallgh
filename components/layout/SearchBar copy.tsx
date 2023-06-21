import axios from "@/lib/axios";
import { useCartSelector } from "@/store/features/cart/cartSlice";
import {
  setDeliveryCompany,
  useDeliverySelector,
} from "@/store/features/delivery/deliverySlice";
import {
  setSearch,
  setSearchResults,
  useSearchSelector,
} from "@/store/features/search/searchSlice";
import { useAppDispatch } from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import delivery from "../../assets/svgs/delivery-icon.svg";
import { IDeliveryCompany } from "../../types/delivery-companies";

export const SearchBar = () => {
  const [openDelivery, setOpenDelivery] = useState(false);
  const { deliveryCompany, companies } = useDeliverySelector();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { items } = useCartSelector();
  const { search } = useSearchSelector();

  const navigate = (company: IDeliveryCompany) => {
    dispatch(setDeliveryCompany(company));
    router.push(`/delivery/${company.slug}`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await axios.get(`/products?search=${search}`);
    dispatch(setSearchResults(res.data.data));
  };

  return (
    <div
      className={`fixed z-0 w-full cursor-pointer px-5 md:py-3 gap-2 shadow-lg`}
    >
      <Image
        priority={true}
        src="/images/search-bg.jpg"
        className="absolute object-cover duration-500"
        fill={true}
        alt=""
      />
      <div className="absolute inset-0 h-full w-full bg-black opacity-60"></div>
      <div className="relative z-10 flex py-3 flex-col md:flex-row gap-3 h-full w-full items-center justify-between">
        <Link href="/" className="md:w-60">
          {/* Logo */}
          <div className="p-1 rounded">
            <Image
              src={"/images/name-logo.png"}
              width={100}
              height={50}
              alt="logo"
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </Link>

        <div className="flex justify-between gap-5 w-full">
          {/* Search Bar */}
          <form
            onSubmit={handleSubmit}
            className="relative flex bg-white md:py-1 md:max-w-xl mx-auto flex-1 self-center items-center rounded-full border-2 px-2"
          >
            <input
              type="text"
              className="outline-none flex-1 py-0.5 md:pl-3 w-36 md:flex-1"
              placeholder="Search for shop or product..."
              onChange={(e) => dispatch(setSearch(e.target.value))}
              value={search}
            />
            <BiSearch className="shrink-0 text-xl text-gray-500" />
          </form>

          <div className="flex items-center shrink-0 justify-end gap-3 pr-3 md:pr-0 text-2xl md:text-4xl md:space-x-3 text-pink-500">
            <IoMdHome
              onClick={() => {
                // dispatch(clearSearch());
                // dispatch(clearSearchResults());
                router.push(`/delivery/${deliveryCompany?.slug}`);
              }}
            />
            <div
              onClick={() => setOpenDelivery(!openDelivery)}
              className="relative w-10 h-10 md:w-9 md:h-9 flex justify-center items-center"
            >
              <Image
                src={delivery}
                alt=""
                width={80}
                height={80}
                className="bg-[rgb(236, 72, 153)]"
              />
              <div
                className={`${
                  openDelivery
                    ? "visible translate-y-0 opacity-100"
                    : "invisible translate-y-3 opacity-0"
                } absolute left-0 top-[55px] min-w-max py-2 text-base bg-gray-800 arrow before:left-2 duration-500 transform`}
              >
                {companies.map((deliveryCompany, idx) => (
                  <div
                    key={idx}
                    onClick={() => navigate(deliveryCompany)}
                    className="py-2 px-5 block hover:bg-gray-700"
                  >
                    {deliveryCompany.name}
                  </div>
                ))}
              </div>
            </div>
            <Link href={`/cart`} className="relative">
              <TiShoppingCart className="cursor-pointer" />
              <div className="absolute -right-1.5 -top-1.5 flex h-5  w-5 items-center justify-center rounded-full bg-[red]">
                <span className="text-[10px] text-white">{items.length}</span>
              </div>
            </Link>
            <FaRegUser className="cursor-pointer" />
          </div>
        </div>
        {/* Menu */}
      </div>
    </div>
  );
};
