import { NodePath } from "../types/NodePath";
import { Tree } from "@blueprintjs/core";
import { cloneDeep } from "lodash";
import { Node, NodeCallback } from "../types/Node";

export const forEachChildNode = (
  path: NodePath,
  nodes: Node[] | undefined,
  callback: NodeCallback
) => {
  const newNodes = cloneDeep(nodes);
  const rootNode = Tree.nodeFromPath(path, newNodes);
  const childNodes = rootNode.childNodes;

  if (!nodes) {
    return;
  }

  if (childNodes) {
    for (const node of childNodes) {
      callback(node);
    }
  }

  return newNodes;
};
