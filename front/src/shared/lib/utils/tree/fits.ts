import { Node } from "../../../misc";

export const fits = (node: Node, search: string) => {
  const regexp = / /g;
  return !!node.title
    ?.toString()
    .toLowerCase()
    .replace(regexp, "")
    .includes(search.toLowerCase().replace(regexp, ""));
};
