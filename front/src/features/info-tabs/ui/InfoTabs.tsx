import { Tabs } from "antd";
import { observer } from "mobx-react-lite";

import { TabsStore, Tab } from "@shared/misc";

import { wrapper } from "./menu.module.scss";
import { footerTabs } from "../model";

const getTab = (list: Tab[], current?: string) => {
  return current ?? list[0].key;
};

const switchTab = (newTab: string) => {
  TabsStore.footerTabId = newTab;
};

const InfoTabs = () => {
  const tab = TabsStore.footerTabId;
  const tabList = TabsStore.footerTabsListId;

  let currentTabs = footerTabs.find((list) => list.id === tabList)?.tabs;

  if (!currentTabs) {
    currentTabs = footerTabs[0].tabs;
  }

  return (
    <Tabs
      className={wrapper}
      activeKey={getTab(currentTabs, tab)}
      onChange={switchTab}
      items={currentTabs}
    />
  );
};

export default observer(InfoTabs);
