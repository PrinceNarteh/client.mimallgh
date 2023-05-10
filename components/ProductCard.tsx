import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="h-[280px] w-[200px] bg-white p-3">
      <Link
        href={`/web-store/1`}
        className="mb-1 px-1 text-xs font-bold tracking-widest text-pink-500 line-clamp-1"
      >
        {product.shop.name}
      </Link>
      <div className="shrink-0 cursor-pointer overflow-hidden rounded-md shadow-md">
        <div className="relative h-[190px] w-[190px]">
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
        <div className="px-2 py-1">
          <p className="text-sm line-clamp-1">{product.title}</p>
          <p className="font-semibold text-center">GH¢{product.price}</p>
        </div>
      </div>
    </div>
  );
};
