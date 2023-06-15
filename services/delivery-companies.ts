import axios from "@/lib/axios";

export const getDeliveryCompanies = async () => {
  try {
    const companies = await axios.get(`/delivery-companies`);
    return companies.data;
  } catch (error) {
    return null;
  }
};
