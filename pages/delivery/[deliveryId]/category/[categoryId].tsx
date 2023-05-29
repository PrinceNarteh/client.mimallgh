import { Container } from "@/components";
import DeliveryLayout from "@/components/layout/DeliveryLayout";
import { getProducts } from "@/services/products";
import { useDeliverySelector } from "@/store/features/delivery/deliverySlice";
import { IProduct } from "@/types";
import { topDeals } from "@/utils/data";
import { capitalize } from "@/utils/utilities";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getProducts("category=food&perPage=12");

  return {
    props: {
      products: data,
    },
  };
};

const ProductByCategory = ({ products }: { products: IProduct }) => {
  const { deliveryCompanyLink } = useDeliverySelector();
  const { query } = useRouter();

  return (
    <DeliveryLayout>
      <Container>
        <div className="bg-gray-300 bg-opacity-30">
          <div className="md:w-11/12 mx-auto p-3 md:p-5">
            <div className="grid grid-cols-1 gap-5">
              <div className="col-span-12 xl:col-span-9 space-y-5">
                <div className="flex items-center bg-white shadow py-4 pl-5 text-2xl">
                  {capitalize(query.categoryId as string)}
                </div>

                <div className="flex flex-wrap justify-center gap-5">
                  {products.data[0].data.map((product, idx) => (
                    <div
                      key={idx}
                      className="h-fit w-[150px] my-2 shrink-0 md:h-fit md:w-[205px]"
                    >
                      <div className="shrink-0 cursor-pointer overflow-hidden rounded-md shadow-md">
                        <div className="relative h-[130px] md:h-[160px] w-full group overflow-hidden">
                          <Link href={`/products/${product.id}`}>
                            <Image
                              src={product.images[0].secure_url}
                              fill
                              sizes="190px"
                              alt=""
                              style={{ objectFit: "cover" }}
                              className="group-hover:scale-110 duration-500"
                            />
                          </Link>
                          <div className="absolute inset-0 h-full w-full bg-black opacity-60"></div>
                          <div className="relative p-5 z-10 flex h-full w-full items-center justify-center">
                            <h3 className=" text-center text-lg text-white line-clamp-3">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Error, voluptatibus.
                            </h3>
                          </div>
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
            </div>
          </div>
        </div>
      </Container>
    </DeliveryLayout>
  );
};

export default ProductByCategory;
