import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Section } from "./Section";

export const TopDeals = ({
  topDeals,
  category,
}: {
  topDeals: { image: string }[];
  category: string;
}) => {
  const slug = `${category.split("_").join("-")}`;

  return (
    <Section label="Top Deals" link={`/top-deals/${slug}`}>
      <div className="w-full overflow-y-auto">
        <div className="pl-5 flex gap-5 md:pb-3">
          {topDeals.map((topDeal, idx) => (
            <Link
              key={idx}
              href={`/products/${idx}`}
              className="cursor-pointer "
            >
              <div className="relative h-24 w-24 md:h-40 md:w-40 shrink-0 overflow-hidden rounded-lg shadow-md">
                <Image
                  src={topDeal.image}
                  fill
                  alt=""
                  sizes="(max-width: 768px) 10vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
};
