import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components";
import Header from "@/components/client/Header";
import { topDeals } from "@/utils/data";
import ProductList from "@/components/client/Product/ProductList";

const ProductByCategory = () => {
  return (
    <Container>
      <div className="bg-gray-300 bg-opacity-30">
        <div className="md:w-11/12 mx-auto p-3 md:p-5">
          <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
            <div className="col-span-12 xl:col-span-9 space-y-5">
              <Header value="categoryId" />
              <ProductList />
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
              <div className="flex flex-wrap justify-center bg-red-5 bg-white py-5 px-3 gap-3">
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

export default ProductByCategory;
