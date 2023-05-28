import VideoPlayer from "@/components/VideoPlayer";
import { Product } from "@/types";
import { topDeals } from "@/utils/data";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const ProductVideoDetails = ({ product }: { product: Product }) => {
  return (
    <div>
      <div className="mx-auto w-10/12 py-5">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          <div className="col-span-12 lg:col-span-9">
            <div className="h-[250px] md:h-[400px] lg:h-[480px]">
              <ReactPlayer
                url={"/videos/sea-shore.mp4"}
                controls
                width={"100%"}
                height={"100%"}
                playing={true}
              />
            </div>
            <div>
              <h3 className="py-1 text-xl font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
              <div className="flex flex-col md:flex-row gap-3 items-start  md:justify-between pr-5 md:items-center">
                <div className="flex items-center gap-2">
                  <div className="h-12 w-12 rounded-full bg-red-500"></div>
                  <div>
                    <h4 className="font-semibold">Daavi Special Gobe Joint</h4>
                    <p>Old Site</p>
                  </div>
                </div>
                <Link
                  href={`/products/${product.id}`}
                  className="text-sm self-end rounded-lg shrink-0 border border-pink-500 px-3 py-1 md:py-2 text-pink-500 duration-200 hover:bg-pink-500 hover:text-white"
                >
                  Shop Now
                </Link>
              </div>
            </div>

            <div className="mt-2 rounded-md bg-gray-100 p-5">
              <p className="mb-2 font-semibold">2.3k views 3 days ago</p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
                amet illo recusandae doloremque quae nihil minus! Animi ad eius
                assumenda, autem magni, dicta quos fuga, ut consectetur ipsa at
                porro!
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
                amet illo recusandae doloremque quae nihil minus! Animi ad eius
                assumenda, autem magni, dicta quos fuga, ut consectetur ipsa at
                porro!
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
                amet illo recusandae doloremque quae nihil minus! Animi ad eius
                assumenda, autem magni, dicta quos fuga, ut consectetur ipsa at
                porro!
              </p>
            </div>

            {/* Comment */}
            <div className="w-full space-y-5 rounded-md bg-slate-200 p-5">
              <div className="flex w-full gap-5">
                <div className="h-10 w-10 shrink-0 rounded-full bg-red-500"></div>
                <div className="w-full">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Add your comment"
                    className="mb-2 w-full border-b-2 border-b-gray-300 bg-transparent outline-none focus:border-b-pink-500"
                  />
                  <div className="flex justify-end">
                    <button className="border border-pink-500 py-1 px-3 text-xs text-pink-500 duration-300 hover:bg-pink-500 hover:text-white">
                      Comment
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex w-full gap-5">
                <div className="h-10 w-10 shrink-0 rounded-full bg-red-500"></div>
                <div>
                  <h3>
                    <span className="font-bold">Akosua Genie</span> | 1 month
                    ago
                  </h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Neque amet illo recusandae doloremque quae nihil minus!
                    Animi ad eius assumenda, autem magni, dicta quos fuga, ut
                    consectetur ipsa at porro!
                  </p>
                </div>
              </div>
              <div className="flex w-full gap-5">
                <div className="h-10 w-10 shrink-0 rounded-full bg-red-500"></div>
                <div>
                  <h3>
                    <span className="font-bold">Simon Bas</span> | 1 month ago
                  </h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Neque amet illo recusandae doloremque quae nihil minus!
                    Animi ad eius assumenda, autem magni, dicta quos fuga, ut
                    consectetur ipsa at porro!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-3 space-y-2">
            <div className="mt-2 mb-5 flex justify-between border-b-2">
              <h4 className="sh-underline relative md:text-3xl">Top Deals</h4>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {topDeals.map((topDeal, idx) => (
                <div
                  key={idx}
                  className="relative lg:shrink-0 h-28 basis-28 overflow-hidden rounded"
                >
                  <Image
                    src={topDeal.image}
                    fill
                    alt=""
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="my-5 bg-white px-5 py-2">
          <div className="flex items-center justify-between">
            <h3 className="sh-underline mb-2 mt-5 pl-2 text-xl md:text-3xl">
              Related videos
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
                    <div className="w-40 md:w-60 shrink-0">
                      <div className="overflow-hidden rounded-md">
                        <VideoPlayer idx={idx} key={idx} />
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
      </div>
    </div>
  );
};

export default ProductVideoDetails;
