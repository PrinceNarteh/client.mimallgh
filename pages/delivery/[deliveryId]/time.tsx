import DeliveryFormLayout from "@/components/DeliveryFormLayout";
import {
  addInfo,
  useDeliverySelector,
} from "@/store/features/delivery/deliverySlice";
import { useAppDispatch } from "@/store/store";
import { Delivery } from "@/types";
import { formatPhoneNumber } from "@/utils/utilities";
import Link from "next/link";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { BiEdit } from "react-icons/bi";
import { BsFillCheckCircleFill } from "react-icons/bs";

const DeliveryTimeForm = () => {
  const dispatch = useAppDispatch();
  const { delivery } = useDeliverySelector();
  const router = useRouter();

  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: delivery,
  });

  const submitHandler: SubmitHandler<Delivery> = (data) => {
    dispatch(
      addInfo({
        ...delivery,
        ...data,
      })
    );
    router.push(`/delivery/${router.query.deliveryId}/confirm`);
  };
  return (
    <DeliveryFormLayout>
      <div className="space-y-5">
        <div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex  items-center gap-2">
              <BsFillCheckCircleFill className="text-xl text-green-500" />
              <h3 className="text-xl font-bold sh-underline">Order Form</h3>
            </div>
            <Link href={"/delivery/name/request"}>
              <BiEdit className="text-pink-500 text-2xl cursor-pointer" />
            </Link>
          </div>

          <div className="space-y-2 mt-4 ml-7">
            <div className="flex flex-wrap items-center gap-1">
              <p className="w-40 inline-block font-bold">I want you to</p>
              <p>{delivery.request}</p>
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <p className="w-40 inline-block font-bold">From</p>
              <p>{delivery.from}</p>
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <p className="w-40 inline-block font-bold">To</p>
              <p>{delivery.to}</p>
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <p className="w-40 inline-block font-bold">Other Details</p>
              <p>{delivery.otherDetails}</p>
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <p className="w-40 inline-block font-bold">Delivery Fee</p>
              <p>GHC{delivery.price}</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex  items-center gap-2">
              <BsFillCheckCircleFill className="text-xl text-green-500" />
              <h3 className="text-xl font-bold sh-underline">
                Recipient Address
              </h3>
            </div>
            <Link href={"/delivery/name/recipient"}>
              <BiEdit className="text-pink-500 text-2xl cursor-pointer" />
            </Link>
          </div>

          <div className="space-y-2 mt-4 ml-7">
            <div className="flex flex-wrap items-center gap-1">
              <p className="w-40 inline-block font-bold">Name</p>
              <p>{delivery.name}</p>
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <p className="w-40 inline-block font-bold">Location</p>
              <p>{delivery.location}</p>
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <p className="w-40 inline-block font-bold">Call Contact</p>
              <p>{formatPhoneNumber(delivery.phoneNumber)}</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mt-5">
            <BsFillCheckCircleFill className="text-xl text-green-500" />
            <h3 className="text-lg font-bold sh-underline">
              Schedule Delivery Time/Date
            </h3>
          </div>
          <form
            className="ml-7 space-y-2"
            onSubmit={handleSubmit(submitHandler)}
          >
            <div className="flex mt-4 flex-wrap items-center gap-1">
              <label htmlFor="" className="w-28 md:w-40  inline-block">
                Now
              </label>
              <input
                type="time"
                className="flex-1 border border-[#165474] outline-none p-1 rounded"
                {...register("time", {
                  required: {
                    value: true,
                    message: "Time is required",
                  },
                })}
              />
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <label htmlFor="" className="w-28 md:w-40 inline-block">
                Later
              </label>
              <input
                type="datetime-local"
                className="flex-1 border border-[#165474] outline-none p-1 rounded"
                {...register("date", {
                  required: {
                    value: true,
                    message: "Date and Time for delivery is required",
                  },
                })}
              />
            </div>
            <div className="flex flex-wrap items-center gap-1 pt-2">
              <div className="w-40 lg:inline-block hidden"></div>

              <button
                type="submit"
                className="bg-pink-500 text-white flex-1 py-2 rounded"
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </DeliveryFormLayout>
  );
};

export default DeliveryTimeForm;
