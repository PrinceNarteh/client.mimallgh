interface IConfig {
  method?: "GET" | "Post" | "PATCH" | "DELETE";
  headers?: { [key: string]: string };
  body?: string;
}

export const useFetch = () => {
  const fetchRequest = async (url: string, config: IConfig = {}) => {
    const res = await fetch(`http://localhost:4000${url}`, config);
    return await res.json();
  };

  return { fetchRequest };
};
