import { v4 as uuid } from "uuid";

import { TabsList } from "../types/Tab";
import Table from "../components/Table";

export const footerTabs: TabsList[] = [
  {
    id: "footer-plans",

    tabs: [
      {
        id: uuid(),
        title: "Список планов",
        component: <Table />,
      },

      {
        id: uuid(),
        title: "Распределение планов",
        component: <Table />,
      },
    ],
  },

  {
    id: "footer-plan",

    tabs: [
      {
        id: uuid(),
        title: "План",
        component: <Table />,
      },
    ],
  },
];
