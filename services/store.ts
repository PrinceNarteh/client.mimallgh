import axios from "@/lib/axios";

export const getStore = async (storeId: string) => {
  try {
    const res = await axios.get(`/shops/${storeId}`);
    return res.data;
  } catch (error) {
    return null;
  }
};

export const getAllStores = async () => {
  try {
    const res = await axios.get(`/shops/all`);
    return res.data;
  } catch (error) {
    return null;
  }
};

export const getSingleShop = async (shopId: string) => {
  try {
    const res = await axios.get(`/shops/single/${shopId}`);
    return res.data;
  } catch (error) {
    return null;
  }
};
