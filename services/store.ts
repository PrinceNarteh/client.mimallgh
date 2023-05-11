import axios from "@/lib/axios";

export const getStore = async (storeId: string) => {
  try {
    const res = await axios.get(`/shops/${storeId}`);
    return res.data;
  } catch (error) {
    return null;
  }
};
