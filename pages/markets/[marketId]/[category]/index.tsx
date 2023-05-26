import { Container } from "@/components";
import { getAllProducts, getProducts } from "@/services/products";
import { IProduct, IUncategorizedProduct } from "@/types";
import { topDeals } from "@/utils/data";
import { capitalize } from "@/utils/utilities";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  // { marketId: 'amamoma', category: 'food' }
  const data = await getAllProducts(
    `location=${query.marketId}&category=${query.category}`
  );

  console.log(data);

  return {
    props: {
      products: data,
    },
  };
};

const ProductVideosByCategory = ({
  products,
}: {
  products: IUncategorizedProduct;
}) => {
  const { query } = useRouter();

  return (
    <Container>
      <div className="bg-gray-300 bg-opacity-30">
        <div className="md:w-11/12 mx-auto p-3">
          <div className="grid grid-cols-1 gap-3 xl:grid-cols-12">
            <div className="col-span-12 xl:col-span-9 space-y-5">
              <div className="flex items-center bg-white shadow">
                <div className="flex-1 pl-5 py-3 text-2xl">
                  {capitalize(query.category as string)}
                </div>
              </div>

              <div className="flex flex-wrap justify-evenly gap-5">
                {products.data.map((product, idx) => (
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

              <div className="flex items-center justify-center gap-2 bg-white py-5">
                <span className="block h-4 w-4 cursor-pointer rounded-full bg-gray-800"></span>
                <span className="block h-4 w-4 cursor-pointer rounded-full bg-gray-300"></span>
                <span className="block h-4 w-4 cursor-pointer rounded-full bg-gray-300"></span>
                <span className="block h-4 w-4 cursor-pointer rounded-full bg-gray-300"></span>
                <span className="block h-4 w-4 cursor-pointer rounded-full bg-gray-300"></span>
                <span className="block h-4 w-4 cursor-pointer rounded-full bg-gray-300"></span>
              </div>
            </div>
            <div className="col-span-12 xl:col-span-3 space-y-5">
              <div className="pl-5 py-4 font-bold  bg-white shadow">
                <p className="sh-underline">Top Deals</p>
              </div>
              <div className="flex flex-wrap justify-center bg-white p-5 gap-5">
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

export default ProductVideosByCategory;
