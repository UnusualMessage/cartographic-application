import { Tabs, Badge } from "antd";
import { observer } from "mobx-react-lite";

import { EmployeesStore } from "@entities/employee";
import { EquipmentStore } from "@entities/equipment";
import { GeozonesStore } from "@entities/geozone";
import { PlansStore } from "@entities/plan";
import { TabsStore } from "@shared/misc";

import { wrapper } from "./menu.module.scss";
import { siderTabs } from "../model";

const EntitiesTabs = () => {
  const tabId = TabsStore.siderTabId;

  const geozones = GeozonesStore.geozones;
  const equipment = EquipmentStore.equipment;
  const employees = EmployeesStore.employees;
  const plans = PlansStore.plans;

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

  currentTabs[1].label = (
    <Badge
      count={equipment.length}
      size={"small"}
      color="blue"
      offset={[-10, -5]}
    >
      Геозоны
    </Badge>
  );

  currentTabs[2].label = (
    <Badge
      count={employees.length}
      size={"small"}
      color="blue"
      offset={[-10, -5]}
    >
      Геозоны
    </Badge>
  );

  currentTabs[3].label = (
    <Badge count={plans.length} size={"small"} color="blue" offset={[-10, -5]}>
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
