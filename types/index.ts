export interface IDeliveryCompany {
  id?: string;
  name: string;
  slug: string;
  location?: string;
  phoneNumber: string;
  alternatePhoneNumber?: string;
  whatsappNumber: string;
  images: {
    id: string;
    name: string;
  }[];
}

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

export type CategorizedProducts = {
  category: string;
  data: Product[];
};

export type IProduct = {
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
  data: CategorizedProducts[];
};

export interface IUnCategorizedProducts {
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
  data: Product[];
}

export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  stock: number;
  brand: string;
  category: string;
  video: string | null;
  images: {
    id: string;
    name: string;
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
  twitterHandle: null;
  tiktokHandle: null;
  openingTime: string;
  closingTime: string;
  image: string | null;
  banner: string | null;
  products: Product[];
}

export interface DeliveryStore {
  id: string;
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
  twitterHandle: null;
  tiktokHandle: null;
  openingTime: string;
  closingTime: string;
  image: null;
  products: Product[];
}

export type Delivery = {
  request: string;
  from: string;
  to: string;
  otherDetails?: string;
  alternatePhoneNumber?: string;
  fullName: string;
  phoneNumber: string;
  location: string;
  dateAndTime: string;
  deliveryCharge: number;
  deliveryCompany: string;
};

export type ICartItem = {
  productId: string;
  productName: string;
  productImage: string;
  quantity: number;
  price: number;
  shopName: string;
  shopId: string;
};

export interface IOrder {
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
  data: {
    date: string;
    user: string;
    orders: {
      orderId: string;
      orderItems: OrderItem[];
    }[];
  }[];
}

export interface OrderItem {
  id: string;
  createdAt: string;
  updatedAt: string;
  productId: string;
  productName: string;
  quantity: number;
  price: number;
  shopName: string;
  shopId: string;
  order: {
    id: string;
    orderId: string;
    user: {
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber: string;
      image: string;
    };
  };
  product: {
    id: string;
    title: string;
    images: { id: string; name: string }[];
  };
}
