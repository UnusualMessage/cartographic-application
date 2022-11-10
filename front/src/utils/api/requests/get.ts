export const get = async (url: string, route: string, query?: string) => {
  const options: RequestInit = {
    method: "GET",
    mode: "cors",
    credentials: "include",
  };

  query = query ? "?" + query : "";

  const request = new Request(`${url}/${route}/${query}`, options);
  const response = await fetch(request);

  return response.json();
};
