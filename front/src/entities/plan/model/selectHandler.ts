import type { TreeProps } from "antd/es/tree";

import { TabsStore } from "@shared/misc";

import PlansStore from "./PlansStore";

export const selectHandler: TreeProps["onSelect"] = (keys, info) => {
  const node = info.selectedNodes[0];

  if (node.children) {
    TabsStore.switchFooterTabs("footer-plans");
    PlansStore.chosenYear = Number(node.title);
  } else {
    TabsStore.switchFooterTabs("footer-plan");
  }
};
