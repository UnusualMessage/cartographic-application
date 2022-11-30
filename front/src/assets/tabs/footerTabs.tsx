import { v4 as uuid } from "uuid";

import { TabsList } from "../../types/tabs";
import PlansTab from "../../components/tabs/PlansTab";
import { EmptyInformation } from "../../components/auxiliary/placeholders";

export const footerTabs: TabsList[] = [
  {
    id: "",
    tabs: [
      {
        id: uuid(),
        title: "Нет данных",
        component: <EmptyInformation />,
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
        component: <EmptyInformation />,
      },
    ],
  },

  {
    id: "footer-plan",

    tabs: [
      {
        id: uuid(),
        title: "План",
        component: <EmptyInformation />,
      },
    ],
  },
];
