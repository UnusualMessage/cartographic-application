import { Tree, TreeNodeInfo } from "@blueprintjs/core";
import { useCallback, useState } from "react";
import { cloneDeep } from "lodash";

import { wrapper } from "./sider.module.scss";

import { treeNodes } from "../../assets/treeNodes";

type NodePath = number[];

const forNodeAtPath = (
  nodes: TreeNodeInfo[],
  path: NodePath,
  callback: (node: TreeNodeInfo) => void
) => {
  callback(Tree.nodeFromPath(path, nodes));
};

const Sider = () => {
  const [nodes, setNodes] = useState(treeNodes);

  const handleNodeCollapse = useCallback(
    (_node: TreeNodeInfo, nodePath: NodePath) => {
      setNodes((nodes) => {
        const newNodes = cloneDeep(nodes);
        forNodeAtPath(newNodes, nodePath, (node) => (node.isExpanded = false));
        return newNodes;
      });
    },
    [nodes]
  );

  const handleNodeExpand = useCallback(
    (_node: TreeNodeInfo, nodePath: NodePath) => {
      setNodes((nodes) => {
        const newNodes = cloneDeep(nodes);
        forNodeAtPath(newNodes, nodePath, (node) => (node.isExpanded = true));
        return newNodes;
      });
    },
    []
  );

  const handleNodeClick = useCallback(
    (_node: TreeNodeInfo, nodePath: NodePath) => {
      console.log(nodePath);
    },
    []
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

export default Sider;
