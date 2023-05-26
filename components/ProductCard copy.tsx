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
    <div className="h-[200px] w-[120px] my-5 shrink-0 md:h-[230px] md:w-[205px]">
      <Link
        href={`/web-store/${product.shop.id}`}
        className="mb-1 px-1 text-xs md:text-sm font-bold tracking-widest text-pink-500 line-clamp-1"
      >
        {product.shop.name}
      </Link>
      <div
        onClick={() => handleNavigate()}
        className="shrink-0 cursor-pointer overflow-hidden rounded-md shadow-md"
      >
        <div className="relative h-[130px] md:h-[160px] w-full">
          <Image
            src={product.images[0].secure_url}
            fill
            alt=""
            sizes="(max-width: 768px) 10vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
          />
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
