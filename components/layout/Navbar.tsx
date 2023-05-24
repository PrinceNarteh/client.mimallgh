import { locations } from "@/utils/menus";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useRouter();

  return (
    <div className="w-full overflow-x-auto bg-gray-800 text-pink-500 pr-5">
      <div className="pt-28 md:pt-[86px] px-5">
        <div
          className={`flex h-14 w-full items-center justify-between space-x-5 pr-5`}
        >
          {locations.map((location, idx) => (
            <Link key={idx} href={location.link} className="whitespace-nowrap">
              {location.link === "" ? "All" : location.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
