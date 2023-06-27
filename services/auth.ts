export const login = async (data: { shopCode: string; password: string }) => {
  try {
    const res = await fetch(`${process.env.BASE_URl}/auth/login`, {
      method: "POST",
      body: JSON.stringify(data),
    });
    const user = await res.json();
    return user;
  } catch (error) {}
};

export const register = async (data: { email: string; password: string }) => {
  try {
    const user = await fetch(`${process.env.BASE_URl}/auth/register`, {
      method: "POST",
      body: JSON.stringify(data),
    });
    return user.json();
  } catch (error) {}
};
