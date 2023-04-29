import Link from "next/link";
import React from "react";

export const NavItem = ({ label, link }: { label: string; link: string }) => {
  return (
    <li className="px-4 cursor-pointer hover:text-pink-500 hover:scale-105 duration-200">
      <Link href={link}>{label}</Link>
    </li>
  );
};
