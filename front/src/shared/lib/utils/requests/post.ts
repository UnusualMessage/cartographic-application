export const post = async (
  model: unknown,
  url: string,
  route: string,
  query: string,
  token = ""
) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", `Bearer ${token}`);

  const options: RequestInit = {
    method: "POST",
    credentials: "include",
    mode: "cors",
    headers,
    body: JSON.stringify(model),
  };

  query = query ? "?" + query : "";

  const request = new Request(`${url}/${route}?${query}`, options);
  const response = await fetch(request);

  return response.json();
};
