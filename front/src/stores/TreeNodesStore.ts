import { makeAutoObservable } from "mobx";
import { Tree, TreeNode, TreeNodeInfo } from "@blueprintjs/core";

import { treeNodes } from "../assets/treeNodes";
import { NodePath } from "../types/NodePath";

class TreeNodesStore {
  private _nodes: TreeNodeInfo<TreeNode>[];

  constructor() {
    this._nodes = treeNodes;

    makeAutoObservable(this);
  }

  public get nodes() {
    return this._nodes;
  }

  public set nodes(nodes: TreeNodeInfo<TreeNode>[]) {
    this._nodes = nodes;
  }

  public applyCallbackToNode = (
    path: NodePath,
    callback: (node: TreeNodeInfo) => void
  ) => {
    const newNodes = this.nodes.slice();
    const targetNode = Tree.nodeFromPath(path, this.nodes);

    callback(targetNode);
    this.nodes = newNodes;
  };
}

export default new TreeNodesStore();
