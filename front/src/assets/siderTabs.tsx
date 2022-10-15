import { TabsList } from "../types/Tab";
import {
  Employees,
  Equipment,
  Fields,
  Plans,
} from "../components/Sider/Categories/Tree";

export const siderTabs: TabsList = {
  id: "sider-tabs",
  tabs: [
    {
      id: "sider-fields",
      title: "Поля",
      component: <Fields />,
    },

    {
      id: "sider-equipment",
      title: "Техника",
      component: <Equipment />,
    },

    {
      id: "sider-employees",
      title: "Сотрудники",
      component: <Employees />,
    },

    {
      id: "sider-plans",
      title: "Планы",
      component: <Plans />,
    },
  ],
};
