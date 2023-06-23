import { useAppSelector } from "@/app/store/store";

export const useDeliverySelector = () =>
  useAppSelector((state) => state.delivery);
