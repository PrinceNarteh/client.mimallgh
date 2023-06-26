import { IDeliveryCompany } from "@/types";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchDeliveryCompanies = async (): Promise<IDeliveryCompany[]> => {
  const res = await fetch(`${BASE_URL}/delivery-companies`);
  return await res.json();
};
