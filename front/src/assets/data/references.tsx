import { v4 as uuid } from "uuid";

import Reference from "../../types/Reference";
import { lazy } from "react";

const Partners = lazy(() => import("../../pages/User/References/Partners"));
const Organizations = lazy(
  () => import("../../pages/User/References/Organizations")
);
const Geozones = lazy(() => import("../../pages/User/References/Geozones"));
const StorePlaces = lazy(
  () => import("../../pages/User/References/StorePlaces")
);
const DestinationPlaces = lazy(
  () => import("../../pages/User/References/DestinationPlaces")
);
const WorksCategories = lazy(
  () => import("../../pages/User/References/WorksCategories")
);
const WorksPlans = lazy(() => import("../../pages/User/References/WorksPlans"));
const AnnualPlans = lazy(
  () => import("../../pages/User/References/AnnualPlans")
);
const OperationalPlans = lazy(
  () => import("../../pages/User/References/OperationalPlans")
);
const GroupSchedule = lazy(
  () => import("../../pages/User/References/GroupSchedule")
);
const GroupPlans = lazy(() => import("../../pages/User/References/GroupPlans"));
const GoodsGroups = lazy(
  () => import("../../pages/User/References/GoodsGroups")
);
const Crops = lazy(() => import("../../pages/User/References/Crops"));
const Technologies = lazy(
  () => import("../../pages/User/References/Technologies")
);
const Goods = lazy(() => import("../../pages/User/References/Goods"));
const Posts = lazy(() => import("../../pages/User/References/Posts"));
const Employees = lazy(() => import("../../pages/User/References/Employees"));

export const references: Reference[] = [
  {
    id: uuid(),
    title: "Контрагенты",
    link: "partners",
    component: <Partners />,
  },

  {
    id: uuid(),
    title: "Организации",
    link: "organizations",
    component: <Organizations />,
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
];
