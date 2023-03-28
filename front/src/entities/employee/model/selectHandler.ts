import { TreeProps } from "antd/es/tree";

export const selectHandler: TreeProps["onSelect"] = (keys, info) => {
  const node = info.selectedNodes[0];
  console.log(node);
};
