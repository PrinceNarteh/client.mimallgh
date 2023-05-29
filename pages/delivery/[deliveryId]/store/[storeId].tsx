import { Error } from "@/components/Error";
import ProductList from "@/components/ProductList";
import { CustomLinks } from "@/components/layout";
import DeliveryLayout from "@/components/layout/DeliveryLayout";
import { getStore } from "@/services/store";
import { allShopProducts } from "@/store/features/products/productSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { DeliveryStore, Store } from "@/types";
import { capitalize } from "@/utils/utilities";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { MdAddCall } from "react-icons/md";
import shopNotFound from "../../../../assets/images/store-not-found.png";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { storeId } = context.query;
  const data = await getStore(storeId as string);

  return {
    props: {
      webStore: data,
    },
  };
};

const WebStore = ({ webStore }: { webStore: DeliveryStore }) => {
  const store = useAppSelector((state) => state.products.shopProducts);
  const dispatch = useAppDispatch();
  const {
    query: { storeId },
  } = useRouter();

  useEffect(() => {
    dispatch(allShopProducts(webStore?.products ? webStore.products : []));
  }, []);

  return (
    <DeliveryLayout>
      {!webStore ? (
        <div className="h-[calc(100vh_-_150px)] grid place-content-center">
          <Image priority src={shopNotFound} alt="" className="max-w-sm" />
        </div>
      ) : (
        <div className="relative pt-12">
          <div className="px-5 w-11/12 mx-auto relative h-[200px] md:h-[400px] bg-teal-500">
            <Image
              src={shopNotFound}
              alt=""
              width={200}
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
                    <div className="w-7 h-7 bg-gray-800 rounded-full flex justify-center items-center cursor-pointer">
                      <MdAddCall className="text-white" />
                    </div>
                    <div className="w-7 h-7 bg-gray-800 rounded-full flex justify-center items-center cursor-pointer">
                      <FaFacebookF className="text-white" />
                    </div>
                    <div className="w-7 h-7 bg-gray-800 rounded-full flex justify-center items-center cursor-pointer">
                      <FaWhatsapp className="text-white" />
                    </div>
                    <div className="w-7 h-7 bg-gray-800 rounded-full flex justify-center items-center cursor-pointer">
                      <FaTwitter className="text-white" />
                    </div>
                    <div className="w-7 h-7 bg-gray-800 rounded-full flex justify-center items-center cursor-pointer">
                      <FaInstagram className="text-white" />
                    </div>
                    <div className="w-7 h-7 bg-gray-800 rounded-full flex justify-center items-center cursor-pointer">
                      <FaTiktok className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="">
                  <p>
                    <span className="font-semibold">Map Direction:</span>{" "}
                    {webStore.mapDirection}
                  </p>
                </div>
                <div className="">
                  <p>
                    <span className="font-semibold">Physical Address:</span>{" "}
                    {capitalize(webStore.location, "_")}
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
              {store.map((product, idx) => (
                <div
                  key={idx}
                  className="h-[200px] w-[150px] my-2 shrink-0 md:h-[230px] md:w-[205px]"
                >
                  <Link
                    href={`/web-store/${product.shop.id}`}
                    className="mb-1 px-1 text-xs md:text-sm font-bold tracking-widest text-pink-500 line-clamp-1"
                  >
                    {product.shop.name}
                  </Link>
                  <div className="shrink-0 cursor-pointer overflow-hidden rounded-md shadow-md">
                    <div className="relative h-[130px] md:h-[160px] w-full">
                      <Link href={`/products/${product.id}`}>
                        <Image
                          src={product.images[0].secure_url}
                          fill
                          sizes="190px"
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
              ))}
            </div>
          </div>

          <footer className="relative bg-gray-900 overflow-hidden">
            <div className="container px-5 pt-24 mx-auto gap-y-16 flex flex-wrap flex-col md:items-center lg:items-start md:flex-row md:flex-nowrap">
              <div className="w-64 h-fit flex-shrink-0 mx-auto text-center md:text-left">
                <p className="flex title-font font-medium items-center md:justify-center justify-center text-gray-900">
                  <span className="text-white text-sm font-semibold">
                    MiMall
                  </span>
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  nesciunt nulla temporibus tenetur quo inventore, natus
                  possimus suscipit voluptas numquam pariatur perferendis,
                  quidem ipsum tempora est maiores error amet similique.
                </p>
              </div>
              <div className="flex-grow text-center flex flex-wrap md:pl-20 -mt-10 md:mt-10 md:text-left">
                <div className=" w-full lg:w-1/4 md:w-1/2 px-4">
                  <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                    CUSTOMER SERVICE
                  </h2>
                  <nav className="list-none mb-10">
                    <li className="mb-2">
                      <Link href="/" className="text-gray-400 hover:text-white">
                        Help Center
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link href="/" className="text-gray-400 hover:text-white">
                        How to Buy Here
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link href="/" className="text-gray-400 hover:text-white">
                        Returns and Refund
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link href="/" className="text-gray-400 hover:text-white">
                        Terms and Conditions
                      </Link>
                    </li>
                  </nav>
                </div>
                <div className=" w-full lg:w-1/4 md:w-1/2 px-4">
                  <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                    ABOUT US
                  </h2>
                  <nav className="list-none mb-10">
                    <li className="mb-2">
                      <Link href="/" className="text-gray-400 hover:text-white">
                        About our Company
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link href="/" className="text-gray-400 hover:text-white">
                        Business Policies
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link href="/" className="text-gray-400 hover:text-white">
                        Privacy Notice
                      </Link>
                    </li>
                  </nav>
                </div>
                <div className=" w-full lg:w-1/4 md:w-1/2 px-4">
                  <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                    MAKE MONEY WITH US
                  </h2>
                  <nav className="list-none mb-10">
                    <li className="mb-2">
                      <Link href="/" className="text-gray-400 hover:text-white">
                        Be a Sales Agent
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link href="/" className="text-gray-400 hover:text-white">
                        Be a Digital Marketing Assistant
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link href="/" className="text-gray-400 hover:text-white">
                        Be a Content Creator
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link href="/" className="text-gray-400 hover:text-white">
                        Advertise Here
                      </Link>
                    </li>
                  </nav>
                </div>
                <div className=" w-full lg:w-1/4 md:w-1/2 px-4">
                  <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                    OUR SERVICES
                  </h2>
                  <nav className="list-none mb-10">
                    <li className="mb-2">
                      <Link href="/" className="text-gray-400 hover:text-white">
                        Categories
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link href="/" className="text-gray-400 hover:text-white">
                        Product Videos
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link href="/" className="text-gray-400 hover:text-white">
                        Trending Videos
                      </Link>
                    </li>
                  </nav>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 bg-opacity-75">
              <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                <p className="text-gray-400 text-sm text-center sm:text-left">
                  MiMall
                </p>
                <span className="inline-flex gap-5 sm:ml-auto sm:mt-auto mt-2 justify-center sm:justify-center">
                  <MdAddCall className="text-white" />
                  <FaFacebookF className="text-white" />
                  <FaWhatsapp className="text-white" />
                  <FaTwitter className="text-white" />
                  <FaInstagram className="text-white" />
                  <FaTiktok className="text-white" />
                </span>
              </div>
            </div>
          </footer>
        </div>
      )}
    </DeliveryLayout>
  );
};

export default WebStore;
