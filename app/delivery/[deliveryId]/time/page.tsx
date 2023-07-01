"use client";

import DeliveryFormLayout from "@/components/client/DeliveryFormLayout";
import { useDeliverySelector } from "@/hooks/useDeliverySelector";
import { addInfo } from "@/store/features/delivery/deliverySlice";
import { useAppDispatch } from "@/store/store";
import { Delivery } from "@/types";
import { formatPhoneNumber } from "@/utils";
import Link from "next/link";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { BiEdit } from "react-icons/bi";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { ErrorMessage } from "@/components";

const DeliveryTimeForm = () => {
  const dispatch = useAppDispatch();
  const [time, setTime] = useState("now");
  const { delivery } = useDeliverySelector();
  const router = useRouter();
  const params = useParams();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: delivery,
  });

  const submitHandler: SubmitHandler<Delivery> = (data) => {
    const toastId = toast.loading("Loading...");
    dispatch(
      addInfo({
        ...delivery,
        ...data,
      })
    );
    toast.dismiss(toastId);
    router.push(`/delivery/${params.deliveryId}/confirm`);
  };

  console.log(errors);

  return (
    <DeliveryFormLayout>
      <div className="space-y-5">
        <div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex  items-center gap-2">
              <BsFillCheckCircleFill className="text-xl text-green-500" />
              <h3 className="text-xl font-bold sh-underline">Order Form</h3>
            </div>
            <Link href={`/delivery/${params.deliveryId}/request`}>
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
              <p>GHC{delivery.deliveryCharge}</p>
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
            <Link href={`/delivery/${params.deliveryId}/recipient`}>
              <BiEdit className="text-pink-500 text-2xl cursor-pointer" />
            </Link>
          </div>

          <div className="space-y-2 mt-4 ml-7">
            <div className="flex flex-wrap items-center gap-1">
              <p className="w-40 inline-block font-bold">Name</p>
              <p>{delivery.fullName}</p>
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <p className="w-40 inline-block font-bold">Location</p>
              <p>{delivery.location}</p>
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <p className="w-40 inline-block font-bold">Call Contact</p>
              <p>{formatPhoneNumber(delivery.phoneNumber)}</p>
            </div>
            {delivery.alternatePhoneNumber && (
              <div className="flex flex-wrap items-center gap-1">
                <p className="w-40 inline-block font-bold">Alternate Contact</p>
                <p>{formatPhoneNumber(delivery.alternatePhoneNumber)}</p>
              </div>
            )}
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
                Now Or Later
              </label>
              <select
                name=""
                id=""
                className="flex-1 border border-[#165474] outline-none p-1 rounded"
                onChange={(e) => setTime(e.target.value)}
              >
                <option value="now">Now</option>
                <option value="later">Later</option>
              </select>
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <label htmlFor="" className="w-28 md:w-40 inline-block"></label>
              {time === "now" ? (
                <div className="flex-1">
                  <input
                    type="time"
                    className="border border-[#165474] outline-none p-1 rounded w-full"
                    {...register("time", {
                      ...(time === "now" && {
                        required: {
                          value: true,
                          message: "Time for delivery is required",
                        },
                      }),
                    })}
                  />
                  <ErrorMessage field="time" />
                </div>
              ) : (
                <div className="flex-1">
                  <input
                    type="datetime-local"
                    className="border border-[#165474] outline-none p-1 rounded w-full"
                    {...register("time", {
                      ...(time === "later" && {
                        required: {
                          value: true,
                          message: "Date and Time for delivery is required",
                        },
                      }),
                    })}
                  />
                  <ErrorMessage field="time" />
                </div>
              )}
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
