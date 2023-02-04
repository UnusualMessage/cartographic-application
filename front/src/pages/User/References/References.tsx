import { observer } from "mobx-react-lite";
import React from "react";
import { Outlet } from "react-router-dom";

import Reference from "@shared/api/types/common/Reference";

import AnnualPlans from "./AnnualPlans";
import Crops from "./Crops";
import Departments from "./Departments";
import DestinationPlaces from "./DestinationPlaces";
import Employees from "./Employees";
import Geozones from "./Geozones";
import Goods from "./Goods";
import GoodsGroups from "./GoodsGroups";
import GroupPlans from "./GroupPlans";
import GroupSchedule from "./GroupSchedule";
import Mounteds from "./Mounteds";
import OperationalPlans from "./OperationalPlans";
import Partners from "./Partners";
import Posts from "./Posts";
import Select from "./Select";
import Speed from "./Speed";
import StorePlaces from "./StorePlaces";
import Technologies from "./Technologies";
import Trailers from "./Trailers";
import WorksCategories from "./WorksCategories";
import WorksPlans from "./WorksPlans";
import { Loader } from "../../../features/components/auxiliary/placeholders";
import Sider from "../../../features/components/common/Sider";
import { ReferencesTree } from "../../../features/components/trees";
import Content from "../../../shared/ui/Content";

export const references: Reference[] = [
  {
    link: "partners",
    component: <Partners />,
  },

  {
    link: "departments",
    component: <Departments />,
  },

  {
    link: "geozones",
    component: <Geozones />,
  },

  {
    link: "store-places",
    component: <StorePlaces />,
  },

  {
    link: "dest-places",
    component: <DestinationPlaces />,
  },

  {
    link: "works-categories",
    component: <WorksCategories />,
  },

  {
    link: "works-plans",
    component: <WorksPlans />,
  },

  {
    link: "annual-plans",
    component: <AnnualPlans />,
  },

  {
    link: "operational-plans",
    component: <OperationalPlans />,
  },

  {
    link: "group-schedule",
    component: <GroupSchedule />,
  },

  {
    link: "group-plans",
    component: <GroupPlans />,
  },

  {
    link: "goods-groups",
    component: <GoodsGroups />,
  },

  {
    link: "crops",
    component: <Crops />,
  },

  {
    link: "technologies",
    component: <Technologies />,
  },

  {
    link: "goods",
    component: <Goods />,
  },

  {
    link: "posts",
    component: <Posts />,
  },

  {
    link: "employees",
    component: <Employees />,
  },

  {
    link: "speed",
    component: <Speed />,
  },

  {
    link: "select",
    component: <Select />,
  },

  {
    link: "trailers",
    component: <Trailers />,
  },

  {
    link: "mounteds",
    component: <Mounteds />,
  },
];

const References = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Sider>
        <ReferencesTree />
      </Sider>
      <Content>
        <Outlet />
      </Content>
    </React.Suspense>
  );
};

export default observer(References);
