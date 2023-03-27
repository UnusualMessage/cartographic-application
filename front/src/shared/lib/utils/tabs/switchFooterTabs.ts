import { TabsStore } from "../../../misc";

export const switchFooterTabs = (id: string) => {
  if (TabsStore.footerTabsListId !== id) {
    TabsStore.footerTabsListId = id;
    TabsStore.footerTabId = undefined;
  }
};
