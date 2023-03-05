import { Tabs } from "antd";
import { observer } from "mobx-react-lite";
import { useMemo } from "react";

import { TabsStore } from "@shared/misc";

import { wrapper } from "./menu.module.scss";
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
      activeKey={tabId ?? "sider-geozones"}
      items={currentTabs}
      onChange={(newTabId) => {
        TabsStore.footerTabsListId = newTabId
          .toString()
          .replace("sider-", "footer-");

        TabsStore.active = true;
        TabsStore.footerTabId = undefined;

        TabsStore.siderTabId = newTabId;
      }}
    />
  );
};

export default observer(EntitiesMenu);
