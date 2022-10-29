import { TabsList } from "../../types/Tab";
import {
  EmployeesTree,
  EquipmentTree,
  FieldsTree,
  PlansTree,
} from "../../components/trees";

export const siderTabs: TabsList = {
  id: "sider-tabs",
  tabs: [
    {
      id: "sider-fields",
      title: "Поля",
      component: <FieldsTree />,
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
