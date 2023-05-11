import Link from "next/link";
import { Container, ProductCard } from "../../components";
import { sections } from "../../utils/data";
import { GetServerSideProps } from "next";
import { getProducts } from "@/services/products";
import { Product } from "@/types";

type IProduct = {
  category: string;
  data: Product[];
}[];

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getProducts();

  return {
    props: {
      products: data,
    },
  };
};

const TopDeals = ({ products }: { products: IProduct }) => {
  return (
    <Container>
      <div className="mx-auto w-11/12 pt-5">
        <div className="flex justify-between pb-5">
          <h4 className="sh-underline relative md:text-3xl">Top Deals</h4>
        </div>

        {sections.map((section, idx) => (
          <div key={idx} className="mb-5 flex flex-col bg-white">
            <div className="mt-2 flex h-full flex-col items-start justify-between border-r-2">
              <h3 className="sh-underline mb-2 text-2xl md:text-4xl">
                {section.heading}
              </h3>
              <Link
                href={`/category/${section.link}`}
                className="hidden font-semibold text-orange-500"
              >
                Read More
              </Link>
            </div>
            <div className="mb-3 flex items-center justify-start gap-5 overflow-y-auto py-2 px-7 pb-2">
              {products[0].data.map((product, idx) => (
                <ProductCard key={idx} product={product} />
              ))}
            </div>
            <Link
              href={`/category/${section.link}`}
              className="mb-5 pr-7 text-right font-semibold text-orange-500"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default TopDeals;
