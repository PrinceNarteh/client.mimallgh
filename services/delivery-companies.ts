import { IDeliveryCompany } from "@/types";

const BASE_URL = process.env.BASE_URL;

export const getDeliveryCompanies = async (): Promise<IDeliveryCompany[]> => {
  const companies = await fetch(`${BASE_URL}/delivery-companies`);
  return await companies.json();
};

export const getDeliveryCompany = async (
  slug: string
): Promise<IDeliveryCompany> => {
  const company = await fetch(`${BASE_URL}/delivery-companies/slug/${slug}`);
  return await company.json();
};
