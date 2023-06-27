import { Delivery } from "@/types";

const BASE_URL = "http://localhost:4000";

export const createDelivery = async (data: Delivery): Promise<any> => {
  const companies = await fetch(`${BASE_URL}/deliveries`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(await companies.json());
  return await companies.json();
};
