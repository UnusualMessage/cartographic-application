import EmployeesTree from "@entities/employee/ui/EmployeesTree/index";
import { EquipmentTree } from "@entities/equipment/index";
import { GeozonesTree } from "@entities/geozone/index";
import { PlansTree } from "@entities/plan/index";
import { TabsList } from "@shared/misc";

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
