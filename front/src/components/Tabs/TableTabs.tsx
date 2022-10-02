import { Tab, Tabs } from "@blueprintjs/core";
import { useState } from "react";

import { wrapper } from "./tabs.module.scss";

import TableTabsStore from "../../stores/TableTabsStore";
import Table from "../Table";

const TableTabs = () => {
  const [currentTab, setCurrentTab] = useState<string | number>("");
  const tabs = TableTabsStore.tabsList;

  return (
    <Tabs
      className={wrapper}
      id="table-tabs"
      selectedTabId={currentTab}
      onChange={(newTabId, prevTabId) => {
        if (newTabId === prevTabId) {
          TableTabsStore.active = !TableTabsStore.active;
        } else {
          TableTabsStore.active = true;
          setCurrentTab(newTabId);
        }
      }}
    >
      {tabs.map((tab) => {
        return (
          <Tab
            key={`table-tab-${tab.id}`}
            id={tab.id}
            title={tab.title}
            panel={<Table />}
          />
        );
      })}
    </Tabs>
  );
};

export default TableTabs;
