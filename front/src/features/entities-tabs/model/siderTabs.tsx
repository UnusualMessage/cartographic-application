import { EmployeesTree } from "@entities/employee";
import { EquipmentTree } from "@entities/equipment";
import { GeozonesTree } from "@entities/geozone";
import { PlansTree } from "@entities/plan";
import { TabsList } from "@shared/misc";

export const siderTabs: TabsList = {
  id: "sider-tabs",
  tabs: [
    {
      key: "sider-geozones",
      label: "Геозоны",
      children: <GeozonesTree />,
    },

    {
      key: "sider-equipments",
      label: "Техника",
      children: <EquipmentTree />,
    },

    {
      key: "sider-employees",
      label: "Сотрудники",
      children: <EmployeesTree />,
    },

    {
      key: "sider-plans",
      label: "Планы",
      children: <PlansTree />,
    },
  ],
};
