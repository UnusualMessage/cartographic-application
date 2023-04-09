import type { RawOption } from "../../../misc";

export const getSelectOptions = (source: (RawOption | undefined)[]) => {
  return source.map((item) => {
    if (!item) {
      return {
        label: "",
        value: "",
      };
    }

    return {
      label: item.title ?? item.name ?? "",
      value: item.id ?? "",
    };
  });
};
