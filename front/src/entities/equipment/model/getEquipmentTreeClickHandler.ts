import { TreeProps } from "antd/es/tree";

import { TabsStore, ViewStore } from "@shared/misc";

import { EquipmentStore } from "./index";

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

        const equipment = EquipmentStore.getById(node.key.toString());
        equipment.then((value) => {
          if (value?.location) {
            ViewStore.centerWithZoomTo(15)(value.location);
          }
        });
    }
  };
};
