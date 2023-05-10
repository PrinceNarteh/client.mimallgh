import axios from "@/lib/axios";

export const getProducts = async () => {
  try {
    const products = await axios.get("/products/category");
    return products.data;
  } catch (error: any) {
    return error.message;
  }
};
