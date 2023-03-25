import { v4 as uuid } from "uuid";

import { TabPage } from "@entities/info-tabs-page";
import { TabsList } from "@shared/misc";
import { EmptyInformation } from "@shared/ui";

import { PlansTab } from "../../tabs";

const EmptyTab = () => {
  return (
    <TabPage>
      <EmptyInformation />
    </TabPage>
  );
};

export const footerTabs: TabsList[] = [
  {
    id: "",
    tabs: [
      {
        key: uuid(),
        label: "Нет данных",
        children: <EmptyTab />,
      },
    ],
  },

  {
    id: "footer-geozones",
    tabs: [
      {
        key: uuid(),
        label: "Поля по группам",
        children: <EmptyTab />,
      },

      {
        key: uuid(),
        label: "Поля по культурам",
        children: <EmptyTab />,
      },
    ],
  },

  {
    id: "footer-geozone",
    tabs: [
      {
        key: uuid(),
        label: "Информация",
        children: <EmptyTab />,
      },

      {
        key: uuid(),
        label: "Текущие работы",
        children: <EmptyTab />,
      },

      {
        key: uuid(),
        label: "История работ",
        children: <EmptyTab />,
      },

      {
        key: uuid(),
        label: "Текущая техника",
        children: <EmptyTab />,
      },

      {
        key: uuid(),
        label: "Поручения",
        children: <EmptyTab />,
      },

      {
        key: uuid(),
        label: "Заметки",
        children: <EmptyTab />,
      },
    ],
  },

  {
    id: "footer-equipments",
    tabs: [
      {
        key: uuid(),
        label: "Статусы",
        children: <EmptyTab />,
      },

      {
        key: uuid(),
        label: "Статусы по типам",
        children: <EmptyTab />,
      },

      {
        key: uuid(),
        label: "Статистика связи",
        children: <EmptyTab />,
      },

      {
        key: uuid(),
        label: "Статистика простоев",
        children: <EmptyTab />,
      },
    ],
  },

  {
    id: "footer-equipments-type",
    tabs: [
      {
        key: uuid(),
        label: "Статусы",
        children: <EmptyTab />,
      },

      {
        key: uuid(),
        label: "Статистика связи",
        children: <EmptyTab />,
      },

      {
        key: uuid(),
        label: "Статистика простоев",
        children: <EmptyTab />,
      },
    ],
  },

  {
    id: "footer-equipment",
    tabs: [
      {
        key: uuid(),
        label: "Информация",
        children: <EmptyTab />,
      },

      {
        key: uuid(),
        label: "Текущая работа",
        children: <EmptyTab />,
      },

      {
        key: uuid(),
        label: "История работ",
        children: <EmptyTab />,
      },

      {
        key: uuid(),
        label: "Поручения",
        children: <EmptyTab />,
      },

      {
        key: uuid(),
        label: "Статистика статусов",
        children: <EmptyTab />,
      },
    ],
  },

  {
    id: "footer-plans",
    tabs: [
      {
        key: uuid(),
        label: "Список планов",
        children: <PlansTab />,
      },

      {
        key: uuid(),
        label: "Распределение планов",
        children: <EmptyTab />,
      },
    ],
  },

  {
    id: "footer-plan",
    tabs: [
      {
        key: uuid(),
        label: "План",
        children: <EmptyTab />,
      },
    ],
  },
];
