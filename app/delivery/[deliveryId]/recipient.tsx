import DeliveryFormLayout from "@/components/DeliveryFormLayout";
import {
  addInfo,
  useDeliverySelector,
} from "@/store/features/delivery/deliverySlice";
import { useAppDispatch } from "@/store/store";
import { Delivery } from "@/types";
import Link from "next/link";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { BiEdit } from "react-icons/bi";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { CgRadioCheck } from "react-icons/cg";

const RecipientForm = () => {
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
    router.push(`/delivery/${router.query.deliveryId}/time`);
  };

  return (
    <DeliveryFormLayout>
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

      <div className="flex items-center gap-2 mt-5">
        <BsFillCheckCircleFill className="text-xl text-green-500" />
        <h3 className="text-xl font-bold sh-underline">Recipient Address</h3>
      </div>
      <form className="ml-7 space-y-2" onSubmit={handleSubmit(submitHandler)}>
        <div className="flex mt-4 flex-wrap items-center gap-1">
          <label htmlFor="" className="w-40 inline-block">
            Name
          </label>
          <div className="flex-1">
            <input
              type="text"
              className=" border w-full border-[#165474] outline-none p-1 rounded"
              {...register("name", {
                required: "Name is required",
              })}
            />
            {errors["name"] && (
              <span className="block text-[10px] pl-1 pt-1 text-[red]">
                {errors["name"].message}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-1">
          <label htmlFor="" className="w-40 inline-block">
            Location
          </label>
          <div className="flex-1">
            <input
              type="text"
              className=" border w-full border-[#165474] outline-none p-1 rounded"
              {...register("location", {
                required: "Location is required",
              })}
            />
            {errors["location"] && (
              <span className="block text-[10px] pl-1 pt-1 text-[red]">
                {errors["location"].message}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-1">
          <label htmlFor="" className="w-40 inline-block">
            Call Contact
          </label>
          <div className="flex-1">
            <input
              type="text"
              className=" border w-full border-[#165474] outline-none p-1 rounded"
              {...register("phoneNumber", {
                required: "Phone number is required",
              })}
            />
            {errors["phoneNumber"] && (
              <span className="block text-[10px] pl-1 pt-1 text-[red]">
                {errors["phoneNumber"].message}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-1">
          <div className="w-40 lg:inline-block hidden"></div>

          <button
            type="submit"
            className="bg-pink-500 text-white flex-1 py-2 rounded"
          >
            Continue
          </button>
        </div>
      </form>
      <div className="space-y-2 mt-2">
        <div className="flex items-center gap-2">
          <CgRadioCheck className="text-xl" />
          <h3 className="text-lg">Schedule Delivery Time/Date</h3>
        </div>
      </div>
    </DeliveryFormLayout>
  );
};

export default RecipientForm;
