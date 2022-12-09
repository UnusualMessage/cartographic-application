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
    id: "footer-fields",
    tabs: [
      {
        id: uuid(),
        title: "Поля по группам",
        component: <EmptyInformation />,
      },

      {
        id: uuid(),
        title: "Поля по культурам",
        component: <EmptyInformation />,
      },
    ],
  },

  {
    id: "footer-field",
    tabs: [
      {
        id: uuid(),
        title: "Информация",
        component: <EmptyInformation />,
      },

      {
        id: uuid(),
        title: "Текущие работы",
        component: <EmptyInformation />,
      },

      {
        id: uuid(),
        title: "История работ",
        component: <EmptyInformation />,
      },

      {
        id: uuid(),
        title: "Текущая техника",
        component: <EmptyInformation />,
      },

      {
        id: uuid(),
        title: "Поручения",
        component: <EmptyInformation />,
      },

      {
        id: uuid(),
        title: "Заметки",
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
