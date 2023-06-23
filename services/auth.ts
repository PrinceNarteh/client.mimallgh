import axios from "@/lib/axios";

export const login = async (data: { shopCode: string; password: string }) => {
  try {
    const res = await fetch("/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const user = await res.json();
    return user;
  } catch (error) {}
};

export const register = async (data: { email: string; password: string }) => {
  try {
    const user = await axios.post("/auth/register", data);
    return user.data;
  } catch (error) {}
};
