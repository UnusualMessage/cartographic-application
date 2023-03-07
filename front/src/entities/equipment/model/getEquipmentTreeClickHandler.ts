import { TreeProps } from "antd/es/tree";

import { TabsStore } from "@shared/misc";

export const getEquipmentTreeClickHandler = (): TreeProps["onSelect"] => {
  return (keys, info) => {
    const node = info.selectedNodes[0];

    const switchTabsList = (id: string) => {
      if (TabsStore.footerTabsListId !== id) {
        TabsStore.footerTabsListId = id;
        TabsStore.footerTabId = undefined;
      }
    };

    if (node.key.toString().includes("tree-equipments-type")) {
      switchTabsList("footer-equipments-type");
      return;
    }

    switch (node.key) {
      case "tree-equipments":
        switchTabsList("footer-equipments");
        break;

      default:
        switchTabsList("footer-equipment");
    }
  };
};
