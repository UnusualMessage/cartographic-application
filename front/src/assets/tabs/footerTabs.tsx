import { v4 as uuid } from "uuid";
import { NonIdealState } from "@blueprintjs/core";

import { TabsList } from "../../types/Tab";
import PlansTab from "../../components/tabs/PlansTab";

export const footerTabs: TabsList[] = [
  {
    id: "",
    tabs: [
      {
        id: uuid(),
        title: "Нет данных",
        component: (
          <NonIdealState
            icon={"search"}
            layout={"horizontal"}
            title={"А тут пусто!"}
          />
        ),
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
        component: (
          <NonIdealState
            icon={"search"}
            layout={"horizontal"}
            title={"А тут пусто!"}
          />
        ),
      },
    ],
  },

  {
    id: "footer-plan",

    tabs: [
      {
        id: uuid(),
        title: "План",
        component: <></>,
      },
    ],
  },
];
