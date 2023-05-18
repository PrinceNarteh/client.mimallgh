import { locations, otherLocations } from "@/utils/menus";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useRouter();

  return (
    <div className="pt-24 md:pt-[86px]">
      <div
        className={`flex h-14 w-full items-center justify-between  bg-gray-800 px-5
      `}
      >
        <div className="text-pink-500 flex gap-6">
          {locations.map((location, idx) => (
            <Link key={idx} href={location.link}>
              {location.link === "" ? "All" : location.label}
            </Link>
          ))}
          <div className="hidden xl:inline-block space-x-6">
            {otherLocations.map((location, idx) => (
              <Link key={idx} href={location.link}>
                {location.label}
              </Link>
            ))}
          </div>
          <p
            className="xl:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            More
          </p>
        </div>
      </div>
      <div
        className={`h-[calc(100vh_-_140px)] absolute w-52 z-30 bg-gray-800 transform duration-500 lg:hidden
        ${open ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        {otherLocations.map((location, idx) => (
          <Link
            key={idx}
            href={`${location.link}`}
            className="block pl-5 py-2.5 text-pink-500 hover:bg-gray-700 hover:pl-6 duration-500"
          >
            {location.label}
          </Link>
        ))}
      </div>
    </div>
  );
};
