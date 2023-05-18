import { locations } from "@/utils/menus";
import Link from "next/link";
import { useRouter } from "next/router";

export const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <div className="container mx-auto pt-20">
      <div
        className={`flex h-14 w-full items-center justify-between  bg-gray-800 px-5
      `}
      >
        <div className="space-x-5 text-pink-500">
          {locations.map((location, idx) => (
            <Link key={idx} href={location.link}>
              {location.link === "" ? "All" : location.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
