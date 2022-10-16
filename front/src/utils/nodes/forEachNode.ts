import { cloneDeep } from "lodash";

import { Node, NodeCallback } from "../../types/Node";

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
      forEachNode(node.childNodes, callback);
    }
  };

  if (!nodes) {
    return;
  }

  const newNodes = cloneDeep(nodes);

  recursiveCall(nodes, callback);

  return newNodes;
};