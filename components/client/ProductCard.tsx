"use client";

import { addToCart } from "@/store/features/cart/cartSlice";
import { useAppDispatch } from "@/store/store";
import { Product } from "@/types";
import { parseProductImageUrl } from "@/utils";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { TiShoppingCart } from "react-icons/ti";

export const ProductCard = ({ product }: { product: Product }) => {
  const navigate = useRouter();
  const dispatch = useAppDispatch();
  const params = useParams();

  const handleNavigate = () => {
    navigate.push(`/delivery/${params.deliveryId}/products/${product.id}`);
  };

  const handleAddToCart = () => {
    toast.success("Product Added");
    dispatch(
      addToCart({
        productImage: product.images[0].name,
        price: product.price,
        productId: product.id,
        productName: product.title,
        quantity: 1,
        shopId: product.shop.id,
        shopName: product.shop.name,
      })
    );
  };

  return (
    <div className="h-fit w-[120px] my-5 shrink-0 md:h-[230px] md:w-[205px]">
      {/* <Link
        href={`/web-store/${product.shop.id}`}
        className="mb-1 px-1 text-xs md:text-sm font-bold tracking-widest text-pink-500 line-clamp-1"
      >
        {product.shop.name}
      </Link> */}
      <div className="shrink-0 overflow-hidden rounded-md shadow-md px-3 py-2 border">
        <div onClick={() => handleNavigate()} className="cursor-pointer">
          <div className="flex justify-center items-center h-10">
            <p className="text-sm text-center text-[#165474] font-semibold md:text-sm line-clamp-2 ">
              {product.title}
            </p>
          </div>
          <div className="relative h-[50px] overflow-hidden md:h-[100px] rounded-md mx-auto my-3">
            <Image
              src={parseProductImageUrl(product.images[0].name)}
              fill
              alt=""
              sizes="(max-width: 768px) 10vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="pb-1  flex justify-between bg-white">
          <p className="text-center text-sm font-semibold text-gray-700 md:text-base">
            <span className="text-xl">¢</span>
            {product.price}
          </p>
          <button
            onClick={() => handleAddToCart()}
            className="text-xs border rounded text-pink-500 border-pink-500 px-2 py-1 hover:bg-pink-500 hover:text-white duration-300"
          >
            <TiShoppingCart className="md:hidden" />
            <span className="hidden md:block">Add To Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};
