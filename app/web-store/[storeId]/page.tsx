"use client";

import { CustomLinks, Loader } from "@/components";
import { useDeliverySelector } from "@/hooks/useDeliverySelector";
import { getSingleShop } from "@/services/store";
import { allShopProducts } from "@/store/features/products/productSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { capitalize, parseProductImageUrl, parseShopBannerUrl } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaTiktok,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { MdAddCall } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";

const WebStore = () => {
  const { storeId } = useParams();
  const store = useAppSelector((state) => state.products.shopProducts);
  const { deliveryCompany } = useDeliverySelector();
  const dispatch = useAppDispatch();
  const { data: webStore, isLoading } = useQuery({
    queryKey: ["webStore", storeId],
    queryFn: () => getSingleShop(storeId),
  });

  useEffect(() => {
    dispatch(allShopProducts(webStore?.products ? webStore.products : []));
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      {!webStore ? (
        <div className="h-[calc(100vh_-_150px)] grid place-content-center">
          <Image
            priority
            src="/images/store-not-found.png"
            width={500}
            height={500}
            alt=""
            className="max-w-sm"
          />
        </div>
      ) : (
        <div className="relative pt-12">
          <div className="px-5 w-11/12 mx-auto relative h-[200px] md:h-[400px] bg-teal-500">
            <Image
              src={
                webStore?.banner
                  ? parseShopBannerUrl(webStore?.banner)
                  : "/images/web-store-banner-3.jpg"
              }
              alt=""
              fill
              style={{ objectFit: "cover" }}
              className="object-top"
            />
          </div>

          <div className="px-5 w-11/12 mx-auto flex flex-col md:flex-row">
            <div className="relative bottom-8 md:bottom-16 left-5 h-16 w-16 md:h-32 md:w-32 shrink-0 rounded-full bg-red-500"></div>
            <h3 className="absolute transform translate-x-24 translate-y-0.5 font-bold text-xl md:text-3xl md:mt-2 md:translate-x-44">
              {webStore.name}
            </h3>
            <div className="-mt-6 space-y-2 pt-2 w-full md:ml-14 md:mt-12">
              <p>{webStore.description}</p>
              <div className="grid grid-auto-fit-lg gap-3 py-3">
                <div className="flex items-center">
                  <span className="font-semibold mr-3">Contact:</span>
                  <div className="flex gap-2">
                    {webStore.phoneNumber ? (
                      <div className="w-7 h-7 bg-gray-800 rounded-full flex justify-center items-center cursor-pointer">
                        <a
                          href={`tel:${webStore.phoneNumber}`}
                          title={webStore.phoneNumber}
                        >
                          <MdAddCall className="text-white" />
                        </a>
                      </div>
                    ) : null}
                    {webStore.facebookHandle ? (
                      <div className="w-7 h-7 bg-gray-800 rounded-full flex justify-center items-center cursor-pointer">
                        <a href={webStore.facebookHandle}>
                          <FaFacebookF className="text-white" />
                        </a>
                      </div>
                    ) : null}
                    {webStore.whatsappNumber ? (
                      <div className="w-7 h-7 bg-gray-800 rounded-full flex justify-center items-center cursor-pointer">
                        <a href={webStore.whatsappNumber}>
                          <FaWhatsapp className="text-white" />
                        </a>
                      </div>
                    ) : null}
                    {webStore.twitterHandle ? (
                      <div className="w-7 h-7 bg-gray-800 rounded-full flex justify-center items-center cursor-pointer">
                        <a href={webStore.twitterHandle}>
                          <FaTwitter className="text-white" />
                        </a>
                      </div>
                    ) : null}
                    {webStore.instagramHandle ? (
                      <div className="w-7 h-7 bg-gray-800 rounded-full flex justify-center items-center cursor-pointer">
                        <a href={webStore.instagramHandle}>
                          <FaInstagram className="text-white" />
                        </a>
                      </div>
                    ) : null}
                    {webStore.tiktokHandle ? (
                      <div className="w-7 h-7 bg-gray-800 rounded-full flex justify-center items-center cursor-pointer">
                        <a href={webStore.tiktokHandle}>
                          <FaTiktok className="text-white" />
                        </a>
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Map Direction:</span>{" "}
                  <a
                    href={webStore.mapDirection}
                    className="flex items-center gap-1"
                  >
                    <FaMapMarkerAlt size={13} />
                    {capitalize(webStore.location, "_")}
                  </a>
                </div>
                <div className="">
                  <p>
                    <span className="font-semibold">Physical Address:</span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="sticky w-11/12 mx-auto top-[100px] md:top-[86px] my-5 bg-white z-20 border-y shadow-md p-1 rounded">
            <CustomLinks storeId={storeId as string} />
          </div>

          <div>
            <div className="flex flex-wrap justify-center gap-5">
              {store.length > 0
                ? store.map((product, idx) => (
                    <div
                      key={idx}
                      className="h-[200px] w-[150px] my-2 shrink-0 md:h-[230px] md:w-[205px]"
                    >
                      <div className="shrink-0 cursor-pointer overflow-hidden rounded-md shadow-md">
                        <div className="relative h-[130px] md:h-[160px] w-full">
                          <Link
                            href={`/delivery/${deliveryCompany?.slug}/products/${product.id}`}
                          >
                            <Image
                              src={parseProductImageUrl(
                                product?.images[0].name
                              )}
                              fill
                              sizes="500px"
                              alt=""
                              style={{ objectFit: "cover" }}
                            />
                          </Link>
                        </div>
                        <div className="px-2 py-1 bg-white">
                          <p className="text-xs md:text-sm line-clamp-1">
                            {product.title}
                          </p>
                          <p className="font-semibold text-center text-sm md:text-base">
                            GH¢{product.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebStore;
