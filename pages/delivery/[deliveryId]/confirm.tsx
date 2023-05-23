import DeliveryFormLayout from "@/components/DeliveryFormLayout";
import {
  addInfo,
  useDeliverySelector,
} from "@/store/features/delivery/deliverySlice";
import { useAppDispatch } from "@/store/store";
import { formatPhoneNumber } from "@/utils/utilities";
import { useRouter } from "next/router";
import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useForm, SubmitHandler } from "react-hook-form";
import { Delivery } from "@/types";
import Link from "next/link";
import { BiEdit } from "react-icons/bi";

const ConfirmDeliveryRequest = () => {
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
    router.push("/delivery/name/time");
    router.push("/delivery/name/time");
  };
  return (
    <DeliveryFormLayout>
      <div>
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
              <p className="w-36 inline-block font-bold">I want you to</p>
              <p>{delivery.request}</p>
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <p className="w-36 inline-block font-bold">From</p>
              <p>{delivery.from}</p>
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <p className="w-36 inline-block font-bold">To</p>
              <p>{delivery.to}</p>
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <p className="w-36 inline-block font-bold">Other Details</p>
              <p>{delivery.otherDetails}</p>
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <p className="w-36 inline-block font-bold">Delivery Fee</p>
              <p>GHC33.50</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between gap-2 my-3">
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
              <p className="w-36 inline-block font-bold">Name</p>
              <p>{delivery.name}</p>
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <p className="w-36 inline-block font-bold">Location</p>
              <p>{delivery.location}</p>
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <p className="w-36 inline-block font-bold">Call Contact</p>
              <p>{formatPhoneNumber(delivery.phoneNumber)}</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between gap-2 my-3">
            <div className="flex  items-center gap-2">
              <BsFillCheckCircleFill className="text-xl text-green-500" />
              <h3 className="text-md font-bold sh-underline">
                Schedule Delivery Time/Date
              </h3>
            </div>
            <Link href={"/delivery/name/time"}>
              <BiEdit className="text-pink-500 text-2xl cursor-pointer" />
            </Link>
          </div>

          <div className="space-y-2 mt-4 ml-7">
            <div className="flex flex-wrap items-center gap-1">
              <p className="w-28 md:w-36 inline-block font-bold">Time</p>
              <p>{delivery.time}</p>
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <p className="w-28 md:w-36 inline-block font-bold">Date</p>
              <p>{delivery.date}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-1 mt-4">
            <div className="w-36 md:w-40 lg:inline-block hidden"></div>
            <button
              type="submit"
              className="bg-pink-500 text-white flex-1 py-2 rounded"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </DeliveryFormLayout>
  );
};

export default ConfirmDeliveryRequest;
