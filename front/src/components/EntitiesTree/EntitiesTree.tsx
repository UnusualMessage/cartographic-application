import { useEffect, useState } from "react";
import { Tree, TreeEventHandler } from "@blueprintjs/core";

import { Node } from "../../types/Node";
import useTreeActions from "../../hooks/useTreeActions";

interface Props<T> {
  fillNodes: (source: T[]) => Node[];
  source: T[];
  handleCollapse?: TreeEventHandler;
  handleExpand?: TreeEventHandler;
  handleClick?: TreeEventHandler;
  className: string;
}

const EntitiesTree = <T,>({
  fillNodes,
  source,
  handleCollapse,
  handleExpand,
  handleClick,
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
      onNodeClick={handleClick}
    />
  );
};

export default EntitiesTree;
