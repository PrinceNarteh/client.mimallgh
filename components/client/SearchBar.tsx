"use client";

import { useCartSelector } from "@/hooks/useCartSelector";
import { useDeliverySelector } from "@/hooks/useDeliverySelector";
import { useFetch } from "@/hooks/useFetch";
import { useSearchSelector } from "@/hooks/useSearchSelector";
import {
  setCompanies,
  setDeliveryCompany,
} from "@/store/features/delivery/deliverySlice";
import { setSearchResults } from "@/store/features/search/searchSlice";
import { useAppDispatch } from "@/store/store";
import { IDeliveryCompany } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoMdHome } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import delivery from "../../assets/svgs/delivery-icon-pink.svg";

export const SearchBar = () => {
  const { companies } = useDeliverySelector();
  const { fetchRequest } = useFetch();

  const [openDelivery, setOpenDelivery] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { items } = useCartSelector();
  const { search } = useSearchSelector();

  const navigate = (deliveryCompany: IDeliveryCompany) => {
    dispatch(setDeliveryCompany(deliveryCompany));
    router.push(`/delivery/${deliveryCompany.slug}`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = await fetchRequest(`/products?search=${search}`);
    dispatch(setSearchResults(data));
  };

  useEffect(() => {
    const fetchCompanies = async () => {
      const companies = await fetchRequest("/delivery-companies");
      console.log(companies);
      dispatch(setCompanies(companies));
    };
    fetchCompanies();
  }, []);

  return (
    <div
      className={`relative z-10 w-full px-5 md:py-1 gap-2 shadow-lg bg-[url('/images/search-bg.jpg')] bg-no-repeat bg-cover`}
    >
      <div className="absolute inset-0 h-full w-full bg-black opacity-60"></div>
      <div className="relative z-50 flex py-3 flex-col md:flex-row gap-3 h-full w-full items-center justify-between">
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

        <div className="flex justify-between gap-5">
          <div className="relative flex items-center shrink-0 justify-end gap-3 pr-3 md:pr-0 text-2xl md:text-4xl md:space-x-3 text-pink-500 cursor-pointer">
            <IoMdHome
              onClick={() => {
                router.push("/");
              }}
            />
            <div
              onClick={() => setOpenDelivery(!openDelivery)}
              className=" w-10 h-10 md:w-9 md:h-9 flex justify-center items-center"
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
                } absolute -right-4 top-[55px] min-w-max py-2 text-base bg-gray-800 arrow before:right-20 duration-500 transform`}
              >
                {companies?.map((company, idx) => (
                  <div
                    key={idx}
                    onClick={() => navigate(company)}
                    className="py-2 px-5 block hover:bg-gray-700"
                  >
                    {company.name}
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
          </div>
        </div>
        {/* Menu */}
      </div>
    </div>
  );
};
