import { CategorizedProducts, IProduct, Product } from "@/types";

const BASE_URL = "https://api.mimallgh.com"

export const getProduct = async (productId: string): Promise<Product> => {
  const products = await fetch(`${BASE_URL}/products/${productId}`);
  return await products.json();
};

export const getAllProducts = async (
  search: string = ""
): Promise<CategorizedProducts> => {
  let products: any;
  if (search) {
    products = await fetch(`${BASE_URL}/products?${search}`);
  } else {
    products = await fetch(`${BASE_URL}/products`);
  }
  return await products.json();
};

export const getProducts = async (query: string = ""): Promise<IProduct> => {
  let products: any;
  if (query !== "") {
    products = await fetch(
      `${BASE_URL}/products?categorized=true&${query}`
    );
  } else {
    products = await fetch(`${BASE_URL}/products?categorized=true`);
  }
  return await products.json();
};
