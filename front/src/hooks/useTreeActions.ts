import { useCallback } from "react";
import { Node, NodePath } from "../types/Node";
import { forNode } from "../utils/nodes";

interface Props {
  nodes: Node[];
  setNodes: (nodes: Node[]) => void;
}

const useTreeActions = ({ nodes, setNodes }: Props) => {
  const handleNodeCollapse = useCallback(
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

  const handleNodeExpand = useCallback(
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

  return { handleNodeCollapse, handleNodeExpand };
};

export default useTreeActions;
