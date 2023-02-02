import { Tab, Tabs } from "@blueprintjs/core";
import { useMemo } from "react";
import { observer } from "mobx-react-lite";

import { panel, wrapper } from "./categories.module.scss";

import { siderTabs } from "../../../../assets/templates/tabs";
import { TabsStore } from "../../../../stores/ui";

const Categories = () => {
  const tabId = TabsStore.siderTabId;

  const currentTabs = useMemo(() => {
    return siderTabs.tabs;
  }, []);

  return (
    <Tabs
      id="sider-tabs"
      className={wrapper}
      selectedTabId={tabId}
      renderActiveTabPanelOnly
      onChange={(newTabId) => {
        switch (newTabId) {
          case "sider-plans":
            TabsStore.footerTabsListId = "footer-plans";
            break;

          case "sider-employees":
            TabsStore.footerTabsListId = "footer-employees";
            break;

          case "sider-equipments":
            TabsStore.footerTabsListId = "footer-equipments";
            break;

          case "sider-geozones":
            TabsStore.footerTabsListId = "footer-geozones";
            break;
        }

        TabsStore.active = true;
        TabsStore.footerTabId = undefined;

        TabsStore.siderTabId = newTabId;
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
