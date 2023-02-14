import { cloneDeep } from "lodash";

import { Node, NodeCallback } from "../../../misc";

export const forEachNode = (
  nodes: Node[] | undefined,
  callback: NodeCallback
) => {
  const recursiveCall = (nodes: Node[] | undefined, callback: NodeCallback) => {
    if (nodes === undefined) {
      return;
    }

    for (const node of nodes) {
      callback(node);
      recursiveCall(node.childNodes, callback);
    }
  };

  if (!nodes) {
    return;
  }

  const newNodes = cloneDeep(nodes);

  recursiveCall(newNodes, callback);

  return newNodes;
};
