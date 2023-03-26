import { Tabs, Badge } from "antd";
import { observer } from "mobx-react-lite";

import { GeozonesStore } from "@entities/geozone";
import { TabsStore } from "@shared/misc";

import { wrapper } from "./menu.module.scss";
import { siderTabs } from "../model";

const EntitiesTabs = () => {
  const tabId = TabsStore.siderTabId;
  const geozones = GeozonesStore.geozones;

  const currentTabs = siderTabs.tabs;
  currentTabs[0].label = (
    <Badge
      count={geozones.length}
      size={"small"}
      color="blue"
      offset={[-10, -5]}
    >
      Геозоны
    </Badge>
  );

  return (
    <Tabs
      id="sider-tabs"
      className={wrapper}
      activeKey={tabId ?? "sider-geozones"}
      items={currentTabs}
      destroyInactiveTabPane
      onChange={(newTabId) => {
        TabsStore.footerTabsListId = newTabId
          .toString()
          .replace("sider-", "footer-");

        TabsStore.active = true;
        TabsStore.footerTabId = undefined;

        TabsStore.siderTabId = newTabId;
      }}
      tabBarStyle={{ margin: 0, paddingLeft: "5px" }}
    />
  );
};

export default observer(EntitiesTabs);
