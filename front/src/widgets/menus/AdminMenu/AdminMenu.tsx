import { Tabs, Tab } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { TabsStore } from "@shared/misc";

import { wrapper } from "./menu.module.scss";
import { adminTabs } from "./model";

const AdminMenu = () => {
  const navigate = useNavigate();
  const tabId = TabsStore.adminTabId;

  const currentTabs = useMemo(() => {
    return adminTabs.tabs;
  }, []);

  return (
    <Tabs
      id="admin-tabs"
      className={wrapper}
      selectedTabId={tabId}
      renderActiveTabPanelOnly
      vertical
      large
      onChange={(newTabId) => {
        TabsStore.adminTabId = newTabId;
        const link = newTabId.toString().replace("admin-", "");
        navigate(link);
      }}
    >
      {currentTabs.map((tab) => {
        return (
          <Tab
            id={tab.id}
            key={`admin-${tab.id}`}
            title={tab.title}
            panel={tab.component}
            icon={tab.icon}
          />
        );
      })}
    </Tabs>
  );
};

export default observer(AdminMenu);
