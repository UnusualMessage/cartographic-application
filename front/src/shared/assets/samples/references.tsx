import React from "react";
import { v4 as uuid } from "uuid";

import AnnualPlans from "../../../pages/User/References/AnnualPlans";
import Crops from "../../../pages/User/References/Crops";
import Departments from "../../../pages/User/References/Departments";
import DestinationPlaces from "../../../pages/User/References/DestinationPlaces";
import Employees from "../../../pages/User/References/Employees";
import Geozones from "../../../pages/User/References/Geozones";
import Goods from "../../../pages/User/References/Goods";
import GoodsGroups from "../../../pages/User/References/GoodsGroups";
import GroupPlans from "../../../pages/User/References/GroupPlans";
import GroupSchedule from "../../../pages/User/References/GroupSchedule";
import Mounteds from "../../../pages/User/References/Mounteds";
import OperationalPlans from "../../../pages/User/References/OperationalPlans";
import Partners from "../../../pages/User/References/Partners";
import Posts from "../../../pages/User/References/Posts";
import Select from "../../../pages/User/References/Select";
import Speed from "../../../pages/User/References/Speed";
import StorePlaces from "../../../pages/User/References/StorePlaces";
import Technologies from "../../../pages/User/References/Technologies";
import Trailers from "../../../pages/User/References/Trailers";
import WorksCategories from "../../../pages/User/References/WorksCategories";
import WorksPlans from "../../../pages/User/References/WorksPlans";
import Reference from "../../api/types/common/Reference";

export const references: Reference[] = [
  {
    id: uuid(),
    title: "Контрагенты",
    link: "partners",
    component: <Partners />,
  },

  {
    id: uuid(),
    title: "Подразделения",
    link: "departments",
    component: <Departments />,
  },

  {
    id: uuid(),
    title: "Геозоны",
    link: "geozones",
    component: <Geozones />,
  },

  {
    id: uuid(),
    title: "Места хранения",
    link: "store-places",
    component: <StorePlaces />,
  },

  {
    id: uuid(),
    title: "Места назначения",
    link: "dest-places",
    component: <DestinationPlaces />,
  },

  {
    id: uuid(),
    title: "Виды работ",
    link: "works-categories",
    component: <WorksCategories />,
  },

  {
    id: uuid(),
    title: "Смены работ",
    link: "works-plans",
    component: <WorksPlans />,
  },

  {
    id: uuid(),
    title: "Ежегодные планы",
    link: "annual-plans",
    component: <AnnualPlans />,
  },

  {
    id: uuid(),
    title: "Оперативные планы",
    link: "operational-plans",
    component: <OperationalPlans />,
  },

  {
    id: uuid(),
    title: "Групповой график работ",
    link: "group-schedule",
    component: <GroupSchedule />,
  },

  {
    id: uuid(),
    title: "Групповые оперативные планы",
    link: "group-plans",
    component: <GroupPlans />,
  },

  {
    id: uuid(),
    title: "Группы товаров",
    link: "goods-groups",
    component: <GoodsGroups />,
  },

  {
    id: uuid(),
    title: "Культуры",
    link: "crops",
    component: <Crops />,
  },

  {
    id: uuid(),
    title: "Технологии",
    link: "technologies",
    component: <Technologies />,
  },

  {
    id: uuid(),
    title: "Товары",
    link: "goods",
    component: <Goods />,
  },

  {
    id: uuid(),
    title: "Должности",
    link: "posts",
    component: <Posts />,
  },

  {
    id: uuid(),
    title: "Персонал",
    link: "employees",
    component: <Employees />,
  },

  {
    id: uuid(),
    title: "Скоростные режимы",
    link: "speed",
    component: <Speed />,
  },

  {
    id: uuid(),
    title: "Выбор справочника",
    link: "select",
    component: <Select />,
  },

  {
    id: uuid(),
    title: "Прицепы",
    link: "trailers",
    component: <Trailers />,
  },

  {
    id: uuid(),
    title: "Навесы",
    link: "mounteds",
    component: <Mounteds />,
  },
];
