import { OrderSummary } from "@/components";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import type { FormEvent } from "react";

const Checkout = () => {
  const router = useRouter();
  const { data: session } = useSession();

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
          <div className="col-span-12 w-full lg:col-span-4 space-y-5">
            <div>
              <h4 className="sh-underline relative md:text-2xl mb-3">
                Address
              </h4>
              <div>
                <input type="radio" name="address" id="oldAddress" checked />
                <label
                  htmlFor="oldAddress"
                  className="ml-2 inline-block cursor-pointer"
                >
                  Use Existing Address
                </label>
                <p className="text-sm pl-5 font-semibold">
                  {session?.user?.firstName} {session?.user?.lastName} -{" "}
                  {session?.user?.email}
                </p>
              </div>
            </div>
            <div>
              <input
                type="radio"
                name="address"
                id="newAddress"
                className="peer"
              />
              <label
                htmlFor="newAddress"
                className="ml-2 inline-block cursor-pointer"
              >
                Add New Address
              </label>
              <form
                onSubmit={handleSubmit}
                className="hidden mt-5 space-y-3 w-full peer-checked:block"
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
                  />
                </div>
              </form>
            </div>
            <button className="block w-full rounded-md bg-pink-500 py-3 text-center font-bold text-white">
              Confirm Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
