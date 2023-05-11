import { Product } from "@/types";
import { topDeals } from "@/utils/data";
import { capitalize } from "@/utils/utilities";
import Link from "next/link";
import { ProductCard } from "./ProductCard";
import { TopDeals } from "./TopDeals";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

type IProduct = {
  category: string;
  data: Product[];
}[];

const ProductList = ({ products }: { products: IProduct }) => {
  return (
    <section className="my-5 bg-gray-200 pt-5">
      <div className="mx-auto w-11/12">
        {products.map((product, idx) => (
          <div key={idx} className="mb-5 flex flex-col">
            <>
              <div className="relative mb-10 bg-white">
                <div className="flex h-full flex-col items-start justify-between border-r-2 p-7 sm:flex-row">
                  <h3 className="sh-underline mb-2 text-2xl font-semibold md:text-4xl">
                    {capitalize(product.category, "_")}
                  </h3>
                  <Link
                    href={`/category/${product.category}`}
                    className="font-semibold text-orange-500"
                  >
                    Read More
                  </Link>
                </div>
                <div className="w-full overflow-x-scroll">
                  <div className="mb-3 px-5 grid w-[1280] grid-flow-col grid-rows-2">
                    {product.data.map((product, idx) => (
                      <ProductCard key={idx} product={product} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="mb-5 bg-white">
                <TopDeals topDeals={topDeals} />
              </div>
              <div className="my-5 bg-white px-5 py-2">
                <h3 className="sh-underline mb-2 mt-5 pl-2 text-2xl font-semibold md:text-4xl">
                  Trending
                </h3>
                <div className="w-full overflow-x-auto">
                  <div className="my-5 flex items-center justify-start gap-5 px-5">
                    {Array(6)
                      .fill(null)
                      .map((_, idx) => (
                        <Link href={"/product-videos/1"} key={idx}>
                          <div className="w-60 shrink-0">
                            <div className="overflow-hidden rounded-md">
                              <ReactPlayer
                                url={"/videos/sea-shore.mp4"}
                                width={"100%"}
                                height={"100%"}
                                loop
                                muted
                                playing={true}
                              />
                            </div>
                            <p className="mt-1 line-clamp-1 px-1 text-sm">
                              Lorem ipsum dolor sit amet dolor sit amet.
                            </p>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
