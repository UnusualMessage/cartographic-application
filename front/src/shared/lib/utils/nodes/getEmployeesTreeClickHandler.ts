import { TreeProps } from "antd/es/tree";

import { TabsStore } from "../../../misc";

export const getEmployeesTreeClickHandler = (): TreeProps["onSelect"] => {
  return (keys, info) => {
    const node = info.selectedNodes[0];

    const switchTabsList = (id: string) => {
      if (TabsStore.footerTabsListId !== id) {
        TabsStore.footerTabsListId = id;
        TabsStore.footerTabId = undefined;
      }
    };

    switch (node.key) {
      case "tree-plans":
        switchTabsList("footer-plans");
        break;

      default:
        switchTabsList("footer-plan");
    }
  };
};
