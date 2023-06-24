export const useFetch = () => {
  const fetchRequest = async (url: string) => {
    const res = await fetch(`http://localhost:4000/${url}`);
    return await res.json();
  };

  return { fetchRequest };
};
