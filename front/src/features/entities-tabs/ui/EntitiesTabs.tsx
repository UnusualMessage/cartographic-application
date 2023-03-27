import { Tabs, Badge } from "antd";
import { observer } from "mobx-react-lite";
import { CSSProperties } from "react";

import { EmployeesStore } from "@entities/employee";
import { EquipmentStore } from "@entities/equipment";
import { GeozonesStore } from "@entities/geozone";
import { PlansStore } from "@entities/plan";
import { TabsStore } from "@shared/misc";

import { wrapper } from "./menu.module.scss";
import { siderTabs } from "../model";

const EntitiesTabs = () => {
  const tab = TabsStore.siderTabId;

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
