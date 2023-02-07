import { TreeEventHandler } from "@blueprintjs/core";

import { PlansStore } from "@entities/plan/model";
import { TabsStore } from "@shared/api";

export const getPlansTreeClickHandler = (): TreeEventHandler<any> => {
  return (node) => {
    const switchTabsList = (id: string) => {
      if (TabsStore.footerTabsListId !== id) {
        TabsStore.footerTabsListId = id;
        TabsStore.footerTabId = undefined;
      }
    };

    if (node.childNodes) {
      switchTabsList("footer-plans");
      PlansStore.chosenYear = node.nodeData;
    } else {
      switchTabsList("footer-plan");
      TabsStore.footerTabsListId = "footer-plan";
    }
  };
};
