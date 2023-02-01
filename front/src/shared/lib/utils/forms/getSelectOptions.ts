import { RawOption } from "../../../api/types/forms";

export const getSelectOptions = (source: RawOption[]) => {
  return source.map((item) => {
    return {
      label: item.title ?? "",
      value: item.id ?? "",
    };
  });
};
