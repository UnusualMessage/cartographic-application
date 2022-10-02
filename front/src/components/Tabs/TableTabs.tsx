import { Tab, Tabs } from "@blueprintjs/core";
import { useState } from "react";
import classNames from "classnames";
import { observer } from "mobx-react-lite";

import { collapsed, wrapper } from "./tabs.module.scss";

import TableTabsStore from "../../stores/TableTabsStore";
import Table from "../Table";

const TableTabs = () => {
  const [currentTab, setCurrentTab] = useState<string | number>("");
  const tabs = TableTabsStore.tabsList;
  const active = TableTabsStore.active;

  return (
    <Tabs
      className={classNames(wrapper, { [collapsed]: !active })}
      id="table-tabs"
      selectedTabId={currentTab}
      onChange={(newTabId, prevTabId) => {
        if (newTabId === prevTabId) {
          TableTabsStore.active = !active;
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
            panel={<Table hidden={!active} />}
          />
        );
      })}
    </Tabs>
  );
};

export default observer(TableTabs);
