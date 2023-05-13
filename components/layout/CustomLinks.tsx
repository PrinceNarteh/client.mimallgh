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
];

export const CustomLinks = () => {
  const { pathname } = useRouter();

  const links = customLinks.filter(
    (link) => pathname === "/" || !link.link.startsWith(pathname)
  );

  return (
    <div className="grid gap-5 grid-auto-fit-xs gap-y-3 items-center py-2 text-center z-30">
      {links.map((link, idx) => (
        <Link key={idx} href={link.link} className="px-10 hover:text-pink-500">
          {link.label}
        </Link>
      ))}
      <div className="flex items-center justify-center border-2 rounded-full border-gray-400 p-2">
        <IoSearchOutline className="text-gray-800" />
        <input type="text" className="bg-transparent outline-none w-full" />
      </div>
    </div>
  );
};
