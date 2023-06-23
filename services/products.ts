import axios from "@/lib/axios";

export const getProduct = async (productId: string) => {
  try {
    const products = await axios.get(`/products/${productId}`);
    return products.data;
  } catch (error) {
    return null;
  }
};

export const getAllProducts = async (search: string = "") => {
  try {
    let products: any;
    if (search) {
      products = await axios.get(`/products?${search}`);
    } else {
      products = await axios.get(`/products`);
    }
    return products.data;
  } catch (error) {
    return null;
  }
};

export const getProducts = async (query: string = "") => {
  try {
    let products: any;
    if (query !== "") {
      products = await axios.get(`/products?categorized=true&${query}`);
    } else {
      products = await axios.get("/products?categorized=true");
    }
    return products.data;
  } catch (error: any) {
    return null;
  }
};
