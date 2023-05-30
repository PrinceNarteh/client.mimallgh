import axios from "@/lib/axios";

export const login = async (data: {
  shopCode: string;
  password: string;
}) => {
  try {
    console.log(data);
    const user = await axios.post("/shop-auth/login", data);
    return user;
  } catch (error) {}
};

export const register = async (data: { email: string; password: string }) => {
  try {
    const user = await axios.post("/auth/register", data);
    return user.data;
  } catch (error) {}
};
