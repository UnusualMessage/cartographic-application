import { formatRequest } from "./formatRequest";
import { DeleteRequestOptions } from "../../../../misc";

export const remove = async ({
  url,
  route,
  query,
  token,
}: DeleteRequestOptions) => {
  const { headers, api } = formatRequest(url, route, query, token);

  const options = {
    method: "DELETE",
    headers: headers,
  };

  const request = new Request(api, options);
  const response = await fetch(request);

  return response.json();
};
