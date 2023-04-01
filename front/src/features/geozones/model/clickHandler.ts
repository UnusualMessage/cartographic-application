import { TreeProps } from "antd/es/tree";

import { GeozonesStore } from "@entities/geozone/model";

export const clickHandler: TreeProps["onRightClick"] = (info) => {
  GeozonesStore.choose(info.node.key.toString());
};
