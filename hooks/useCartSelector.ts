import { useAppSelector } from "@/store/store";

export const useCartSelector = () => useAppSelector((state) => state.cart);
