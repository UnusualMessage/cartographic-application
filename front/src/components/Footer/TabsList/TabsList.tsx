import { Tab, Tabs } from "@blueprintjs/core";
import classNames from "classnames";
import { observer } from "mobx-react-lite";

import { collapsed, wrapper } from "./tabs.module.scss";

import { TabsStore } from "../../../stores";
import { Tab as TabType } from "../../../types/Tab";
import { footerTabs } from "../../../assets/footerTabs";
import TabPage from "../TabPage";

const tabsRenderer = (tab: TabType) => {
  return (
    <Tab
      id={tab.id}
      key={`table-tab-${tab.id}`}
      title={tab.title}
      panel={<TabPage>{tab.component}</TabPage>}
    />
  );
};

const handleSelectedTab = (current: string | number, list: TabType[]) => {
  if (current === "") {
    return list[0].id;
  } else {
    return current;
  }
};

const TabsList = () => {
  const currentTab = TabsStore.footerTabId;
  const currentTabList = TabsStore.tabsListId;

  let currentTabs = footerTabs.find((list) => list.id === currentTabList)?.tabs;

  if (!currentTabs) {
    currentTabs = footerTabs[0].tabs;
  }

  const active = TabsStore.active;

  return (
    <Tabs
      className={classNames(wrapper, { [collapsed]: !active })}
      id="footer-tabs"
      selectedTabId={handleSelectedTab(currentTab, currentTabs)}
      onChange={(newTabId, prevTabId) => {
        if (newTabId === prevTabId) {
          TabsStore.active = !active;
        } else {
          TabsStore.active = true;
          TabsStore.footerTabId = newTabId;
        }
      }}
    >
      {currentTabs.map(tabsRenderer)}
    </Tabs>
  );
};

export default observer(TabsList);
