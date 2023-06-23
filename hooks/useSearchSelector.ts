import { useAppSelector } from "@/app/store/store";

export const useSearchSelector = () => useAppSelector((state) => state.search);
