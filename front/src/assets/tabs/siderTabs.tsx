import { TabsList } from "../../types/tabs";
import {
  EmployeesTree,
  EquipmentTree,
  GeozonesTree,
  PlansTree,
} from "../../components/trees";

export const siderTabs: TabsList = {
  id: "sider-tabs",
  tabs: [
    {
      id: "sider-fields",
      title: "Поля",
      component: <GeozonesTree />,
    },

    {
      id: "sider-equipment",
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
