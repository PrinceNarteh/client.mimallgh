"use client";

import { OrderSummary } from "@/components";
import { useCartSelector } from "@/hooks/useCartSelector";
import { useDeliverySelector } from "@/hooks/useDeliverySelector";
import { createQuickOrder } from "@/services/orders";
import { clearCart, getCartTotal } from "@/store/features/cart/cartSlice";
import { useAppDispatch } from "@/store/store";
import calculatePrice from "@/utils/calculatePrice";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

interface IForm {
  fullName: string;
  phoneNumber: string;
  alternatePhoneNumber?: string;
}

const initialValue: IForm = {
  fullName: "",
  phoneNumber: "",
  alternatePhoneNumber: "",
};

const Checkout = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<IForm>({
    defaultValues: initialValue,
  });
  const { deliveryCharge, items } = useCartSelector();
  const dispatch = useAppDispatch();
  const { deliveryCompany } = useDeliverySelector();
  const createQuickOrderMutation = useMutation({
    mutationFn: createQuickOrder,
  });

  const submitHandler = async (data: any) => {
    const toastId = toast.loading("loading...");
    const orderData = {
      deliveryCompany: deliveryCompany?.id,
      deliveryCharge,
      items,
      amount: calculatePrice(items),
      ...data,
    };

    try {
      createQuickOrderMutation.mutate(orderData, {
        onSuccess(data, variables, context) {
          toast.dismiss(toastId);
          toast.success("Order successfully placed");
          // router.push(`/delivery/${deliveryCompany?.slug}/`);
        },
        onError() {
          toast.dismiss(toastId);
          toast.error("Error placing order");
        },
      });
    } catch (error) {
      toast.error("Error placing order");
    }
  };

  return (
    <div className="py-20 bg-white">
      <div className="w-10/12 mx-auto">
        <h3 className="sh-underline text-2xl mb-7 font-bold">Order Summary</h3>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-8">
            <OrderSummary />
          </div>
          <div className="col-span-12 w-full lg:col-span-4 space-y-5">
            <h4 className="sh-underline relative md:text-2xl mb-3">
              Delivery Address
            </h4>
            <div>
              <label
                htmlFor="newAddress"
                className="ml-2 inline-block cursor-pointer"
              >
                Address
              </label>
              <form
                onSubmit={handleSubmit(submitHandler)}
                className="mt-5 space-y-3 w-full"
              >
                <div className="">
                  <label
                    htmlFor="base-input"
                    className="block mb-1 text-md font-medium text-gray-900"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2 outline-none w-full"
                    {...register("fullName", {
                      required: {
                        value: true,
                        message: "Full name is required.",
                      },
                    })}
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="phone-number"
                    className="block mb-1 text-md font-medium text-gray-900"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone-number"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 outline-none"
                    {...register("phoneNumber", {
                      required: {
                        value: true,
                        message: "Phone number is required",
                      },
                    })}
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="alternate-phone-number"
                    className="block mb-1 text-md font-medium text-gray-900"
                  >
                    Alternate Phone Number
                  </label>
                  <input
                    type="text"
                    id="alternate-phone-number"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 outline-none"
                    {...register("alternatePhoneNumber")}
                  />
                </div>
                <button className="block w-full rounded-md bg-pink-500 py-3 text-center font-bold text-white">
                  Confirm Order
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
