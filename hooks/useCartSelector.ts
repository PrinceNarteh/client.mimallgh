import { useAppSelector } from "@/app/store/store";

export const useCartSelector = () => useAppSelector((state) => state.cart);
