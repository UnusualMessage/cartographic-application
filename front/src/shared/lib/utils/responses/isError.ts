import { Error } from "../../../../types/api";

const isError = (data: any): data is Error => {
  return data.error;
};

export default isError;
