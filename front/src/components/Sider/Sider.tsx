import { Tree, TreeNodeInfo } from "@blueprintjs/core";
import { useCallback } from "react";
import { observer } from "mobx-react-lite";

import { wrapper } from "./sider.module.scss";

import TreeNodesStore from "../../stores/TreeNodesStore";

type NodePath = number[];

const Sider = () => {
  const nodes = TreeNodesStore.nodes;

  const handleNodeCollapse = useCallback(
    (_node: TreeNodeInfo, nodePath: NodePath) => {
      TreeNodesStore.applyCallbackToNode(nodePath, (node) => {
        node.isExpanded = false;
      });
    },
    [nodes]
  );

  const handleNodeExpand = useCallback(
    (_node: TreeNodeInfo, nodePath: NodePath) => {
      TreeNodesStore.applyCallbackToNode(nodePath, (node) => {
        node.isExpanded = true;
      });
    },
    [nodes]
  );

  const handleNodeClick = useCallback(
    (_node: TreeNodeInfo, nodePath: NodePath) => {
      console.log(nodePath);
    },
    [nodes]
  );

  return (
    <Tree
      className={wrapper}
      contents={nodes}
      onNodeCollapse={handleNodeCollapse}
      onNodeExpand={handleNodeExpand}
      onNodeClick={handleNodeClick}
    />
  );
};

export default observer(Sider);
