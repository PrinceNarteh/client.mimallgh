"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useQuery } from "react-query";

import { Loader } from "@/components/server/Loader";
import { getAllStores } from "@/services/store";
import { capitalize, parseShopImageUrl } from "@/utils";

const ShopCard = () => {
  const { deliveryId } = useParams();
  const { data: stores, isLoading } = useQuery({
    queryKey: ["stores"],
    queryFn: getAllStores,
  });

  if (isLoading) return <Loader />;

  return (
    <div className="flex flex-wrap justify-center gap-5">
      {stores?.map((store, idx) => (
        <Link
          href={`/delivery/${deliveryId}/web-store/${store.id}`}
          key={idx}
          className="h-fit w-[150px] my-2 shrink-0 md:h-fit md:w-[205px]"
        >
          <div className="shrink-0 cursor-pointer overflow-hidden rounded-md shadow-md">
            <div className="relative h-[130px] md:h-[160px] w-full group overflow-hidden">
              <Image
                src={
                  store.image
                    ? parseShopImageUrl(store.image)
                    : "/images/food-3.jpg"
                }
                fill
                sizes="190px"
                alt=""
                style={{ objectFit: "cover" }}
                className="group-hover:scale-110 duration-500"
              />
              <div className="absolute inset-0 h-full w-full bg-black opacity-60"></div>
              <div className="relative p-5 z-10 flex h-full w-full items-center justify-center">
                <h3 className=" text-center text-lg text-white line-clamp-3">
                  {store.name}
                </h3>
              </div>
            </div>
            <div className="px-2 py-1 bg-white">
              <p className="text-xs md:text-sm line-clamp-1">
                {store.description}
              </p>
              <p className="text-xs flex gap-1 items-center">
                <FaMapMarkerAlt size={10} />
                {capitalize(store.location)}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ShopCard;
