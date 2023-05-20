import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { CartSlice } from "./features/cart/cartSlice";
import { ProductSlice } from "./features/products/productSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  products: ProductSlice.reducer,
  cart: CartSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
