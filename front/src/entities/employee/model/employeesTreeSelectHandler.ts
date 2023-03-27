import { TreeProps } from "antd/es/tree";

export const employeesTreeSelectHandler: TreeProps["onSelect"] = (
  keys,
  info
) => {
  const node = info.selectedNodes[0];
  console.log(node);
};
