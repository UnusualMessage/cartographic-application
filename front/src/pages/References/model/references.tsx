import React from "react";

import { References } from "@shared/misc";
import { EmptyInformation } from "@shared/ui";

import { Departments, Posts, Employees, Speeds, Trailers } from "../ui";

export const references: References = {
  departments: {
    key: "departments",
    title: "Подразделения",
    link: "departments",
    component: <Departments />,
  },

  geozones: {
    key: "geozones",
    title: "Геозоны",
    link: "geozones",
    component: <EmptyInformation />,
  },

  stores: {
    key: "stores",
    title: "Места хранения",
    link: "stores",
    component: <EmptyInformation />,
  },

  destinations: {
    key: "destinations",
    title: "Места назначения",
    link: "destinations",
    component: <EmptyInformation />,
  },

  worksCategories: {
    key: "worksCategories",
    title: "Типы работ",
    link: "works-categories",
    component: <EmptyInformation />,
  },

  worksPlans: {
    key: "worksPlans",
    title: "Смены работ",
    link: "works-plans",
    component: <EmptyInformation />,
  },

  annualPlans: {
    key: "annualPlans",
    title: "Ежегодные планы",
    link: "annual-plans",
    component: <EmptyInformation />,
  },

  operationalPlans: {
    key: "operationalPlans",
    title: "Оперативные планы",
    link: "operational-plans",
    component: <EmptyInformation />,
  },

  groupSchedule: {
    key: "groupSchedule",
    title: "Групповые графики",
    link: "group-schedule",
    component: <EmptyInformation />,
  },

  groupPlans: {
    key: "groupPlans",
    title: "Групповые планы",
    link: "group-plans",
    component: <EmptyInformation />,
  },

  goodsGroups: {
    key: "goodsGroups",
    title: "Группы товаров",
    link: "goods-groups",
    component: <EmptyInformation />,
  },

  cropsCategories: {
    key: "cropsCategories",
    title: "Типы культур",
    link: "crops-categories",
    component: <EmptyInformation />,
  },

  goods: {
    key: "goods",
    title: "Товары",
    link: "goods",
    component: <EmptyInformation />,
  },

  crops: {
    key: "crops",
    title: "Культуры",
    link: "crops",
    component: <EmptyInformation />,
  },

  posts: {
    key: "posts",
    title: "Должности",
    link: "posts",
    component: <Posts />,
  },

  employees: {
    key: "employees",
    title: "Сотрудники",
    link: "employees",
    component: <Employees />,
  },

  users: {
    key: "users",
    title: "Учетные записи",
    link: "users",
    component: <EmptyInformation />,
  },

  roles: {
    key: "roles",
    title: "Права",
    link: "roles",
    component: <EmptyInformation />,
  },

  equipment: {
    key: "equipment",
    title: "Техника",
    link: "equipment",
    component: <EmptyInformation />,
  },

  equipmentTypes: {
    key: "equipmentTypes",
    title: "Типы техники",
    link: "equipment-types",
    component: <EmptyInformation />,
  },

  speeds: {
    key: "speeds",
    title: "Скоростные режимы",
    link: "speeds",
    component: <Speeds />,
  },

  trailers: {
    key: "trailers",
    title: "Прицепы",
    link: "trailers",
    component: <Trailers />,
  },

  mounteds: {
    key: "mounteds",
    title: "Навесные агрегаты",
    link: "mounteds",
    component: <EmptyInformation />,
  },
};
