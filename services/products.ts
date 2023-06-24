export const getProduct = async (productId: string) => {
  try {
    const products = await fetch(
      `${process.env.BASE_URl}/products/${productId}`
    );
    return await products.json();
  } catch (error) {
    return null;
  }
};

export const getAllProducts = async (search: string = "") => {
  try {
    let products: any;
    if (search) {
      products = await fetch(`${process.env.BASE_URl}/products?${search}`);
    } else {
      products = await fetch(`${process.env.BASE_URl}/products`);
    }
    return await products.json();
  } catch (error) {
    return null;
  }
};

export const getProducts = async (query: string = "") => {
  try {
    let products: any;
    if (query !== "") {
      products = await fetch(
        `${process.env.BASE_URl}/products?categorized=true&${query}`
      );
    } else {
      products = await fetch(
        `${process.env.BASE_URl}/products?categorized=true`
      );
    }
    return await products.json();
  } catch (error: any) {
    return null;
  }
};
