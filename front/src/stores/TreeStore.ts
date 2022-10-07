import { makeAutoObservable } from "mobx";
import { Tree, TreeNode, TreeNodeInfo } from "@blueprintjs/core";

import { treeNodes } from "../assets/treeNodes";
import { NodePath } from "../types/NodePath";

type NodeCallback = (node: TreeNodeInfo) => void;

class TreeStore {
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

  public applyCallbackToNodes(
    nodes: TreeNodeInfo<TreeNode>[] | undefined,
    callback: NodeCallback
  ) {
    const recursiveCall = (
      nodes: TreeNodeInfo<TreeNode>[] | undefined,
      callback: NodeCallback
    ) => {
      if (nodes === undefined) {
        return;
      }

      for (const node of nodes) {
        callback(node);
        this.applyCallbackToNodes(node.childNodes, callback);
      }
    };

    const newNodes = this.nodes.slice();

    recursiveCall(nodes, callback);

    this.nodes = newNodes;
  }

  public applyCallbackToNodesInFolder(path: NodePath, callback: NodeCallback) {
    const rootNode = Tree.nodeFromPath(path, this.nodes);

    const childNodes = rootNode.childNodes;

    const newNodes = this.nodes.slice();

    if (childNodes) {
      for (const node of childNodes) {
        callback(node);
      }
    }

    this.nodes = newNodes;
  }

  public applyCallbackToNode = (path: NodePath, callback: NodeCallback) => {
    const newNodes = this.nodes.slice();
    const targetNode = Tree.nodeFromPath(path, this.nodes);

    callback(targetNode);
    this.nodes = newNodes;
  };
}

export default new TreeStore();
