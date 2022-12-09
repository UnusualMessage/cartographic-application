import { TreeEventHandler } from "@blueprintjs/core";

import { TabsStore } from "../../stores/ui";

export const getGeozonesTreeClickHandler = (): TreeEventHandler<any> => {
  return (node) => {
    const switchTabsList = (id: string) => {
      if (TabsStore.footerTabsListId !== id) {
        TabsStore.footerTabsListId = id;
        TabsStore.footerTabId = undefined;
      }
    };

    switch (node.id) {
      case "tree-fields":
        switchTabsList("footer-fields");
        break;

      default:
        switchTabsList("footer-field");
    }
  };
};
