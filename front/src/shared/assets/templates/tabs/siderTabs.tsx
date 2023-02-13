import EmployeesTree from "@entities/employee/ui/EmployeesTree";
import { EquipmentTree } from "@entities/equipment";
import { GeozonesTree } from "@entities/geozone";
import { PlansTree } from "@entities/plan";
import { TabsList } from "@shared/misc/types/tabs";

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
