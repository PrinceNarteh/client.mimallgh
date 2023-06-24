import { decrease, increase, remove } from "@/store/features/cart/cartSlice";
import { useCartSelector } from "@/hooks/useCartSelector";
import { useAppDispatch } from "@/store/store";
import { ICartItem } from "@/types";
import { parseProductImageUrl } from "@/utils";
import Image from "next/image";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { MdDelete } from "react-icons/md";

export const CartItem = ({ cart }: { cart: ICartItem }) => {
  const store = useCartSelector();
  const dispatch = useAppDispatch();

  return (
    <div className="flex h-28 w-full rounded border border-gray-200 bg-gray-200 overflow-hidden">
      <div className="relative w-24 shrink-0">
        <Image
          src={parseProductImageUrl(cart.productImage)}
          fill
          style={{ objectFit: "cover" }}
          alt=""
        />
      </div>
      <div className="flex-1 border-l border-l-gray-400 py-2 px-5">
        <div className="flex justify-between items-center">
          <h3 className="line-clamp-1 text-xl font-semibold tracking-wide">
            {cart.productName}
          </h3>
          <p className="-pl-0 -mt-0 tracking-wide">
            <span className="text-xl">¢</span>
            {cart.price}
          </p>
        </div>
        <p className="-pl-0 my-3 -mt-0 flex items-start tracking-wide">
          {cart.shopName}
        </p>

        <div className="flex w-full items-center justify-between">
          <div className="-mt-1 flex items-center space-x-2">
            <IoMdArrowDropleft
              className="cursor-pointer text-4xl"
              onClick={() => dispatch(decrease({ id: cart.productId }))}
            />
            <span className="inline-block">{cart.quantity}</span>
            <IoMdArrowDropright
              onClick={() => dispatch(increase({ id: cart.productId }))}
              className="cursor-pointer text-4xl"
            />
          </div>
          <MdDelete
            onClick={() => dispatch(remove({ id: cart.productId }))}
            className="cursor-pointer text-2xl text-red-500"
          />
        </div>
      </div>
    </div>
  );
};
