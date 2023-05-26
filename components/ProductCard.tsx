import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export const ProductCard = ({ product }: { product: Product }) => {
  const navigate = useRouter();

  const handleNavigate = () => {
    navigate.push(`/products/${product.id}`);
  };

  return (
    <div className="h-[300px] w-[120px] my-5 shrink-0 md:h-[230px] md:w-[205px]">
      {/* <Link
        href={`/web-store/${product.shop.id}`}
        className="mb-1 px-1 text-xs md:text-sm font-bold tracking-widest text-pink-500 line-clamp-1"
      >
        {product.shop.name}
      </Link> */}
      <div className="shrink-0 overflow-hidden rounded-md shadow-md px-3 py-2 border">
        <div onClick={() => handleNavigate()} className="cursor-pointer">
          <div className="flex justify-center items-center h-10">
            <p className="text-sm text-center font-semibold md:text-sm line-clamp-2 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, omnis?
            </p>
          </div>
          <div className="relative h-[50px] overflow-hidden md:h-[100px] rounded-md mx-auto my-3">
            <Image
              src={product.images[0].secure_url}
              fill
              alt=""
              sizes="(max-width: 768px) 10vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="py-1 bg-white flex justify-between">
          <p className="text-center text-sm font-semibold text-gray-700 md:text-base">
            <span className="text-xl">¢</span>
            {product.price}
          </p>
          <button className="text-xs border rounded text-pink-500 border-pink-500 px-2 py-1 hover:bg-pink-500 hover:text-white duration-300">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};
