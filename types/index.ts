export enum CategoryType {
  FOOD = "food",
  FASHION_AND_WEARS = "fashion_and_wears",
  GROCERY_AND_GENERAL = "grocery_and_general",
  HEALTH_AND_WELLNESS = "health_and_wellness",
  HOME_AND_ELECTRICAL_APPLIANCES = "home_and_electrical_appliances",
  PERSONAL_SERVICES = "personal_services",
  PRINTING_AND_STATIONERY = "printing_and_stationery",
  TECH = "tech",
}

export type IUncategorizedProduct = {
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
  data: Product[];
};

export type IProduct = {
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
  data: CategorizedProducts[];
};

export type CategorizedProducts = {
  category: string;
  data: Product[];
};

export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  stock: number;
  brand: string;
  category: string;
  images: {
    id: string;
    public_id: string;
    secure_url: string;
  }[];
  shop: {
    id: string;
    name: string;
    shopCode: string;
  };
};

export interface Store {
  id: string;
  createdAt: string;
  updatedAt: string;
  shopCode: string;
  password: string;
  plainPassword: string;
  name: string;
  description: string;
  location: string;
  mapDirection: string;
  phoneNumber: string;
  alternateNumber: null;
  whatsappNumber: null;
  instagramHandle: null;
  facebookHandle: null;
  openingTime: string;
  closingTime: string;
  image: null;
  products: {
    category: string;
    data: Product[];
  }[];
}

export type Delivery = {
  request: string;
  from: string;
  to: string;
  otherDetails: string;
  name: string;
  phoneNumber: string;
  location: string;
  time: string;
  date: string;
  price: number;
};

export type ICartItem = {
  productName: string;
  quantity: number;
  price: number;
  productId: string;
  shopId: string;
  shopName: string;
  image: string;
};
