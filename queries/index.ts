import { IDeliveryCompany } from "@/types";

// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const BASE_URL = "http://api.mimallgh.com";

export const fetchDeliveryCompanies = async (): Promise<IDeliveryCompany[]> => {
  const res = await fetch(`${BASE_URL}/delivery-companies`);
  return await res.json();
};

export const getDeliveryCompany = async (
  queryKey: string
): Promise<IDeliveryCompany> => {
  const res = await fetch(`${BASE_URL}/delivery-companies/slug/${queryKey}`);
  return await res.json();
};
