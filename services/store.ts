import { Store } from "@/types";

const BASE_URL = "https://api.mimallgh.com";
// const BASE_URL = "http://localhost:4000";

export const getStore = async (storeId: string) => {
  try {
    const res = await fetch(`${BASE_URL}/shops/${storeId}`);
    return await res.json();
  } catch (error) {
    return null;
  }
};

export const getAllStores = async (): Promise<Store[]> => {
  const res = await fetch(`${BASE_URL}/shops/all`);
  return await res.json();
};

export const getSingleShop = async (shopId: string): Promise<Store> => {
  const res = await fetch(`${BASE_URL}/shops/single/${shopId}`);
  return await res.json();
};
