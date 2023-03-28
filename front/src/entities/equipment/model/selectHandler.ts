import { TreeProps } from "antd/es/tree";

import { TabsStore, ViewStore } from "@shared/misc";

import EquipmentStore from "./EquipmentStore";

export const selectHandler: TreeProps["onSelect"] = (keys, info) => {
  const node = info.selectedNodes[0];

  switch (node.key) {
    case "tree-equipments-type":
      TabsStore.switchFooterTabs("footer-equipments-type");
      break;

    case "tree-equipments":
      TabsStore.switchFooterTabs("footer-equipments");
      break;

    default:
      TabsStore.switchFooterTabs("footer-equipment");

      const equipment = EquipmentStore.getById(node.key.toString());
      equipment.then((value) => {
        if (value) {
          ViewStore.centerWithZoomTo(15)(value.feature.geometry.coordinates);
        }
      });
  }
};
