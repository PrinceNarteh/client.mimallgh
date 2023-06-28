"use client";

import { capitalize } from "@/utils";
import { useParams } from "next/navigation";

const Header = ({ value }: { value: string }) => {
  const params = useParams();

  return (
    <div className="flex items-center bg-white shadow py-4 pl-5 text-2xl">
      {capitalize(params[value] as string)}
    </div>
  );
};

export default Header;
