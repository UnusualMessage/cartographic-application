import { Tabs } from "antd";
import { observer } from "mobx-react-lite";

import { TabsStore } from "@shared/misc";
import { Tab as TabType } from "@shared/misc/types/tab/Tab";

import { wrapper } from "./menu.module.scss";
import { footerTabs } from "./model";

const handleSelectedTab = (list: TabType[], current?: string) => {
  return current ?? list[0].key;
};

const switchTab = (newTab: string) => {
  TabsStore.footerTabId = newTab;
};

const InfoMenu = () => {
  const tabId = TabsStore.footerTabId;
  const tabListId = TabsStore.footerTabsListId;

  let currentTabs = footerTabs.find((list) => list.id === tabListId)?.tabs;

  if (!currentTabs) {
    currentTabs = footerTabs[0].tabs;
  }

  return (
    <Tabs
      className={wrapper}
      id="footer-tabs"
      activeKey={handleSelectedTab(currentTabs, tabId)}
      onChange={switchTab}
      items={currentTabs}
    />
  );
};

export default observer(InfoMenu);
