import { useAppSelector } from "@/store/store";
import { Delivery } from "@/types";
import { IDeliveryCompany } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  deliveryCompany: IDeliveryCompany | null;
  delivery: Delivery;
  companies: IDeliveryCompany[];
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
  companies: [],
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
    setCompanies: (state, action: PayloadAction<IDeliveryCompany[]>) => {
      console.log(action.payload);
      state.companies = action.payload;
    },
  },
});

export const useDeliverySelector = () =>
  useAppSelector((state) => state.delivery);
export const { addInfo, setDeliveryCompany, setCompanies } =
  DeliverySlice.actions;
export default DeliverySlice;
