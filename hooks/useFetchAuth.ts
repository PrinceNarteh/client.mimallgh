import { useSession } from "next-auth/react";
import { useRefreshToken } from "./useRefreshToken";

let baseURL = "http://127.0.0.1:4000";

let originalRequest = async (
  url: string,
  config: { [key: string]: any } = {}
) => {
  url = `${baseURL}${url}`;
  let response = await fetch(url, config);
  let data = await response.json();
  console.log("REQUESTING:", data);
  return { response, data };
};

export const useFetchAuth = async () => {
  const { data: session } = useSession();
  const refreshToken = useRefreshToken();

  const fetchRequest = async (
    url: string,
    config: { [key: string]: any } = {}
  ) => {
    config["headers"] = {
      Authorization: `Bearer ${session?.user?.accessToken}`,
    };

    console.log("Before Request");
    let { response, data } = await originalRequest(url, config);
    console.log("After Request");

    if (response.statusText === "Unauthorized") {
      await refreshToken();

      config["headers"] = {
        Authorization: `Bearer ${session?.user?.accessToken}`,
      };

      let newResponse = await originalRequest(url, config);
      response = newResponse.response;
      data = newResponse.data;
    }

    return { response, data };
  };

  return { fetchRequest };
};
