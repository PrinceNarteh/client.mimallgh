import { BsShop } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineDashboard } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";

export const adminMenus = [
  {
    name: "Dashboard",
    link: "/admin",
    icon: MdOutlineDashboard,
  },
  {
    name: "Administrators",
    icon: FiShoppingBag,
    subLinks: [
      {
        name: "Administrators List",
        link: "/admin/administrators",
      },
      {
        name: "Add Administrator",
        link: "/admin/administrators/add",
      },
    ],
  },
  {
    name: "Products",
    icon: FiShoppingBag,
    subLinks: [
      {
        name: "Product List",
        link: "/admin/products",
      },
      {
        name: "Add Product",
        link: "/admin/products/add",
      },
    ],
  },
  {
    name: "Shops",
    icon: BsShop,
    subLinks: [
      {
        name: "Shop List",
        link: "/admin/shops",
      },
      {
        name: "Add Shop",
        link: "/admin/shops/add",
      },
    ],
  },
  {
    name: "Shop Owners",
    icon: FaUsers,
    subLinks: [
      {
        name: "Shop Owners List",
        link: "/admin/shop-owners",
      },
      {
        name: "Add Shop Owner",
        link: "/admin/shop-owners/add",
      },
    ],
  },
  {
    name: "Orders",
    icon: TiShoppingCart,
    subLinks: [
      {
        name: "Order List",
        link: "/admin/orders",
      },
    ],
  },
];

export const shopMenus = [
  {
    name: "Dashboard",
    link: "/shop",
    icon: MdOutlineDashboard,
  },
  {
    name: "Products",
    icon: FiShoppingBag,
    subLinks: [
      {
        name: "Product List",
        link: "/shop/products",
      },
      {
        name: "Add Product",
        link: "/shop/products/add-product",
      },
    ],
  },
  {
    name: "Orders",
    icon: TiShoppingCart,
    subLinks: [
      {
        name: "Order List",
        link: "/shop/orders",
      },
      {
        name: "Order Details",
        link: "/shop/orders/1",
      },
    ],
  },
];

export const markets = [
  { label: "Select Location", link: "" },
  { label: "Amamoma", link: "amamoma" },
  { label: "Apewosika", link: "apewosika" },
  { label: "Ayensu", link: "ayensu" },
  { label: "Duakro", link: "duakro" },
  { label: "KNH/Valco", link: "knh_valco" },
  { label: "Kokoado", link: "kokoado" },
  { label: "Kwasipra", link: "kwasipra" },
  { label: "Science", link: "science" },
  { label: "New Site", link: "new_site" },
  { label: "Old Site", link: "old_site" },
  { label: "Science", link: "science" },
];

export const locations = [
  { label: "Select Location", link: "" },
  { label: "Science", link: "science" },
  { label: "Amamoma", link: "amamoma" },
  { label: "ATL", link: "atl" },
  { label: "KNH/Valco", link: "knh_valco" },
  { label: "Apewosika", link: "apewosika" },
  { label: "Old Site", link: "old_site" },
  { label: "Ayensu", link: "ayensu" },
  { label: "Kwaprow", link: "kwaprow" },
  { label: "Kwasipra", link: "kwasipra" },
  { label: "Duakro", link: "duakro" },
  { label: "Free Market", link: "free-market" },
];

export const categories = [
  { label: "Food", value: "food" },
  { label: "Fashion & Wears", value: "fashion_and_wears" },
  { label: "Grocery & General", value: "grocery_and_general" },
  { label: "Health & Wellness", value: "health_and_wellness" },
  {
    label: "Home & Electrical Appliances",
    value: "home_and_electrical_appliances",
  },
  { label: "Personal Services", value: "personal_services" },
  { label: "Printing & Stationary", value: "printing_and_stationery" },
  { label: "Tech", value: "tech" },
];

export const menus = [
  {
    name: "Dashboard",
    link: "/",
    icon: MdOutlineDashboard,
  },
  {
    name: "Products",
    icon: FiShoppingBag,
    subLinks: [
      {
        name: "Product List",
        link: "/products",
      },
      {
        name: "Add Product",
        link: "/products/add-product",
      },
    ],
  },
  {
    name: "Orders",
    icon: TiShoppingCart,
    subLinks: [
      {
        name: "Order List",
        link: "/orders",
      },
    ],
  },
];
