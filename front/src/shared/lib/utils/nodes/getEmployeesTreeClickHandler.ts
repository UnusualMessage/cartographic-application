import { TreeEventHandler } from "@blueprintjs/core";

import { TabsStore } from "@shared/misc";

export const getEmployeesTreeClickHandler = (): TreeEventHandler<any> => {
  return (node) => {
    const switchTabsList = (id: string) => {
      if (TabsStore.footerTabsListId !== id) {
        TabsStore.footerTabsListId = id;
        TabsStore.footerTabId = undefined;
      }
    };

    switch (node.id) {
      case "tree-plans":
        switchTabsList("footer-plans");
        break;

      default:
        switchTabsList("footer-plan");
    }
  };
};
