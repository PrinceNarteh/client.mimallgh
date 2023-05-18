import { Container } from "@/components";
import { Error } from "@/components/Error";
import ProductList from "@/components/ProductList";
import { CustomLinks } from "@/components/layout";
import { getStore } from "@/services/store";
import { Store } from "@/types";
import { capitalize } from "@/utils/utilities";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { MdAddCall } from "react-icons/md";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { storeId } = context.query;
  const data = await getStore(storeId as string);

  return {
    props: {
      store: data,
    },
  };
};

const WebStore = ({ store }: { store: Store }) => {
  if (!store) return <Error />;
  return (
    <Container>
      <div className=" relative mx-auto mb-5 w-11/12">
        <div className="pb-5">
          <div className="relative h-[200px] md:h-[400px] bg-teal-500">
            <Image
              src={"/images/web-store-banner.jpg"}
              fill
              alt=""
              style={{ objectFit: "cover" }}
              className="object-top"
            />
          </div>
          <div className=" flex flex-col md:flex-row">
            <div className="relative bottom-8 md:bottom-16 left-5 h-16 w-16 md:h-32 md:w-32 shrink-0 rounded-full bg-red-500"></div>
            <h3 className="absolute transform translate-x-24 translate-y-0.5 font-bold text-xl">
              {store.name}
            </h3>
            <div className="-mt-6 space-y-2 pt-2 w-full md:ml-14 md:mt-0">
              <p>{store.description}</p>
              <div className="grid grid-auto-fit-lg gap-3 py-3">
                <div className="flex items-center">
                  <span className="font-semibold mr-3">Contact:</span>
                  <div className="flex gap-2">
                    <div className="w-7 h-7 bg-gray-800 rounded-full flex justify-center items-center cursor-pointer">
                      <MdAddCall className="text-white" />
                    </div>
                    <div className="w-7 h-7 bg-gray-800 rounded-full flex justify-center items-center cursor-pointer">
                      <FaFacebookF className="text-white" />
                    </div>
                    <div className="w-7 h-7 bg-gray-800 rounded-full flex justify-center items-center cursor-pointer">
                      <FaWhatsapp className="text-white" />
                    </div>
                    <div className="w-7 h-7 bg-gray-800 rounded-full flex justify-center items-center cursor-pointer">
                      <FaTwitter className="text-white" />
                    </div>
                    <div className="w-7 h-7 bg-gray-800 rounded-full flex justify-center items-center cursor-pointer">
                      <FaInstagram className="text-white" />
                    </div>
                    <div className="w-7 h-7 bg-gray-800 rounded-full flex justify-center items-center cursor-pointer">
                      <FaTiktok className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="">
                  <p>
                    <span className="font-semibold">Map Direction:</span>{" "}
                    {store.mapDirection}
                  </p>
                </div>
                <div className="">
                  <p>
                    <span className="font-semibold">Physical Address:</span>{" "}
                    {store.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="sticky top-16 z-20 border-y bg-white shadow-md p-1 rounded">
            <CustomLinks />
          </div>
        </div>
        <div className="w-full overflow-x-auto">
          <div className="flex gap-3">
            {store.products.map((product, idx) => (
              <Link key={idx} href={`/category/${product.category}`}>
                <div
                  className={`group relative h-28 w-28 cursor-pointer overflow-hidden rounded-2xl p-5 shadow-lg`}
                >
                  <Image
                    src={product.data[0].images[0].secure_url}
                    className="absolute object-cover duration-500 group-hover:scale-110"
                    fill={true}
                    alt=""
                  />
                  <div className="absolute inset-0 h-full w-full bg-black opacity-60"></div>
                  <div className="relative z-10 flex h-full w-full items-center justify-center">
                    <h3 className=" text-center text-md text-white">
                      {capitalize(product.category, "_")}
                    </h3>
                  </div>
                </div>
                <p className="mt-1 text-center text-sm">
                  {product.data.length} ads
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div>
        <ProductList products={store.products} />
      </div>
    </Container>
  );
};

export default WebStore;
