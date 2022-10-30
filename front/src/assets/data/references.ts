import { v4 as uuid } from "uuid";

import Reference from "../../types/Reference";

export const references: Reference[] = [
  {
    id: uuid(),
    title: "Контрагенты",
    link: "partners",
  },

  {
    id: uuid(),
    title: "Организации",
    link: "organizations",
  },

  {
    id: uuid(),
    title: "Геозоны",
    link: "geozones",
  },

  {
    id: uuid(),
    title: "Места хранения",
    link: "store-places",
  },

  {
    id: uuid(),
    title: "Места назначения",
    link: "dest-places",
  },

  {
    id: uuid(),
    title: "Виды работ",
    link: "works-categories",
  },

  {
    id: uuid(),
    title: "Смены работ",
    link: "works-changes",
  },

  {
    id: uuid(),
    title: "Ежегодные планы",
    link: "annually-plans",
  },

  {
    id: uuid(),
    title: "Оперативные планы",
    link: "operative-plans",
  },

  {
    id: uuid(),
    title: "Групповой график работ",
    link: "group-graphic",
  },

  {
    id: uuid(),
    title: "Групповые оперативные планы",
    link: "group-plans",
  },

  {
    id: uuid(),
    title: "Группы товаров",
    link: "goods-groups",
  },

  {
    id: uuid(),
    title: "Культуры",
    link: "cultures",
  },

  {
    id: uuid(),
    title: "Технологии",
    link: "technologies",
  },

  {
    id: uuid(),
    title: "Товары",
    link: "goods",
  },

  {
    id: uuid(),
    title: "Должности",
    link: "posts",
  },

  {
    id: uuid(),
    title: "Персонал",
    link: "employees",
  },
];
