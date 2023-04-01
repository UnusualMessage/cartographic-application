import { fits } from "./fits";
import { Node } from "../../../misc";

export const findNode = (node: Node, search: string): boolean => {
  if (search === "") {
    return true;
  }

  if (fits(node, search)) {
    return true;
  }

  if (node.children) {
    const nodes = node.children;

    for (const node of nodes) {
      if (findNode(node, search)) {
        return true;
      }
    }
  } else {
    return fits(node, search);
  }

  return false;
};
