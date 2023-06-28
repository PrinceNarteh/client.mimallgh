import Image from "next/image";
import Link from "next/link";

import { Product } from "@/types";
import { parseProductImageUrl } from "@/utils";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="h-[200px] w-[150px] my-2 shrink-0 md:h-[230px] md:w-[205px]">
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
              src={parseProductImageUrl(product.images[0].name)}
              fill
              sizes="190px"
              alt=""
              style={{ objectFit: "cover" }}
            />
          </Link>
        </div>
        <div className="px-2 py-1 bg-white">
          <p className="text-xs md:text-sm line-clamp-1">{product.title}</p>
          <p className="font-semibold text-center text-sm md:text-base">
            GH¢{product.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
