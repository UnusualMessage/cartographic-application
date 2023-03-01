import { Tab, Tabs } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";
import { useMemo } from "react";

import { TabsStore } from "@shared/misc";

import { panel, wrapper } from "./menu.module.scss";
import { siderTabs } from "./model";

const EntitiesMenu = () => {
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
        TabsStore.footerTabsListId = newTabId
          .toString()
          .replace("sider-", "footer-");

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
            icon={tab.icon}
            panelClassName={panel}
          />
        );
      })}
    </Tabs>
  );
};

export default observer(EntitiesMenu);
