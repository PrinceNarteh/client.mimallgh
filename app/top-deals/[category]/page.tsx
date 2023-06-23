"use client";

import { Container } from "@/components";
import { getProducts } from "@/services/products";
import { IProduct } from "@/types";
import { capitalize } from "@/utils";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = context.query;
  const data = await getProducts("category=food&perPage=12");

  console.log("Hello world");

  return {
    props: {
      products: data,
      query,
    },
  };
};

const TopDealsByCategory = ({
  products,
  query,
}: {
  products: IProduct;
  query: any;
}) => {
  console.log(products);
  return (
    <Container>
      <div className="bg-gray-300 bg-opacity-30">
        <div className="md:w-11/12 mx-auto p-3 md:p-5">
          <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
            <div className="col-span-12 lg:col-span-8 space-y-5">
              <div className="flex items-center bg-white shadow">
                <div className="flex-1 py-3 pl-5 text-2xl">
                  {capitalize(query)}
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-5">
                {products?.data[0].data.map((product, idx) => (
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
                            src={product.images[0].name}
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

              <div className="flex items-center justify-center gap-2 bg-white py-5">
                <span className="block h-4 w-4 cursor-pointer rounded-full bg-gray-800"></span>
                <span className="block h-4 w-4 cursor-pointer rounded-full bg-gray-300"></span>
                <span className="block h-4 w-4 cursor-pointer rounded-full bg-gray-300"></span>
                <span className="block h-4 w-4 cursor-pointer rounded-full bg-gray-300"></span>
                <span className="block h-4 w-4 cursor-pointer rounded-full bg-gray-300"></span>
                <span className="block h-4 w-4 cursor-pointer rounded-full bg-gray-300"></span>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4 space-y-5">
              <div className="pl-5 py-4 font-bold  bg-white shadow">
                <p className="sh-underline">Top Videos</p>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <div className="flex h-28 w-full bg-white shadow-md cursor-pointer">
                  <div className="w-44 shrink-0 bg-red-500 rounded"></div>
                  <div className="flex-1 py-1 px-3">
                    <h3 className="font-semibold line-clamp-2">
                      Unbranded Granite Towels For Both Sex
                    </h3>
                    <p className="text-sm">Shop Name</p>
                    <p className="text-xs mt-1 font-semibold text-gray-700">
                      1.2k Views . 2 hours ago
                    </p>
                  </div>
                </div>
                <div className="flex h-28 w-full bg-white shadow-md cursor-pointer">
                  <div className="w-44 shrink-0 bg-red-500 rounded"></div>
                  <div className="flex-1 py-1 px-3">
                    <h3 className="font-semibold line-clamp-2">
                      Unbranded Granite Towels For Both Sex
                    </h3>
                    <p className="text-sm">Shop Name</p>
                    <p className="text-xs mt-1 font-semibold text-gray-700">
                      1.2k Views . 2 hours ago
                    </p>
                  </div>
                </div>
                <div className="flex h-28 w-full bg-white shadow-md cursor-pointer">
                  <div className="w-44 shrink-0 bg-red-500 rounded"></div>
                  <div className="flex-1 py-1 px-3">
                    <h3 className="font-semibold line-clamp-2">
                      Unbranded Granite Towels For Both Sex
                    </h3>
                    <p className="text-sm">Shop Name</p>
                    <p className="text-xs mt-1 font-semibold text-gray-700">
                      1.2k Views . 2 hours ago
                    </p>
                  </div>
                </div>
                <div className="flex h-28 w-full bg-white shadow-md cursor-pointer">
                  <div className="w-44 shrink-0 bg-red-500 rounded"></div>
                  <div className="flex-1 py-1 px-3">
                    <h3 className="font-semibold line-clamp-2">
                      Unbranded Granite Towels For Both Sex
                    </h3>
                    <p className="text-sm">Shop Name</p>
                    <p className="text-xs mt-1 font-semibold text-gray-700">
                      1.2k Views . 2 hours ago
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex h-28 w-full bg-white shadow-md cursor-pointer">
                <div className="w-44 shrink-0 bg-red-500 rounded"></div>
                <div className="flex-1 py-1 px-3">
                  <h3 className="font-semibold line-clamp-2">
                    Unbranded Granite Towels For Both Sex
                  </h3>
                  <p className="text-sm">Shop Name</p>
                  <p className="text-xs mt-1 font-semibold text-gray-700">
                    1.2k Views . 2 hours ago
                  </p>
                </div>
              </div>
              <div className="flex h-28 w-full bg-white shadow-md cursor-pointer">
                <div className="w-44 shrink-0 bg-red-500 rounded"></div>
                <div className="flex-1 py-1 px-3">
                  <h3 className="font-semibold line-clamp-2">
                    Unbranded Granite Towels For Both Sex
                  </h3>
                  <p className="text-sm">Shop Name</p>
                  <p className="text-xs mt-1 font-semibold text-gray-700">
                    1.2k Views . 2 hours ago
                  </p>
                </div>
              </div>
              <div className="flex h-28 w-full bg-white shadow-md cursor-pointer">
                <div className="w-44 shrink-0 bg-red-500 rounded"></div>
                <div className="flex-1 py-1 px-3">
                  <h3 className="font-semibold line-clamp-2">
                    Unbranded Granite Towels For Both Sex
                  </h3>
                  <p className="text-sm">Shop Name</p>
                  <p className="text-xs mt-1 font-semibold text-gray-700">
                    1.2k Views . 2 hours ago
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TopDealsByCategory;
