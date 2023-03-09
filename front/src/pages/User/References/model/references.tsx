import React from "react";
import { v4 as uuid } from "uuid";

import { Reference } from "@shared/misc";

import {
  Speeds,
  Partners,
  Departments,
  StorePlaces,
  Geozones,
  DestinationPlaces,
  WorksCategories,
  WorksPlans,
  AnnualPlans,
  OperationalPlans,
  GroupSchedule,
  GroupPlans,
  GoodsGroups,
  Crops,
  Technologies,
  Goods,
  Posts,
  Employees,
  Trailers,
  Mounteds,
} from "../ui";

export const references: Reference[] = [
  {
    id: uuid(),
    link: "partners",
    component: <Partners />,
  },

  {
    id: uuid(),
    link: "departments",
    component: <Departments />,
  },

  {
    id: uuid(),
    link: "geozones",
    component: <Geozones />,
  },

  {
    id: uuid(),
    link: "store-places",
    component: <StorePlaces />,
  },

  {
    id: uuid(),
    link: "dest-places",
    component: <DestinationPlaces />,
  },

  {
    id: uuid(),
    link: "works-categories",
    component: <WorksCategories />,
  },

  {
    id: uuid(),
    link: "works-plans",
    component: <WorksPlans />,
  },

  {
    id: uuid(),
    link: "annual-plans",
    component: <AnnualPlans />,
  },

  {
    id: uuid(),
    link: "operational-plans",
    component: <OperationalPlans />,
  },

  {
    id: uuid(),
    link: "group-schedule",
    component: <GroupSchedule />,
  },

  {
    id: uuid(),
    link: "group-plans",
    component: <GroupPlans />,
  },

  {
    id: uuid(),
    link: "goods-groups",
    component: <GoodsGroups />,
  },

  {
    id: uuid(),
    link: "crops",
    component: <Crops />,
  },

  {
    id: uuid(),
    link: "technologies",
    component: <Technologies />,
  },

  {
    id: uuid(),
    link: "goods",
    component: <Goods />,
  },

  {
    id: uuid(),
    link: "posts",
    component: <Posts />,
  },

  {
    id: uuid(),
    link: "employees",
    component: <Employees />,
  },

  {
    id: uuid(),
    link: "speed",
    component: <Speeds />,
  },

  {
    id: uuid(),
    link: "trailers",
    component: <Trailers />,
  },

  {
    id: uuid(),
    link: "mounteds",
    component: <Mounteds />,
  },
];
