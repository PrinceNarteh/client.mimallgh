'use client'

import { useAppSelector } from "@/store/store";
import { ICartItem } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Cart = {
  deliveryCharge: number;
  deliveryCompany: string;
  totalAmount: number;
  items: ICartItem[];
};

const initialState: Cart = {
  deliveryCharge: 0,
  deliveryCompany: "",
  totalAmount: 0,
  items: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getCartTotal: (state) => {
      state.totalAmount = state.items.reduce(
        (amt, currItem) => amt + currItem.quantity * currItem.price,
        0
      );
    },
    addToCart: (state, action: PayloadAction<ICartItem>) => {
      const { payload } = action;
      const productExists = state.items.find(
        (item) => item.productId === payload.productId
      );

      let newItems: ICartItem[] = [];

      if (productExists) {
        newItems = state.items.map((item) => {
          if (item.productId === payload.productId) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
      } else {
        newItems = [...state.items, payload];
      }

      state.items = newItems;
    },
    remove: (state, action: PayloadAction<{ id: string }>) => {
      state.items = state.items.filter(
        (item) => item.productId !== action.payload.id
      );
    },
    increase: (state, action: PayloadAction<{ id: string }>) => {
      state.items = state.items.map((item) => {
        if (item.productId === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decrease: (state, action: PayloadAction<{ id: string }>) => {
      state.items = state.items.map((item) => {
        if (item.productId === action.payload.id && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    },
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },
    getCartItems: (state) => {
      state.items = state.items;
    },
    setDeliveryInfo: (
      state,
      action: PayloadAction<{ deliveryPrice: number; deliveryCompany: string }>
    ) => {
      state.deliveryCharge = action.payload.deliveryPrice;
      state.deliveryCompany = action.payload.deliveryCompany;
    },
  },
});

export default CartSlice;
export const useCartSelector = () => useAppSelector((state) => state.cart);
export const {
  addToCart,
  getCartTotal,
  remove,
  increase,
  decrease,
  clearCart,
  getCartItems,
  setDeliveryInfo,
} = CartSlice.actions;
