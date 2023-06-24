import { signIn, useSession } from "next-auth/react";

export const useRefreshToken = () => {
  const { data: session } = useSession();

  const refreshToken = async () => {
    const res = await fetch("/auth/refresh", {
      method: "POST",
      body: JSON.stringify({ refresh: session?.user?.refreshToken }),
    });

    const token = await res.json();

    if (session && session.user) {
      session.user.accessToken = token.data.accessToken;
    } else {
      signIn();
    }
  };
  return refreshToken;
};
