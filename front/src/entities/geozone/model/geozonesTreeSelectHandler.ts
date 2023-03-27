import { TreeProps } from "antd/es/tree";

import { TabsStore, ViewStore } from "@shared/misc";

import GeozonesStore from "./GeozonesStore";

export const geozonesTreeSelectHandler: TreeProps["onSelect"] = (
  keys,
  info
) => {
  const node = info.selectedNodes[0];

  switch (node.key) {
    case "tree-geozones":
      TabsStore.switchFooterTabs("footer-geozones");
      break;

    default:
      TabsStore.switchFooterTabs("footer-geozone");

      const geozone = GeozonesStore.getById(node.key.toString());

      if (geozone) {
        ViewStore.centerWithZoomTo(13)(geozone.feature.properties.center);
      }
  }
};
