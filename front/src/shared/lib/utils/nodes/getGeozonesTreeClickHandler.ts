import { TreeEventHandler } from "@blueprintjs/core";

import { TabsStore } from "@shared/api";

export const getGeozonesTreeClickHandler = (): TreeEventHandler<any> => {
  return (node) => {
    const switchTabsList = (id: string) => {
      if (TabsStore.footerTabsListId !== id) {
        TabsStore.footerTabsListId = id;
        TabsStore.footerTabId = undefined;
      }
    };

    switch (node.id) {
      case "tree-geozones":
        switchTabsList("footer-geozones");
        break;

      default:
        switchTabsList("footer-geozone");
    }
  };
};
