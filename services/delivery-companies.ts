import axios from "@/lib/axios";

export const getDeliveryCompanies = async () => {
  try {
    const companies = await axios.get(`/delivery-companies`);
    return companies.data;
  } catch (error) {
    return null;
  }
};

export const getDeliveryCompany = async (slug: string) => {
  try {
    const companies = await axios.get(`/delivery-companies/slug/${slug}`);
    return companies.data;
  } catch (error) {
    return null;
  }
};
