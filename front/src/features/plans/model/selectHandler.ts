import type { TreeProps } from "antd/es/tree";

import { PlansStore } from "@entities/business";
import { TabsStore } from "@shared/misc";

export const selectHandler: TreeProps["onSelect"] = (keys, info) => {
  const node = info.selectedNodes[0];

  if (node.children) {
    TabsStore.switchFooterTabs("footer-plans");
    PlansStore.chosenYear = Number(node.title);
  } else {
    TabsStore.switchFooterTabs("footer-plan");
  }
};
