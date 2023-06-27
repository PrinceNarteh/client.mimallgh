import { Delivery, IDeliveryCompany } from "@/types";
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
    fullName: "",
    phoneNumber: "",
    location: "",
    time: "",
    date: "",
    deliveryCharge: 0,
    deliveryCompany: "",
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
    clearDelivery: (state) => {
      state.delivery = initialState.delivery;
    },
    setDeliveryCompany: (state, action: PayloadAction<IDeliveryCompany>) => {
      state.deliveryCompany = action.payload;
    },
    setCompanies: (state, action: PayloadAction<IDeliveryCompany[]>) => {
      state.companies = action.payload;
    },
  },
});

export const { addInfo, clearDelivery, setDeliveryCompany, setCompanies } =
  DeliverySlice.actions;
export default DeliverySlice;
