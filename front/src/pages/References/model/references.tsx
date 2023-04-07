import React from "react";

import { References } from "@shared/misc";
import { EmptyInformation } from "@shared/ui";

import {
  Departments,
  Posts,
  Employees,
  Speeds,
  Trailers,
  Mounteds,
} from "../ui";
import Equipments from "../ui/Equipments";
import EquipmentTypes from "../ui/EquipmentTypes";

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
    disabled: true,
    component: <EmptyInformation />,
  },

  stores: {
    key: "stores",
    title: "Места хранения",
    link: "stores",
    disabled: true,
    component: <EmptyInformation />,
  },

  destinations: {
    key: "destinations",
    title: "Места назначения",
    link: "destinations",
    disabled: true,
    component: <EmptyInformation />,
  },

  worksCategories: {
    key: "worksCategories",
    title: "Типы работ",
    link: "works-categories",
    disabled: true,
    component: <EmptyInformation />,
  },

  worksPlans: {
    key: "worksPlans",
    title: "Смены работ",
    link: "works-plans",
    disabled: true,
    component: <EmptyInformation />,
  },

  annualPlans: {
    key: "annualPlans",
    title: "Ежегодные планы",
    link: "annual-plans",
    disabled: true,
    component: <EmptyInformation />,
  },

  operationalPlans: {
    key: "operationalPlans",
    title: "Оперативные планы",
    link: "operational-plans",
    disabled: true,
    component: <EmptyInformation />,
  },

  groupSchedule: {
    key: "groupSchedule",
    title: "Групповые графики",
    link: "group-schedule",
    disabled: true,
    component: <EmptyInformation />,
  },

  groupPlans: {
    key: "groupPlans",
    title: "Групповые планы",
    link: "group-plans",
    disabled: true,
    component: <EmptyInformation />,
  },

  goodsGroups: {
    key: "goodsGroups",
    title: "Группы товаров",
    link: "goods-groups",
    disabled: true,
    component: <EmptyInformation />,
  },

  cropsCategories: {
    key: "cropsCategories",
    title: "Типы культур",
    link: "crops-categories",
    disabled: true,
    component: <EmptyInformation />,
  },

  goods: {
    key: "goods",
    title: "Товары",
    link: "goods",
    disabled: true,
    component: <EmptyInformation />,
  },

  crops: {
    key: "crops",
    title: "Культуры",
    link: "crops",
    disabled: true,
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
    disabled: true,
    component: <EmptyInformation />,
  },

  roles: {
    key: "roles",
    title: "Права",
    link: "roles",
    disabled: true,
    component: <EmptyInformation />,
  },

  equipment: {
    key: "equipment",
    title: "Техника",
    link: "equipment",
    component: <Equipments />,
  },

  equipmentTypes: {
    key: "equipmentTypes",
    title: "Типы техники",
    link: "equipment-types",
    component: <EquipmentTypes />,
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
    component: <Mounteds />,
  },
};
