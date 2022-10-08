import { TreeNodeInfo } from "@blueprintjs/core";

export type Node = TreeNodeInfo<any>;

export type NodePath = number[];

export type NodeCallback = (node: Node) => void;
