import { TabsList } from "@shared/misc";

export const adminTabs: TabsList = {
  id: "admin-tabs",
  tabs: [
    {
      key: "admin-home",
      label: "Главная",
      children: <></>,
    },

    {
      key: "admin-users",
      label: "Пользователи",
      children: <></>,
    },

    {
      key: "admin-organizations",
      label: "Организации",
      children: <></>,
    },

    {
      key: "admin-places",
      label: "Муниципальные образования",
      children: <></>,
    },

    {
      key: "admin-stats",
      label: "Статистика",
      children: <></>,
    },

    {
      key: "admin-settings",
      label: "Настройки",
      children: <></>,
    },

    {
      key: "admin-exit",
      label: "Выход",
      children: <></>,
    },
  ],
};
