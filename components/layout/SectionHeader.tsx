import Link from "next/link";
import React from "react";

export const SectionHeader = ({
  label,
  link = "",
}: {
  label: string;
  link?: string;
}) => {
  return (
    <div className="flex justify-between border-b-2 px-5">
      <h4 className="sh-underline relative md:text-3xl">{label}</h4>
      <Link href={link} className="cursor-pointer font-bold text-orange-500">
        See more...
      </Link>
    </div>
  );
};
