import { Delivery } from "@/types";

const BASE_URL = "https://api.mimallgh.com";

export const createDelivery = async (body: Delivery): Promise<any> => {
  const res = await fetch(`${BASE_URL}/deliveries`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
};
