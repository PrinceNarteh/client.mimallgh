import useScrollListener from "@/hooks/useScrollListener";
import { locations } from "@/utils/menus";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [show, setShow] = useState(true);
  const pathname = usePathname();
  const scroll = useScrollListener();

  // update classList of nav on scroll
  useEffect(() => {
    if (scroll.y > 150 && scroll.y - scroll.lastY > 0) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [scroll.y, scroll.lastY]);

  return (
    <div className={`w-full overflow-x-auto bg-gray-800 text-pink-500 pr-5`}>
      <div className="pt-28 md:pt-[86px] px-5">
        <div
          className={`flex h-14 w-full items-center justify-start space-x-5 lg:space-x-7 pr-5`}
        >
          {locations.map((location, idx) => (
            <Link
              key={idx}
              href={`/markets/${location.link}`}
              className="whitespace-nowrap"
            >
              {location.link === "" ? "All" : location.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
