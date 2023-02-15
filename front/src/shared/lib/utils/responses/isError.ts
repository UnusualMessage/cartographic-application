import type { Error } from "../../../misc";

const isError = (data: any): data is Error => {
  return data.error;
};

export default isError;
