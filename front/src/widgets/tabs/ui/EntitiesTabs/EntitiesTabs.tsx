import { Tabs } from "antd";
import { observer } from "mobx-react-lite";
import { CSSProperties } from "react";

import { TabsStore } from "@shared/misc";

import { wrapper } from "./menu.module.scss";
import { entitiesTabs } from "../../model";

const EntitiesTabs = () => {
  const tab = TabsStore.siderTabId;
  const currentTabs = entitiesTabs.tabs;

  const onChange = (newTab: string) => {
    TabsStore.switchFooterTabs(newTab.replace("sider-", "footer-"));
    TabsStore.siderTabId = newTab;
  };

  const barStyle: CSSProperties = { margin: 0, paddingLeft: "5px" };

  return (
    <Tabs
      className={wrapper}
      activeKey={tab}
      items={currentTabs}
      tabBarStyle={barStyle}
      onChange={onChange}
      destroyInactiveTabPane
    />
  );
};

export default observer(EntitiesTabs);
