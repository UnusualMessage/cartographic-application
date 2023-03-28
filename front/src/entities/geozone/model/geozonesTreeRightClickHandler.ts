import { TreeProps } from "antd/es/tree";

import { GeozonesStore } from "./index";

export const geozonesTreeRightClickHandler: TreeProps["onRightClick"] = (
  info
) => {
  GeozonesStore.choose(info.node.key.toString());
};
