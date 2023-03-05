import type { TreeProps } from "antd/es/tree";

import { PlansStore } from "@entities/plan";

import { TabsStore } from "../../../misc";

export const getPlansTreeClickHandler = (): TreeProps["onSelect"] => {
  return (keys, info) => {
    const node = info.selectedNodes[0];

    const switchTabsList = (id: string) => {
      if (TabsStore.footerTabsListId !== id) {
        TabsStore.footerTabsListId = id;
        TabsStore.footerTabId = undefined;
      }
    };

    if (node.children) {
      switchTabsList("footer-plans");

      PlansStore.chosenYear = Number(node.title);
    } else {
      switchTabsList("footer-plan");
      TabsStore.footerTabsListId = "footer-plan";
    }
  };
};
