import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const customLinks = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Category",
    link: "/category",
  },
  {
    label: "Top Deals",
    link: "/top-deals",
  },
  {
    label: "Product Videos",
    link: "/product-videos",
  },
  {
    label: "Trending",
    link: "/trending",
  },
  {
    label: "More",
    link: "/more",
  },
];

export const CustomLinks = () => {
  const { pathname } = useRouter();

  const links = customLinks.filter(
    (link) => pathname === "/" || !link.link.startsWith(pathname)
  );

  return (
    <div className="flex justify-between flex-wrap py-3 text-center shadow-md md:divide-y-0 md:divide-x-2 md:text-xl">
      {links.map((link, idx) => (
        <Link key={idx} href={link.link} className="px-10 hover:text-pink-500">
          {link.label}
        </Link>
      ))}
      <div className="flex items-center justify-center border-2 border-red-500 rounded-full py-1 px-2">
        <IoSearchOutline />
        <input type="text" className="bg-white outline-none" />
      </div>
    </div>
  );
};
