import { EmployeesTree } from "@entities/employee";
import { GeozonesTree } from "@entities/geozone";
import { TabsList } from "@shared/api/types/tabs";

import {
  EquipmentTree,
  PlansTree,
} from "../../../../features/components/trees";

export const siderTabs: TabsList = {
  id: "sider-tabs",
  tabs: [
    {
      id: "sider-geozones",
      title: "Геозоны",
      component: <GeozonesTree />,
    },

    {
      id: "sider-equipments",
      title: "Техника",
      component: <EquipmentTree />,
    },

    {
      id: "sider-employees",
      title: "Сотрудники",
      component: <EmployeesTree />,
    },

    {
      id: "sider-plans",
      title: "Планы",
      component: <PlansTree />,
    },
  ],
};
