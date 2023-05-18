import { Banner } from "@/components";
import { Error } from "@/components/Error";
import ProductList from "@/components/ProductList";
import { getProducts } from "@/services/products";
import { allProduct } from "@/store/features/products/productSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { IProduct } from "@/types";
import { categories } from "@/utils/data";
import { locations } from "@/utils/menus";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getProducts();

  return {
    props: {
      products: data,
    },
  };
};

const Home = ({ products }: { products: IProduct }) => {
  const data = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(allProduct(products));
  }, [data]);

  // console.log(products);

  console.log(data);

  if (!products) return <Error />;
  return (
    <div className="">
      <Banner />
      <section className="mx-auto w-11/12 space-y-5 pb-10 pt-7">
        <div>
          <h4 className="sh-underline relative md:text-3xl">Categories</h4>
          <div className="w-full overflow-x-scroll">
            <div className="flex gap-3 py-4">
              {categories.map((category, idx) => (
                <Link key={idx} href={`/category/${category.link}`}>
                  <div
                    className={`group relative h-28 w-52 cursor-pointer overflow-hidden rounded-2xl p-5 shadow-lg`}
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
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h4 className="sh-underline relative md:text-3xl">Markets</h4>
          <div className="w-full overflow-x-scroll">
            <div className="flex gap-3 py-4">
              {locations.slice(1).map((location, idx) => (
                <Link key={idx} href={`/markets/${location.link}`}>
                  <div
                    className={`group relative h-28 w-52 cursor-pointer overflow-hidden rounded-2xl p-5 shadow-lg`}
                  >
                    <Image
                      src={"/images/product-1.jpg"}
                      className="absolute object-cover duration-500 group-hover:scale-110"
                      fill={true}
                      alt=""
                    />
                    <div className="absolute inset-0 h-full w-full bg-black opacity-60"></div>
                    <div className="relative z-10 flex h-full w-full items-center justify-center">
                      <h3 className=" text-center text-lg text-white">
                        {location.label}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-1 text-center text-sm">
                    300 Sellers | 150 ads
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProductList products={data.products.data} />
    </div>
  );
};

export default Home;
