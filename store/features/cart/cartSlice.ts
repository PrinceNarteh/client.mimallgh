import { createSlice } from "@reduxjs/toolkit";

type CartItem = {
  productName: string;
  quantity: number;
  price: number;
  productId: string;
  shopId: string;
};

type Cart = {
  totalAmount: number;
  totalCount: number;
  items: CartItem[];
};

const initialState: Cart = {
  totalAmount: 0,
  totalCount: 0,
  items: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getCartTotal: (state) => {
      let { totalAmount, totalCount } = state.items.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;

          cartTotal.totalAmount += itemTotal;
          cartTotal.totalCount += quantity;
          return cartTotal;
        },
        {
          totalAmount: 0,
          totalCount: 0,
        }
      );
      state.totalAmount = parseInt(totalAmount.toFixed(2));
      state.totalCount = totalCount;
    },
    remove: (state, action) => {
      state.items = state.items.filter(
        (item) => item.productId !== action.payload
      );
    },
    increase: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.productId === action.payload) {
          return { ...item, amount: item.quantity + 1 };
        }
        return item;
      });
    },
    decrease: (state, action) => {
      state.items = state.items
        .map((item) => {
          if (item.productId === action.payload) {
            return { ...item, amount: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity !== 0);
    },
    clearCart: (state) => {
      state.items = [];
    },
    getCartItems: (state) => {
      state.items = state.items;
    },
  },
});

export default CartSlice;
export const {
  getCartTotal,
  remove,
  increase,
  decrease,
  clearCart,
  getCartItems,
} = CartSlice.actions;
