interface IConfig {
  method?: "GET" | "Post" | "PATCH" | "DELETE";
  headers?: { [key: string]: string };
  body?: string;
}

const BASE_URL = "https://api.mimallgh.com";

export const useFetch = () => {
  const fetchRequest = async (url: string, config: IConfig = {}) => {
    const res = await fetch(`${BASE_URL}/${url}`, config);
    return await res.json();
  };

  return { fetchRequest };
};
