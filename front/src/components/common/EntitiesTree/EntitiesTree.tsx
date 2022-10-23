import { useCallback, useEffect, useState } from "react";
import { Tree, TreeEventHandler } from "@blueprintjs/core";

import { Node } from "../../../types/Node";
import useTreeActions from "../../../hooks/useTreeActions";

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

  const { collapse, expand, select } = useTreeActions({
    nodes,
    setNodes,
  });

  const handleCombinedClick: TreeEventHandler = useCallback(
    (node, nodePath, e) => {
      if (handleClick) {
        handleClick(node, nodePath, e);
      }

      select(node);
    },
    [nodes]
  );

  return (
    <Tree
      className={className}
      contents={nodes}
      onNodeCollapse={handleCollapse ? handleCollapse : collapse}
      onNodeExpand={handleExpand ? handleExpand : expand}
      onNodeClick={handleCombinedClick}
    />
  );
};

export default EntitiesTree;
