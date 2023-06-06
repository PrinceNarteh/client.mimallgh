import Link from "next/link";
import React, { useState } from "react";
import { CartItem, Container } from "@/components";
import { useCartSelector } from "@/store/features/cart/cartSlice";

const Cart = () => {
  const [checked, setChecked] = useState(false);
  const { items } = useCartSelector();

  return (
    <Container>
      <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-y-5 p-7 pb-10 md:grid-cols-7 md:gap-x-5">
        <div className="col-span-4 w-full space-y-5">
          {items.length === 0 ? (
            <p className="text-gray-700">No Item In Cart</p>
          ) : (
            <>
              {items.map((item, idx) => (
                <CartItem key={idx} cart={item} />
              ))}
            </>
          )}
        </div>
        <div className="col-span-3 space-y-2  h-fit w-full p-3 shadow-md">
          <div className="space-y-2 rounded border border-gray-400 p-3">
            <div className="w-full flex items-center justify-between ">
              <h4>Subtotal</h4>
              <span>
                ¢
                {items.reduce(
                  (amt, currItem) => amt + currItem.quantity * currItem.price,
                  0
                )}
              </span>
            </div>
            <div className="w-full flex items-center justify-between ">
              <h4>Delivery</h4>
              <span>N/A</span>
            </div>
          </div>
          <div className="space-y-2 rounded border border-gray-400 p-3">
            <div className="border-b border-gray-400">
              <h3 className="font-bold">Delivery Details</h3>
            </div>
            <label
              htmlFor="pickUp"
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setChecked(false)}
            >
              <input name="delivery" type="radio" id="pickUp" />
              <span>Pick up at store</span>
            </label>
            <label
              htmlFor="doorstep"
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setChecked(true)}
            >
              <input name="delivery" type="radio" id="doorstep" />
              <span>Doorstep Delivery</span>
            </label>
            {checked ? (
              <div className="space-y-2 pt-3 peer-checked:block">
                <div>
                  <label htmlFor="" className="block mb-1 font-bold">
                    Delivery company
                  </label>
                  <select name="" id="" className="border w-full p-2">
                    <option value="">Select Delivery company</option>
                    <option value="winike-dispatch">WinIke Dispatch</option>
                    <option value="godsway-delivery">God's Way Delivery</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="" className="block mb-2 font-bold">
                    Destination
                  </label>
                  <select name="" id="" className="border w-full p-2">
                    <option value="">Select Destination</option>
                    <option value="abura">Abura</option>
                    <option value="apewosika">Apewosika</option>
                  </select>
                </div>
              </div>
            ) : null}
          </div>
          <div className="space-y-2 rounded border border-gray-400 p-3">
            <div className="w-full flex items-center justify-between ">
              <h4>Subtotal</h4>
              <span>¢200</span>
            </div>
            <div className="w-full flex items-center justify-between ">
              <h4>Delivery</h4>
              <span>¢7.50</span>
            </div>
            <div className="w-full flex border-y py-2 font-bold border-gray-400 items-center justify-between ">
              <h4>Total</h4>
              <span>¢207.50</span>
            </div>
          </div>
          <Link
            href={"/checkout/confirm-order"}
            className="block w-full rounded-md bg-pink-500 py-3 text-center font-bold text-white"
          >
            Checkout
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
