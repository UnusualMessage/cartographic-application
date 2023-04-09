export const formatRequest = (
  url: string,
  route?: string,
  query?: string,
  token?: string
) => {
  route = route ?? "";
  query = query ? "?" + query : "";
  token = token ?? "";

  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", `Bearer ${token}`);

  return {
    api: `${url}/${route}/${query}`,
    headers,
  };
};
