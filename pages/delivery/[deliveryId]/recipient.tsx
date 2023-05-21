import DeliveryFormLayout from "@/components/DeliveryFormLayout";
import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

const RecipientForm = () => {
  return (
    <DeliveryFormLayout>
      <div className="flex items-center gap-2">
        <BsFillCheckCircleFill className="text-xl text-green-500" />
        <h3 className="text-xl font-bold sh-underline">Order Form</h3>
      </div>

      <div className="space-y-2 mt-4 ml-7">
        <div className="flex flex-wrap items-center gap-1">
          <label htmlFor="" className="w-40 inline-block font-bold">
            I want you to
          </label>
          <p>Pick up my refrigerator</p>
        </div>
        <div className="flex flex-wrap items-center gap-1">
          <label htmlFor="" className="w-40 inline-block font-bold">
            From
          </label>
          <p>Mosco Mart, UCC</p>
        </div>
        <div className="flex flex-wrap items-center gap-1">
          <label htmlFor="" className="w-40 inline-block font-bold">
            To
          </label>
          <p>KaKumdo</p>
        </div>
        <div className="flex flex-wrap items-center gap-1">
          <label htmlFor="" className="w-40 inline-block font-bold">
            Other Details
          </label>
          <p></p>
        </div>
        <div className="flex flex-wrap items-center gap-1">
          <label htmlFor="" className="w-40 inline-block font-bold">
            Delivery Fee
          </label>
          <p>GHC33.50</p>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-5">
        <BsFillCheckCircleFill className="text-xl text-green-500" />
        <h3 className="text-xl font-bold sh-underline">Recipient Address</h3>
      </div>
      <form className="ml-7 space-y-2">
        <div className="flex mt-4 flex-wrap items-center gap-1">
          <label htmlFor="" className="w-40 inline-block">
            Name
          </label>
          <input
            type="text"
            className="flex-1 border border-[#165474] outline-none p-1 rounded"
          />
        </div>
        <div className="flex flex-wrap items-center gap-1">
          <label htmlFor="" className="w-40 inline-block">
            Location
          </label>
          <input
            type="text"
            className="flex-1 border border-[#165474] outline-none p-1 rounded"
          />
        </div>
        <div className="flex flex-wrap items-center gap-1">
          <label htmlFor="" className="w-40 inline-block">
            Call Contact
          </label>
          <input
            type="text"
            className="flex-1 border border-[#165474] outline-none p-1 rounded"
          />
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
    </DeliveryFormLayout>
  );
};

export default RecipientForm;
