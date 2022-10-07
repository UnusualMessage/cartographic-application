import { Tree, TreeNodeInfo } from "@blueprintjs/core";
import { useCallback } from "react";
import { observer } from "mobx-react-lite";

import { wrapper } from "./sider.module.scss";

import TreeStore from "../../stores/TreeStore";

type NodePath = number[];

const Sider = () => {
  const nodes = TreeStore.nodes;

  const handleNodeCollapse = useCallback(
    (_node: TreeNodeInfo, nodePath: NodePath) => {
      TreeStore.applyCallbackToNode(nodePath, (node) => {
        node.isExpanded = false;
      });
    },
    [nodes]
  );

  const handleNodeExpand = useCallback(
    (_node: TreeNodeInfo, nodePath: NodePath) => {
      TreeStore.applyCallbackToNode(nodePath, (node) => {
        node.isExpanded = true;
      });
    },
    [nodes]
  );

  const handleNodeClick = useCallback(
    (_node: TreeNodeInfo, nodePath: NodePath) => {
      TreeStore.applyCallbackToNodes(nodes, (node) => {
        node.isSelected = false;
      });

      TreeStore.applyCallbackToNodesInFolder(nodePath, (node) => {
        node.isSelected = !node.isSelected;
      });
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
