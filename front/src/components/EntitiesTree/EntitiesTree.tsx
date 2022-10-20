import { useEffect, useState } from "react";
import { Tree } from "@blueprintjs/core";

import { Node, NodePath } from "../../types/Node";
import useTreeActions from "../../hooks/useTreeActions";

interface Props<T> {
  fillNodes: (source: T[]) => Node[];
  source: T[];
  handleCollapse?: (node: Node, nodePath: NodePath) => void;
  handleExpand?: (node: Node, nodePath: NodePath) => void;
  className: string;
}

const EntitiesTree = <T,>({
  fillNodes,
  source,
  handleCollapse,
  handleExpand,
  className,
}: Props<T>) => {
  const [nodes, setNodes] = useState(() => fillNodes(source));

  useEffect(() => {
    setNodes(fillNodes(source));
  }, [source]);

  const { handleNodeCollapse, handleNodeExpand } = useTreeActions({
    nodes,
    setNodes,
  });

  return (
    <Tree
      className={className}
      contents={nodes}
      onNodeCollapse={handleCollapse ? handleCollapse : handleNodeCollapse}
      onNodeExpand={handleExpand ? handleExpand : handleNodeExpand}
    />
  );
};

export default EntitiesTree;
