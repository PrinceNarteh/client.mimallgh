"use client";

import { CartItem } from "@/components";
import { useCartSelector } from "@/hooks/useCartSelector";
import { useDeliverySelector } from "@/hooks/useDeliverySelector";
import emptyCart from "@/public/images/empty-cart.png";
import { fetchDeliveryCompanies } from "@/queries";
import { setDeliveryCompany } from "@/store/features/delivery/deliverySlice";
import { useAppDispatch } from "@/store/store";
import calculatePrice from "@/utils/calculatePrice";
import { getDeliveryFare, towns } from "@/utils/dispatch-fares";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useQuery } from "react-query";

interface IDelivery {
  deliveryCompany: string;
  destination: string;
}

const Cart = () => {
  const { deliveryCompany } = useDeliverySelector();
  const [deliveryData, setDeliveryData] = useState({
    company: "",
    destination: "",
  });
  const { items } = useCartSelector();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      deliveryCompany: "",
      destination: "",
    },
  });
  const { data } = useQuery({
    queryKey: ["delivery-companies"],
    queryFn: fetchDeliveryCompanies,
  });

  const deliveryPrice = deliveryData.destination
    ? getDeliveryFare("uccCampus", deliveryData.destination)
    : 0;

  const price = calculatePrice(items);

  const totalPrice = deliveryPrice + price;

  const submitHandler: SubmitHandler<IDelivery> = () => {
    dispatch(setDeliveryCompany(deliveryCompany!));
    router.push(`/delivery/${deliveryCompany?.slug}/checkout`);
  };

  return (
    <div className="bg-white">
      <div className="pt-20 mx-auto grid w-full max-w-4xl grid-cols-1 gap-y-5 p-7 pb-10 md:grid-cols-7 md:gap-x-5">
        <div className="col-span-4 w-full space-y-5">
          {items.length === 0 ? (
            <div className="relative h-full flex flex-col w-full items-center justify-center">
              <Image
                src={emptyCart}
                alt="empty-cart"
                style={{ width: "auto" }}
              />
              <button className="bg-pink-500 py-2 px-5 rounded-full text-white">
                Shop Now
              </button>
            </div>
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
          <div className="rounded border border-gray-400 p-3">
            <form className="space-y-2" onSubmit={handleSubmit(submitHandler)}>
              <div className="border-b border-gray-400">
                <h3 className="font-bold">Delivery Details</h3>
              </div>
              <div className="space-y-2 pt-3 peer-checked:block">
                <div>
                  <label htmlFor="" className="block mb-1 font-bold">
                    Delivery company
                  </label>
                  <select
                    className="border w-full p-2"
                    {...register("deliveryCompany", {
                      required: {
                        value: true,
                        message: "Delivery company is required",
                      },
                    })}
                  >
                    <option value="">Select Delivery company</option>
                    {data?.map((company, idx) => (
                      <option key={idx} value={company.id}>
                        {company.name}
                      </option>
                    ))}
                  </select>
                  {errors["deliveryCompany"] && (
                    <span className="block text-[12px] pl-1 text-[red]">
                      {errors["deliveryCompany"].message}
                    </span>
                  )}
                </div>
                <div>
                  <label htmlFor="" className="block mb-2 font-bold">
                    Destination
                  </label>
                  <select
                    className="border w-full p-2"
                    {...register("destination", {
                      required: {
                        value: true,
                        message: "Destination is required",
                      },
                      onChange: (e) => {
                        setDeliveryData({
                          ...deliveryData,
                          destination: e.target.value,
                        });
                      },
                    })}
                  >
                    <option value="">Select Destination</option>
                    {towns.map((town, idx) => (
                      <option key={idx} value={town.value}>
                        {town.label}
                      </option>
                    ))}
                  </select>
                  {errors["destination"] && (
                    <span className="block text-[12px] pl-1 text-[red]">
                      {errors["destination"].message}
                    </span>
                  )}
                </div>
              </div>
              <button className="block w-full rounded-md bg-pink-500 pt-5 pb-3 text-center font-bold text-white">
                Checkout
              </button>
            </form>
          </div>
          <div className="space-y-2 rounded border border-gray-400 p-3">
            <div className="w-full flex items-center justify-between ">
              <h4>Subtotal</h4>
              <span>¢{price}</span>
            </div>
            <div className="w-full flex items-center justify-between ">
              <h4>Delivery</h4>
              <span>¢{deliveryPrice}</span>
            </div>
            <div className="w-full flex border-y py-2 font-bold border-gray-400 items-center justify-between ">
              <h4>Total</h4>
              <span>¢{totalPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
