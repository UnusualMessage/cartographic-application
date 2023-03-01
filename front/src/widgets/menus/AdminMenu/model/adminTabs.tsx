import { TabsList } from "@shared/misc";

export const adminTabs: TabsList = {
  id: "admin-tabs",
  tabs: [
    {
      id: "admin-home",
      title: "Главная",
      component: <></>,
      icon: "home",
    },

    {
      id: "admin-users",
      title: "Пользователи",
      component: <></>,
      icon: "layers",
    },

    {
      id: "admin-organizations",
      title: "Организации",
      component: <></>,
      icon: "truck",
    },

    {
      id: "admin-places",
      title: "Муниципальные образования",
      component: <></>,
      icon: "truck",
    },

    {
      id: "admin-stats",
      title: "Статистика",
      component: <></>,
      icon: "truck",
    },

    {
      id: "admin-settings",
      title: "Настройки",
      component: <></>,
      icon: "truck",
    },

    {
      id: "admin-exit",
      title: "Выход",
      component: <></>,
      icon: "truck",
    },
  ],
};
