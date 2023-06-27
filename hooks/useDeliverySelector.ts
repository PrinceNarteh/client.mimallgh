import { useAppSelector } from "@/store/store";

export const useDeliverySelector = () =>
  useAppSelector((state) => state.delivery);
