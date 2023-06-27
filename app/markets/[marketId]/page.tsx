"use client";

import { Container, Loader, ProductList } from "@/components";
import { getProducts } from "@/services/products";
import { capitalize } from "@/utils";
import { categories } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useQuery } from "react-query";

const Markets = () => {
  const params = useParams();
  const market = capitalize(params.marketId as string);
  const { data: products, isLoading } = useQuery({
    queryKey: ["market", { location: params.marketId }],
    queryFn: () => getProducts(`location=${params.marketId}`),
  });

  if (isLoading) return <Loader />;

  return (
    <Container>
      <div className="mx-auto w-11/12 py-5">
        <h3 className="sh-underline text-3xl">
          {capitalize(market as string, "_")} Market
        </h3>
      </div>

      <section className="mx-auto w-11/12 py-10">
        <div className="grid gap-5 grid-auto-fit-lg">
          {categories.map((category, idx) => (
            <Link
              href={`/markets/${params.marketId}/${category.link}`}
              key={idx}
            >
              <div className="bg-white">
                <div
                  className={`group relative h-28 cursor-pointer overflow-hidden rounded-2xl p-5 shadow-lg`}
                >
                  <Image
                    src={category.image}
                    className="absolute object-cover duration-500 group-hover:scale-110"
                    fill={true}
                    alt=""
                  />
                  <div className="absolute inset-0 h-full w-full bg-black opacity-60"></div>
                  <div className="relative z-10 flex h-full w-full items-center justify-center">
                    <h3 className=" text-center text-lg text-white">
                      {category.label}
                    </h3>
                  </div>
                </div>
                <p className="mt-1 text-center text-sm">
                  300 Sellers | 150 ads
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div>
        <ProductList products={products?.data || []} />{" "}
      </div>
    </Container>
  );
};

export default Markets;
