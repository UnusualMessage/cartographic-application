import { Tree, TreeEventHandler } from "@blueprintjs/core";
import { useCallback, useEffect, useState } from "react";

import { Node } from "@shared/api";

import { useTreeActions } from "../../lib";

interface Props<T> {
  fillNodes: (source?: T[]) => Node[];
  source?: T[];
  handleCollapse?: TreeEventHandler;
  handleExpand?: TreeEventHandler;
  handleClick?: TreeEventHandler;
  handleContextMenu?: TreeEventHandler;
  className: string;
}

const EntitiesTree = <T,>({
  fillNodes,
  source,
  handleCollapse,
  handleExpand,
  handleClick,
  handleContextMenu,
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
      onNodeContextMenu={handleContextMenu}
      onNodeClick={handleCombinedClick}
    />
  );
};

export default EntitiesTree;
