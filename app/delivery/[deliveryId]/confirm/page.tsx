"use client";

import DeliveryFormLayout from "@/components/client/DeliveryFormLayout";
import { useDeliverySelector } from "@/hooks/useDeliverySelector";
import { createDelivery } from "@/services/deliveries";
import { clearDelivery } from "@/store/features/delivery/deliverySlice";
import { useAppDispatch } from "@/store/store";
import { formatPhoneNumber } from "@/utils";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { BiEdit } from "react-icons/bi";
import { BsFillCheckCircleFill } from "react-icons/bs";

const ConfirmDeliveryRequest = () => {
  const { delivery, deliveryCompany } = useDeliverySelector();
  const createDeliveryMutation = useMutation({
    mutationFn: createDelivery,
  });
  const router = useRouter();
  const dispatch = useAppDispatch();

  const submitRequest = () => {
    const toastId = toast.loading("Loading...");
    createDeliveryMutation.mutate(
      {
        ...delivery,
        deliveryCompany: deliveryCompany?.id!,
      },
      {
        onSuccess() {
          toast.dismiss(toastId);
          toast.success("Delivery Request Successfully made!");
          dispatch(clearDelivery());
          router.push(`/delivery/${deliveryCompany}/request`);
        },
        onError(error) {
          toast.dismiss(toastId);
          toast.error("Error making request");
        },
      }
    );
  };

  let dateAndTime = delivery.dateAndTime.split("T");

  return (
    <DeliveryFormLayout>
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
            <p>{delivery.fullName}</p>
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
          {dateAndTime.length > 1 ? (
            <>
              <div className="flex flex-wrap items-center gap-1">
                <p className="w-28 md:w-36 inline-block font-bold">Date</p>
                <p>
                  {dateAndTime.length > 1
                    ? `${new Date(delivery.dateAndTime).toDateString()} `
                    : `${dateAndTime[0]}`}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-1">
                <p className="w-28 md:w-36 inline-block font-bold">Time</p>
                <p>{new Date(delivery.dateAndTime).toLocaleTimeString()}</p>
              </div>
            </>
          ) : (
            <div className="flex flex-wrap items-center gap-1">
              <p className="w-28 md:w-36 inline-block font-bold">Time</p>
              <p>{`${delivery.dateAndTime} ${
                parseInt(delivery.dateAndTime.split(":")[0], 10) < 12
                  ? "AM"
                  : "PM"
              }`}</p>
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-1 mt-4">
          <div className="w-36 md:w-40 lg:inline-block hidden"></div>
          <button
            onClick={() => submitRequest()}
            type="button"
            className="bg-pink-500 text-white flex-1 py-2 rounded"
          >
            Send Request
          </button>
        </div>
      </div>
    </DeliveryFormLayout>
  );
};

export default ConfirmDeliveryRequest;
