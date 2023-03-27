import type { TreeProps } from "antd/es/tree";

import { switchFooterTabs } from "@shared/lib";

import PlansStore from "./PlansStore";

export const plansTreeSelectHandler: TreeProps["onSelect"] = (keys, info) => {
  const node = info.selectedNodes[0];

  if (node.children) {
    switchFooterTabs("footer-plans");
    PlansStore.chosenYear = Number(node.title);
  } else {
    switchFooterTabs("footer-plan");
  }
};
