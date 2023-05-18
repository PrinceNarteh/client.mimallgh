import { CategorizedProducts, IProduct } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  products: IProduct;
  shopProducts: CategorizedProducts[];
} = {
  products: {
    total: 0,
    perPage: 10,
    page: 1,
    totalPages: 1,
    data: [],
  },
  shopProducts: [],
};

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    allProduct: (state, action: PayloadAction<IProduct>) => {
      state.products = action.payload;
    },
    allShopProducts: (state, action: PayloadAction<CategorizedProducts[]>) => {
      state.shopProducts = [...action.payload];
    },
  },
});

export default ProductSlice.reducer;
export const { allProduct, allShopProducts } = ProductSlice.actions;
