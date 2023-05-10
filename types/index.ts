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
