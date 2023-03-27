import { TreeProps } from "antd/es/tree";

import { TabsStore, ViewStore } from "@shared/misc";

import GeozonesStore from "./GeozonesStore";

export const geozonesTreeSelectHandler: TreeProps["onSelect"] = (
  keys,
  info
) => {
  const node = info.selectedNodes[0];

  const switchTabsList = (id: string) => {
    if (TabsStore.footerTabsListId !== id) {
      TabsStore.footerTabsListId = id;
      TabsStore.footerTabId = undefined;
    }
  };

  switch (node.key) {
    case "tree-geozones":
      switchTabsList("footer-geozones");
      break;

    default:
      switchTabsList("footer-geozone");

      const geozone = GeozonesStore.getById(node.key.toString());

      if (geozone) {
        ViewStore.centerWithZoomTo(13)(geozone.feature.properties.center);
      }
  }
};
