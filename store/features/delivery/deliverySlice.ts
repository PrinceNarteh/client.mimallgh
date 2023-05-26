import { useAppSelector } from "@/store/store";
import { Delivery } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  delivery: Delivery;
} = {
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
  },
});

export const useDeliverySelector = () =>
  useAppSelector((state) => state.delivery);
export const { addInfo } = DeliverySlice.actions;
export default DeliverySlice;
