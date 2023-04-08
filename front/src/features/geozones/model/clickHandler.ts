import { TreeProps } from "antd/es/tree";

import { GeozonesStore } from "@entities/business";

export const clickHandler: TreeProps["onRightClick"] = (info) => {
  GeozonesStore.choose(info.node.key.toString());
};
