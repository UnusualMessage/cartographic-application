import { TabsList } from "../types/Tab";
import Table from "../components/Table";

export const footerTabs: TabsList[] = [
  {
    id: "feature",
    tabs: [
      {
        id: "1",
        title: "Таблица",
        component: <Table />,
      },
    ],
  },

  {
    id: "features",
    tabs: [
      {
        id: "1",
        title: "Таблица",
        component: <Table />,
      },
    ],
  },
];
