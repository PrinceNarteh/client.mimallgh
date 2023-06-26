"use client";

import DeliveryFormLayout from "@/components/client/DeliveryFormLayout";
import { useDeliverySelector } from "@/hooks/useDeliverySelector";
import { addInfo } from "@/store/features/delivery/deliverySlice";
import { useAppDispatch } from "@/store/store";
import { Delivery } from "@/types";
import {
  getDeliveryFare,
  mapTownLabelToValue,
  mapTownValueToLabel,
  towns,
} from "@/utils/dispatch-fares";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { CgRadioCheck } from "react-icons/cg";

const DeliveryForm = () => {
  const dispatch = useAppDispatch();
  const { delivery } = useDeliverySelector();
  const params = useParams();
  const router = useRouter();
  const [destination, setDestination] = useState({
    from: "",
    to: "",
  });

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...delivery,
      from: mapTownLabelToValue(delivery.from),
      to: mapTownLabelToValue(delivery.to),
    },
  });

  useEffect(() => {
    setDestination({
      from: mapTownLabelToValue(delivery.from),
      to: mapTownLabelToValue(delivery.to),
    });
  }, []);

  const deliveryPrice =
    destination.from && destination.to
      ? getDeliveryFare(destination.from, destination.to)
      : 0;

  const submitHandler: SubmitHandler<Delivery> = (data) => {
    const toastId = toast.loading("Loading...");
    dispatch(
      addInfo({
        ...delivery,
        ...data,
        from: mapTownValueToLabel(data.from),
        to: mapTownValueToLabel(data.to),
        price: deliveryPrice,
      })
    );
    toast.dismiss(toastId);
    router.push(`/delivery/${params.deliveryId}/recipient`);
  };

  return (
    <DeliveryFormLayout>
      <div className="w-full">
        <div>
          <div className="flex items-center gap-2">
            <BsFillCheckCircleFill className="text-xl text-green-500" />
            <h3 className="text-xl font-bold sh-underline">Order Form</h3>
          </div>
          <p className="ml-7 text-lg mt-2">Statement of Request</p>
          <form
            className="ml-7 mt-3 space-y-3"
            onSubmit={handleSubmit(submitHandler)}
          >
            {/* <div className="flex flex-col md:flex-row items-start gap-1">
              <label htmlFor="" className="inline-block md:w-36">
                Other Details
              </label>
              <textarea
                className="flex-1 w-full border border-[#165474] outline-none p-1 rounded"
                placeholder="Eg. Parcel Contains Glass screen."
                {...register("otherDetails")}
              ></textarea>
            </div> */}
            <div className="flex flex-col md:flex-row items-start gap-1">
              <label htmlFor="" className="inline-block md:w-36">
                I want you to
              </label>
              <textarea
                placeholder="Eg. Pick up parcel from Rose - 0570879217 at Passport Office, RM 34"
                // className=" border w-full border-[#165474] outline-none p-1 rounded placeholder:text-sm"
                className="flex-1 w-full border border-[#165474] outline-none p-1 rounded"
                {...register("request", {
                  required: "Request message is required",
                })}
              ></textarea>
              {errors["request"] && (
                <span className="block text-[10px] pl-1 text-[red]">
                  {errors["request"].message}
                </span>
              )}
            </div>
            <div className="flex flex-col md:flex-row items-start gap-1">
              <label htmlFor="" className="md:w-36 inline-block">
                From
              </label>
              <select
                {...register("from", {
                  required: {
                    value: true,
                    message: "Location the item is taken from is required.",
                  },
                  onChange: (e) =>
                    setDestination({
                      ...destination,
                      from: e.target.value,
                    }),
                })}
                className="border flex-1 w-full border-[#165474] outline-none p-1 rounded"
              >
                <option value="">Select origin</option>
                {towns.map((town, idx) => (
                  <option key={idx} value={town.value}>
                    {town.label}
                  </option>
                ))}
              </select>
              {errors["from"] && (
                <span className="block text-[10px] pl-1 pt-1 text-[red]">
                  {errors["from"].message}
                </span>
              )}
            </div>
            <div className="flex flex-col md:flex-row items-start gap-1">
              <label htmlFor="" className="md:w-36 inline-block">
                To
              </label>
              <select
                {...register("to", {
                  required: {
                    value: true,
                    message: "Location the item is taken to is required.",
                  },
                  onChange: (e) =>
                    setDestination({
                      ...destination,
                      to: e.target.value,
                    }),
                })}
                className="flex-1 w-full border border-[#165474] outline-none p-1 rounded"
              >
                <option value="">Select Destination</option>
                {towns.map((town, idx) => (
                  <option key={idx} value={town.value}>
                    {town.label}
                  </option>
                ))}
              </select>
              {errors["to"] && (
                <span className="block text-[10px] pl-1 pt-1 text-[red]">
                  {errors["to"].message}
                </span>
              )}
            </div>
            <div className="flex flex-col md:flex-row items-start gap-1">
              <label htmlFor="" className="inline-block md:w-36">
                Other Details
              </label>
              <textarea
                className="flex-1 w-full border border-[#165474] outline-none p-1 rounded"
                placeholder="Eg. Parcel Contains Glass screen."
                {...register("otherDetails")}
              ></textarea>
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <label htmlFor="" className="w-36 inline-block">
                Delivery Charge
              </label>
              <p className="text-right flex-1 font-semibold">
                {deliveryPrice.toFixed(2)}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <div className="w-36 md:inline-block hidden"></div>

              <button
                type="submit"
                className="bg-pink-500 text-white flex-1 py-2 rounded"
              >
                Continue
              </button>
            </div>
          </form>
        </div>

        <div>
          <div className="space-y-2 mt-2">
            <div className="flex items-center gap-2">
              <CgRadioCheck className="text-xl" />
              <h3 className="text-lg">Recipient Address</h3>
            </div>
            <div className="flex items-center gap-2">
              <CgRadioCheck className="text-xl" />
              <h3 className="text-lg">Schedule Delivery Time/Date</h3>
            </div>
          </div>
        </div>
      </div>
    </DeliveryFormLayout>
  );
};

export default DeliveryForm;
