import EmployeesTree from "@entities/employee/ui/EmployeesTree";
import { EquipmentTree } from "@entities/equipment";
import { GeozonesTree } from "@entities/geozone";
import { PlansTree } from "@entities/plan";
import { TabsList } from "@shared/misc";

export const siderTabs: TabsList = {
  id: "sider-tabs",
  tabs: [
    {
      id: "sider-geozones",
      title: "Геозоны",
      component: <GeozonesTree />,
      icon: "layers",
    },

    {
      id: "sider-equipments",
      title: "Техника",
      component: <EquipmentTree />,
      icon: "truck",
    },

    {
      id: "sider-employees",
      title: "Сотрудники",
      component: <EmployeesTree />,
      icon: "people",
    },

    {
      id: "sider-plans",
      title: "Планы",
      component: <PlansTree />,
      icon: "timeline-events",
    },
  ],
};