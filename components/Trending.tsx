import Link from "next/link";
import React from "react";


const Trending = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h3 className="sh-underline mb-2 mt-5 pl-2 text-xl md:text-3xl">
          Trending
        </h3>
        <Link
          href={"/trending"}
          className="cursor-pointer font-bold text-orange-500"
        >
          See more...
        </Link>
      </div>
      <div className="w-full overflow-x-auto">
        <div className="my-5 flex items-center justify-start gap-5 px-5">
          {Array(6)
            .fill(null)
            .map((_, idx) => (
              <Link href={"/product-videos/1"} key={idx}>
                <div className="w-60 shrink-0">
                  <div className="overflow-hidden rounded-md">
                    
                  </div>
                  <p className="mt-1 line-clamp-1 px-1 text-sm">
                    Lorem ipsum dolor sit amet dolor sit amet.
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};

export default Trending;
