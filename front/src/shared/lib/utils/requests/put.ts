import { formatRequest } from "./formatRequest";
import { PutRequestOptions } from "../../../misc";

export const put = async ({
  model,
  url,
  route,
  query,
  token,
}: PutRequestOptions) => {
  const { api, headers } = formatRequest(url, route, query, token);

  const options = {
    method: "PUT",
    headers,
    body: JSON.stringify(model),
  };

  const request = new Request(api, options);
  const response = await fetch(request);

  return response.json();
};
