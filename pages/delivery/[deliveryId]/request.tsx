import DeliveryFormLayout from "@/components/DeliveryFormLayout";
import {
  addInfo,
  useDeliverySelector,
} from "@/store/features/delivery/deliverySlice";
import { useAppDispatch } from "@/store/store";
import { Delivery } from "@/types";
import {
  fares,
  getDeliveryFare,
  mapTownLabelToValue,
  towns,
  mapTownValueToLabel,
} from "@/utils/dispatch_fares";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { CgRadioCheck } from "react-icons/cg";

const DeliveryForm = () => {
  const dispatch = useAppDispatch();
  const { delivery } = useDeliverySelector();
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
    dispatch(
      addInfo({
        ...delivery,
        ...data,
        from: mapTownValueToLabel(data.from),
        to: mapTownValueToLabel(data.to),
        price: deliveryPrice,
      })
    );
    router.push(`/delivery/${router.query.deliveryId}/recipient`);
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
            <div className="flex flex-wrap items-center gap-1">
              <label htmlFor="" className="w-36 inline-block">
                I want you to
              </label>
              <div className="flex-1">
                <input
                  type="text"
                  className=" border w-full border-[#165474] outline-none p-1 rounded"
                  {...register("request", {
                    required: "Request message is required",
                  })}
                />
                {errors["request"] && (
                  <span className="block text-[10px] pl-1 pt-1 text-[red]">
                    {errors["request"].message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <label htmlFor="" className="w-36 inline-block">
                From
              </label>
              <div className="flex-1">
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
                  className="border w-full border-[#165474] outline-none p-1 rounded"
                >
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
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <label htmlFor="" className="w-36 inline-block">
                To
              </label>
              <div className="flex-1">
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
                  className="border w-full border-[#165474] outline-none p-1 rounded"
                >
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
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <label htmlFor="" className="w-36 inline-block">
                Other Details
              </label>
              <input
                type="text"
                className="flex-1 border border-[#165474] outline-none p-1 rounded"
                {...register("otherDetails")}
              />
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
