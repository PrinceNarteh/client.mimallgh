import { Container, MovieCard } from "@/components";
import { capitalize } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { topDeals } from "../../../utils/data";

const ProductVideos = () => {
  const {
    query: { category },
  } = useRouter();

  return (
    <Container>
      <div className="mx-auto w-11/12 pb-7">
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
          <div className="col-span-12 lg:col-span-9 space-y-5">
            <div className="w-full">
              <div className="mt-5">
                <div className="flex items-center bg-white shadow">
                  <div className="flex-1 py-0.5 pl-5 text-2xl">
                    {capitalize(category as string)}
                  </div>
                </div>
                <div className="mt-5">
                  <div className="grid gap-5 grid-auto-fit-md">
                    {Array(6)
                      .fill(null)
                      .map((_, idx) => (
                        <MovieCard key={idx} />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-3 space-y-5">
            <div className="col-span-12 xl:col-span-3 space-y-5">
              <div className="pl-5 py-4 font-bold  bg-white shadow">
                <p className="sh-underline">Top Deals</p>
              </div>
              <div className="flex flex-wrap justify-center bg-white gap-5">
                {topDeals.map((topDeal, idx) => (
                  <Link
                    key={idx}
                    href={`/products/${idx}`}
                    className="cursor-pointer "
                  >
                    <div className="relative h-24 w-32 flex-1 overflow-hidden rounded-lg shadow-md">
                      <Image src={topDeal.image} fill alt="" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductVideos;
