import { IProduct } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IProduct = {
  total: 0,
  perPage: 10,
  page: 1,
  totalPages: 1,
  data: [],
};

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    allProduct: (state, action: PayloadAction<IProduct>) => {
      console.log(action);
      state = action.payload;
    },
  },
});

export default ProductSlice.reducer;
export const { allProduct } = ProductSlice.actions;
