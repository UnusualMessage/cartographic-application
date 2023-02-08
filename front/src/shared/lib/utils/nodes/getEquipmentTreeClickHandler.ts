import { TreeEventHandler } from "@blueprintjs/core";

import { TabsStore } from "@shared/api";

export const getEquipmentTreeClickHandler = (): TreeEventHandler<any> => {
  return (node) => {
    const switchTabsList = (id: string) => {
      if (TabsStore.footerTabsListId !== id) {
        TabsStore.footerTabsListId = id;
        TabsStore.footerTabId = undefined;
      }
    };

    if (node.id.toString().includes("tree-equipments-type")) {
      switchTabsList("footer-equipments-type");
      return;
    }

    switch (node.id) {
      case "tree-equipments":
        switchTabsList("footer-equipments");
        break;

      default:
        switchTabsList("footer-equipment");
    }
  };
};
