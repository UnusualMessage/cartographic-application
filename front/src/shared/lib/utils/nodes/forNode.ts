import { Tree } from "@blueprintjs/core";
import { cloneDeep } from "lodash";

import type { Node, NodeCallback, NodePath } from "../../../misc";

export const forNode = (
  path: NodePath,
  nodes: Node[] | undefined,
  callback: NodeCallback
) => {
  if (!nodes) {
    return;
  }

  const newNodes = cloneDeep(nodes);
  const targetNode = Tree.nodeFromPath(path, newNodes);

  callback(targetNode);
  return newNodes;
};
