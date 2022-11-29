import { v4 as uuid } from "uuid";

import { TabsList } from "../../types/tabs";
import PlansTab from "../../components/tabs/PlansTab";
import Empty from "../../components/auxiliary/Empty";

export const footerTabs: TabsList[] = [
  {
    id: "",
    tabs: [
      {
        id: uuid(),
        title: "Нет данных",
        component: <Empty />,
      },
    ],
  },

  {
    id: "footer-plans",

    tabs: [
      {
        id: uuid(),
        title: "Список планов",
        component: <PlansTab />,
      },

      {
        id: uuid(),
        title: "Распределение планов",
        component: <Empty />,
      },
    ],
  },

  {
    id: "footer-plan",

    tabs: [
      {
        id: uuid(),
        title: "План",
        component: <Empty />,
      },
    ],
  },
];
