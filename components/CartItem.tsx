import {
  ICartItem,
  decrease,
  increase,
  useCartSelector,
  remove,
} from "@/store/features/cart/cartSlice";
import { useAppDispatch } from "@/store/store";
import Image from "next/image";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { MdDelete } from "react-icons/md";

export const CartItem = ({ cart }: { cart: ICartItem }) => {
  const store = useCartSelector();
  const dispatch = useAppDispatch();

  return (
    <div className="flex h-28 w-full rounded bg-gray-300">
      <div className="relative w-24 shrink-0">
        <Image src={cart.image} fill style={{ objectFit: "cover" }} alt="" />
      </div>
      <div className="flex-1 border-l border-l-gray-400 py-2 px-5">
        <h3 className="line-clamp-1 text-xl font-semibold tracking-wide flex justify-between">
          {cart.productName}
          <p className="-pl-0 -mt-0 flex items-start tracking-wide">
            ¢{cart.price}
          </p>
        </h3>
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
