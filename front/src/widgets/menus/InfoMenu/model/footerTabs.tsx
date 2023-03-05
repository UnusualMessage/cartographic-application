import { v4 as uuid } from "uuid";

import PlansTab from "@features/tabs";
import { TabsList } from "@shared/misc";
import { TabPage } from "@shared/ui";
import { EmptyInformation } from "@shared/ui/placeholders";

export const footerTabs: TabsList[] = [
  {
    id: "",
    tabs: [
      {
        key: uuid(),
        label: "Нет данных",
        children: (
          <TabPage>
            <EmptyInformation />
          </TabPage>
        ),
      },
    ],
  },

  {
    id: "footer-geozones",
    tabs: [
      {
        key: uuid(),
        label: "Поля по группам",
        children: (
          <TabPage>
            <EmptyInformation />
          </TabPage>
        ),
      },

      {
        key: uuid(),
        label: "Поля по культурам",
        children: (
          <TabPage>
            <EmptyInformation />
          </TabPage>
        ),
      },
    ],
  },

  {
    id: "footer-geozone",
    tabs: [
      {
        key: uuid(),
        label: "Информация",
        children: (
          <TabPage>
            <EmptyInformation />
          </TabPage>
        ),
      },

      {
        key: uuid(),
        label: "Текущие работы",
        children: (
          <TabPage>
            <EmptyInformation />
          </TabPage>
        ),
      },

      {
        key: uuid(),
        label: "История работ",
        children: (
          <TabPage>
            <EmptyInformation />
          </TabPage>
        ),
      },

      {
        key: uuid(),
        label: "Текущая техника",
        children: (
          <TabPage>
            <EmptyInformation />
          </TabPage>
        ),
      },

      {
        key: uuid(),
        label: "Поручения",
        children: (
          <TabPage>
            <EmptyInformation />
          </TabPage>
        ),
      },

      {
        key: uuid(),
        label: "Заметки",
        children: (
          <TabPage>
            <EmptyInformation />
          </TabPage>
        ),
      },
    ],
  },

  {
    id: "footer-equipments",
    tabs: [
      {
        key: uuid(),
        label: "Статусы",
        children: (
          <TabPage>
            <EmptyInformation />
          </TabPage>
        ),
      },

      {
        key: uuid(),
        label: "Статусы по типам",
        children: (
          <TabPage>
            <EmptyInformation />
          </TabPage>
        ),
      },

      {
        key: uuid(),
        label: "Статистика связи",
        children: (
          <TabPage>
            <EmptyInformation />
          </TabPage>
        ),
      },

      {
        key: uuid(),
        label: "Статистика простоев",
        children: (
          <TabPage>
            <EmptyInformation />
          </TabPage>
        ),
      },
    ],
  },

  {
    id: "footer-equipments-type",
    tabs: [
      {
        key: uuid(),
        label: "Статусы",
        children: (
          <TabPage>
            <EmptyInformation />
          </TabPage>
        ),
      },

      {
        key: uuid(),
        label: "Статистика связи",
        children: (
          <TabPage>
            <EmptyInformation />
          </TabPage>
        ),
      },

      {
        key: uuid(),
        label: "Статистика простоев",
        children: (
          <TabPage>
            <EmptyInformation />
          </TabPage>
        ),
      },
    ],
  },

  {
    id: "footer-equipment",
    tabs: [
      {
        key: uuid(),
        label: "Информация",
        children: (
          <TabPage>
            <EmptyInformation />
          </TabPage>
        ),
      },

      {
        key: uuid(),
        label: "Текущая работа",
        children: (
          <TabPage>
            <EmptyInformation />
          </TabPage>
        ),
      },

      {
        key: uuid(),
        label: "История работ",
        children: (
          <TabPage>
            <EmptyInformation />
          </TabPage>
        ),
      },

      {
        key: uuid(),
        label: "Поручения",
        children: (
          <TabPage>
            <EmptyInformation />
          </TabPage>
        ),
      },

      {
        key: uuid(),
        label: "Статистика статусов",
        children: (
          <TabPage>
            <EmptyInformation />
          </TabPage>
        ),
      },
    ],
  },

  {
    id: "footer-plans",
    tabs: [
      {
        key: uuid(),
        label: "Список планов",
        children: (
          <TabPage>
            {" "}
            <PlansTab />{" "}
          </TabPage>
        ),
      },

      {
        key: uuid(),
        label: "Распределение планов",
        children: (
          <TabPage>
            <EmptyInformation />
          </TabPage>
        ),
      },
    ],
  },

  {
    id: "footer-plan",
    tabs: [
      {
        key: uuid(),
        label: "План",
        children: (
          <TabPage>
            <EmptyInformation />
          </TabPage>
        ),
      },
    ],
  },
];
