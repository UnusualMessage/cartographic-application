import { formatRequest } from "./formatRequest";
import { GetRequestOptions } from "../../../../misc";

export const get = async ({ url, route, query, token }: GetRequestOptions) => {
  const { api, headers } = formatRequest(url, route, query, token);

  const options: RequestInit = {
    headers,
    method: "GET",
    mode: "cors",
    credentials: "include",
  };

  const request = new Request(api, options);
  const response = await fetch(request);

  return response.json();
};
