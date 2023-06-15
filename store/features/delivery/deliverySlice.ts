import { useAppSelector } from "@/store/store";
import { Delivery } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  deliveryCompanyName: string;
  deliveryCompanyLink: string;
  delivery: Delivery;
} = {
  deliveryCompanyName: "",
  deliveryCompanyLink: "",
  delivery: {
    request: "",
    from: "",
    to: "",
    otherDetails: "",
    name: "",
    phoneNumber: "",
    location: "",
    time: "",
    date: "",
    price: 0,
  },
};

const DeliverySlice = createSlice({
  name: "delivery",
  initialState,
  reducers: {
    addInfo: (state, action: PayloadAction<Delivery>) => {
      state.delivery = action.payload;
    },
    setDeliveryCompanyInfo: (
      state,
      action: PayloadAction<{ name: string; slug: string }>
    ) => {
      state.deliveryCompanyName = action.payload.name;
      state.deliveryCompanyLink = action.payload.slug;
    },
  },
});

export const useDeliverySelector = () =>
  useAppSelector((state) => state.delivery);
export const { addInfo, setDeliveryCompanyInfo } = DeliverySlice.actions;
export default DeliverySlice;
