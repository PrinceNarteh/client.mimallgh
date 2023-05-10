import axios from "@/lib/axios";

export const getProduct = async (productId: string) => {
  try {
    const products = await axios.get(`/products/${productId}`);
    return products.data;
  } catch (error: any) {
    return error.message;
  }
};

export const getProducts = async () => {
  try {
    const products = await axios.get("/products/category");
    return products.data;
  } catch (error: any) {
    return error.message;
  }
};
