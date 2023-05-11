import { Container } from "@/components";
import ProductList from "@/components/ProductList";
import axios from "@/lib/axios";
import { getAllProducts } from "@/services/products";
import { IProduct } from "@/types";
import { categories } from "@/utils/data";
import { capitalize } from "@/utils/utilities";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { marketId } = context.query;
  const data = await getAllProducts(`location=${marketId}`);

  return {
    props: {
      products: data,
    },
  };
};

type IProductProps = {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  data: IProduct;
};

const Markets = ({ products }: { products: IProductProps }) => {
  const [state, setState] = useState<IProductProps>(products);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { query } = useRouter();
  const market = capitalize(query.marketId as string);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `/products/?location=${query.marketId}&category=${selectedCategory}`
      );

      console.log(res);
      setState(res.data);
    };

    if (selectedCategory) {
      fetchData();
    }
  }, [selectedCategory, axios]);

  return (
    <Container>
      <div className="mx-auto w-11/12 py-5">
        <h3 className="sh-underline text-3xl">{market} Market</h3>
      </div>

      <section className="mx-auto w-11/12 py-10">
        <div className="grid gap-5 grid-auto-fit-lg">
          {categories.map((category, idx) => (
            <div key={idx} onClick={() => setSelectedCategory(category.key)}>
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
            </div>
          ))}
        </div>
      </section>

      <div>
        <ProductList products={state.data} />
      </div>
    </Container>
  );
};

export default Markets;
