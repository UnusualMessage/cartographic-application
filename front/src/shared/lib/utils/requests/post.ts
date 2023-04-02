import { formatRequest } from "./formatRequest";
import { PostRequestOptions } from "../../../misc";

export const post = async ({
  model,
  url,
  route,
  query,
  token,
}: PostRequestOptions) => {
  const { api, headers } = formatRequest(url, route, query, token);

  const options: RequestInit = {
    headers,
    method: "POST",
    credentials: "include",
    mode: "cors",
    body: JSON.stringify(model),
  };

  const request = new Request(api, options);
  const response = await fetch(request);

  return response.json();
};
