import { Tab, Tabs } from "@blueprintjs/core";
import { useMemo, useState } from "react";
import { observer } from "mobx-react-lite";

import { panel, wrapper } from "./categories.module.scss";

import { siderTabs } from "../../../../assets/tabs";
import { TabsStore } from "../../../../stores/ui";

const switchTabsList = (tabsListId: string) => {
  TabsStore.tabsListId = tabsListId;
};

const Categories = () => {
  const [currentTab, setCurrentTab] = useState<string | number>("sider-fields");
  const currentTabs = useMemo(() => {
    return siderTabs.tabs;
  }, []);

  return (
    <Tabs
      id="sider-tabs"
      className={wrapper}
      selectedTabId={currentTab}
      renderActiveTabPanelOnly
      onChange={(newTabId) => {
        switchTabsList(newTabId.toString());

        TabsStore.active = true;
        TabsStore.footerTabId = "";

        setCurrentTab(newTabId);
      }}
    >
      {currentTabs.map((tab) => {
        return (
          <Tab
            id={tab.id}
            key={`sider-${tab.id}`}
            title={tab.title}
            panel={tab.component}
            panelClassName={panel}
          />
        );
      })}
    </Tabs>
  );
};

export default observer(Categories);
