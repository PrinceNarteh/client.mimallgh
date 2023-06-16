import { useAppSelector } from "@/store/store";
import { Delivery } from "@/types";
import { IDeliveryCompany } from "@/types/delivery-companies";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  deliveryCompany: IDeliveryCompany;
  delivery: Delivery;
} = {
  deliveryCompany: {
    id: "",
    name: "",
    phoneNumber: "",
    slug: "",
    whatsappNumber: "",
    alternatePhoneNumber: "",
    location: "",
    images: [],
  },
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
    setDeliveryCompany: (state, action: PayloadAction<IDeliveryCompany>) => {
      state.deliveryCompany = action.payload;
    },
  },
});

export const useDeliverySelector = () =>
  useAppSelector((state) => state.delivery);
export const { addInfo, setDeliveryCompany } = DeliverySlice.actions;
export default DeliverySlice;
