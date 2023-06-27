import { CategorizedProducts, IProduct, Product } from "@/types";

export const getProduct = async (productId: string): Promise<Product> => {
  const products = await fetch(`${process.env.BASE_URl}/products/${productId}`);
  return await products.json();
};

export const getAllProducts = async (
  search: string = ""
): Promise<CategorizedProducts> => {
  let products: any;
  if (search) {
    products = await fetch(`${process.env.BASE_URl}/products?${search}`);
  } else {
    products = await fetch(`${process.env.BASE_URl}/products`);
  }
  return await products.json();
};

export const getProducts = async (query: string = ""): Promise<IProduct> => {
  let products: any;
  if (query !== "") {
    products = await fetch(
      `${process.env.BASE_URl}/products?categorized=true&${query}`
    );
  } else {
    products = await fetch(`${process.env.BASE_URl}/products?categorized=true`);
  }
  return await products.json();
};
