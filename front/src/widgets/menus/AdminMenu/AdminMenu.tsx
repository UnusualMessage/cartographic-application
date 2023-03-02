import { Tabs } from "antd";
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
      activeKey={tabId}
      items={currentTabs}
      tabPosition={"left"}
      onChange={(newTabId) => {
        TabsStore.adminTabId = newTabId;
        const link = newTabId.toString().replace("admin-", "");
        navigate(link);
      }}
    />
  );
};

export default observer(AdminMenu);
