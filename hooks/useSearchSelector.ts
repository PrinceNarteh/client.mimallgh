import { useAppSelector } from "@/store/store";

export const useSearchSelector = () => useAppSelector((state) => state.search);
