import { TreeNode, TreeNodeInfo } from "@blueprintjs/core";

export type Node = TreeNodeInfo<TreeNode>;

export type NodeCallback = (node: Node) => void;
