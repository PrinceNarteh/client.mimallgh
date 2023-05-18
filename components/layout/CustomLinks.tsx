import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { HiArrowNarrowRight } from "react-icons/hi";

const customLinks = [
  {
    label: "Home",
    link: "/",
  },
  // {
  //   label: "Category",
  //   link: "/category",
  // },
  // {
  //   label: "Top Deals",
  //   link: "/top-deals",
  // },
  {
    label: "Videos",
    link: "/product-videos",
  },
  // {
  //   label: "Trending",
  //   link: "/trending",
  // },
];

export const CustomLinks = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useRouter();

  const links = customLinks.filter(
    (link) => pathname === "/" || !link.link.startsWith(pathname)
  );

  return (
    <div className="flex relative items-center justify-between text-center z-30 overflow-hidden pr-3">
      {links.map((link, idx) => (
        <Link
          key={idx}
          href={link.link}
          className="p-2 hover:text-pink-500 flex-1"
        >
          {link.label}
        </Link>
      ))}
      <div className="flex-grow justify-around hidden md:flex">
        <Link href={"/"} className="p-2 hover:text-pink-500">
          Trending
        </Link>
        <Link href={"/"} className="p-2 hover:text-pink-500">
          Top Deals
        </Link>
      </div>
      <div className="md:hidden flex-1">
        <Link href={""} className="hover:text-pink-500">
          More
        </Link>
      </div>
      <div className="hidden md:flex border border-pink-500 rounded-full py-1 px-3">
        <input type="search" name="" id="" className="outline-none" />
        <IoSearchOutline
          className="text-xl text-gray-700 shrink-0 m-1"
          onClick={() => setOpen(false)}
        />
      </div>
      <div className="md:hidden">
        <IoSearchOutline
          className="text-xl text-gray-800"
          onClick={() => setOpen(true)}
        />
        <div
          className={`absolute inset-0 flex gap-2 h-full items-center bg-white transform duration-500 
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
        >
          <input
            type="text"
            className={`outline-none border-b-2 border-blue-500 flex-1 p-1 
          `}
          />
          <HiArrowNarrowRight
            className="text-3xl text-gray-700 shrink-0 m-1"
            onClick={() => setOpen(false)}
          />
        </div>
      </div>
    </div>
  );
};
