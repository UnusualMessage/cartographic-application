import { TreeProps } from "antd/es/tree";

import { TabsStore } from "../../../misc";

export const getGeozonesTreeClickHandler = (): TreeProps["onSelect"] => {
  return (keys, info) => {
    const switchTabsList = (id: string) => {
      if (TabsStore.footerTabsListId !== id) {
        TabsStore.footerTabsListId = id;
        TabsStore.footerTabId = undefined;
      }
    };

    switch (info.selectedNodes[0].key) {
      case "tree-geozones":
        switchTabsList("footer-geozones");
        break;

      default:
        switchTabsList("footer-geozone");
    }
  };
};
