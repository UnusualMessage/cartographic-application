import { useCallback } from "react";

import { forEachNode } from "@shared/lib/utils/nodes/forEachNode";
import { forNode } from "@shared/lib/utils/nodes/forNode";

import { Node, NodePath } from "../../misc/types/nodes/Node";

interface Props {
  nodes: Node[];
  setNodes: (nodes: Node[]) => void;
}

export const useTreeActions = ({ nodes, setNodes }: Props) => {
  const collapse = useCallback(
    (_node: Node, nodePath: NodePath) => {
      const newNodes = forNode(nodePath, nodes, (node) => {
        node.isExpanded = false;
      });

      if (newNodes) {
        setNodes(newNodes);
      }
    },
    [nodes]
  );

  const expand = useCallback(
    (_node: Node, nodePath: NodePath) => {
      const newNodes = forNode(nodePath, nodes, (node) => {
        node.isExpanded = true;
      });

      if (newNodes) {
        setNodes(newNodes);
      }
    },
    [nodes]
  );

  const select = useCallback(
    (_node: Node) => {
      const newNodes = forEachNode(nodes, (node) => {
        node.isSelected = node.id === _node.id;
      });

      if (newNodes) {
        setNodes(newNodes);
      }
    },
    [nodes]
  );

  return { collapse, expand, select };
};
