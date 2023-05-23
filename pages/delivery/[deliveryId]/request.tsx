import DeliveryFormLayout from "@/components/DeliveryFormLayout";
import {
  addInfo,
  useDeliverySelector,
} from "@/store/features/delivery/deliverySlice";
import { useAppDispatch } from "@/store/store";
import { Delivery } from "@/types";
import { useRouter } from "next/router";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { CgRadioCheck } from "react-icons/cg";

const DeliveryForm = () => {
  const dispatch = useAppDispatch();
  const { delivery } = useDeliverySelector();
  const router = useRouter();

  const {
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
    router.push(`/delivery/${router.query.deliveryId}/recipient`);
  };

  console.log(errors);

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
              <input
                type="text"
                className="flex-1 border border-[#165474] outline-none p-1 rounded"
                {...register("request", {
                  required: "Request message is required",
                })}
              />
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <label htmlFor="" className="w-36 inline-block">
                From
              </label>
              <input
                type="text"
                className="flex-1 border border-[#165474] outline-none p-1 rounded"
                {...register("from")}
              />
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <label htmlFor="" className="w-36 inline-block">
                To
              </label>
              <input
                type="text"
                className="flex-1 border border-[#165474] outline-none p-1 rounded"
                {...register("to")}
              />
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
          <div className="flex flex-wrap items-center gap-1 my-3 ml-7 mr-5">
            <div className="w-40 text-lg">Delivery Charge</div>

            <p className="text-right flex-1">GHC32.50</p>
          </div>
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
