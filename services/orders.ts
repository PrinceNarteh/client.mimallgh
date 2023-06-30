import { Delivery } from "@/types";

// const BASE_URL = "http://localhost:4000";
const BASE_URL = "https://api.mimallgh.com";

export interface QuickOrder {
  fullName: string;
  phoneNumber: string;
  alternatePhoneNumber?: string;
  deliveryCharge: number;
  amount: number;
  items: {
    quantity: number;
    price: number;
    productId: string;
    shopId: string;
  }[];
}

export const createQuickOrder = async (body: Delivery): Promise<QuickOrder> => {
  const res = await fetch(`${BASE_URL}/quick-orders`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
};
