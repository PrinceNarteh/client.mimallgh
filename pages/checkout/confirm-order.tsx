import { OrderSummary } from "@/components";
import { useRouter } from "next/router";
import type { FormEvent } from "react";

const Checkout = () => {
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router
      .push("/checkout/delivery-service")
      .catch((error) => console.log(error));
  };

  return (
    <div className="py-5">
      <div className="w-10/12 mx-auto">
        <h3 className="sh-underline text-2xl mb-7 font-bold">Order Summary</h3>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-8">
            <OrderSummary />
          </div>
          <div className="col-span-12 w-full lg:col-span-4">
            <h4 className="sh-underline relative md:text-2xl">Address</h4>
            <form onSubmit={handleSubmit} className="mt-5 space-y-5 w-full">
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 w-full"
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
  );
};

export default Checkout;
