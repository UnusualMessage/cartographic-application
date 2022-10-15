import { Tab, Tabs } from "@blueprintjs/core";
import { useState } from "react";
import classNames from "classnames";
import { observer } from "mobx-react-lite";

import { collapsed, wrapper } from "./tabs.module.scss";

import { TabsStore } from "../../../stores";
import { Tab as TabType } from "../../../types/Tab";
import { tabs } from "../../../assets/tabs";
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

const TabsList = () => {
  const [currentTab, setCurrentTab] = useState<string | number>("");

  const currentTabs = tabs.find(
    (list) => list.id === TabsStore.tabsListId
  )?.tabs;

  const active = TabsStore.active;

  return (
    <Tabs
      className={classNames(wrapper, { [collapsed]: !active })}
      id="tabs"
      selectedTabId={currentTab}
      onChange={(newTabId, prevTabId) => {
        if (newTabId === prevTabId) {
          TabsStore.active = !active;
        } else {
          TabsStore.active = true;
          setCurrentTab(newTabId);
        }
      }}
    >
      {currentTabs?.map(tabsRenderer)}
    </Tabs>
  );
};

export default observer(TabsList);
