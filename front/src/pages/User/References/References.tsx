import { TreeEventHandler } from "@blueprintjs/core";
import classNames from "classnames";
import { cloneDeep } from "lodash";
import { observer } from "mobx-react-lite";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

import { Node, Reference } from "@shared/misc";
import { EntitiesTree, Loader, Content } from "@shared/ui";
import { UserAside } from "@widgets/index";

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
import Speed from "./Speeds";
import StorePlaces from "./StorePlaces";
import Technologies from "./Technologies";
import Trailers from "./Trailers";
import { fullHeight, wrapper } from "./tree.module.scss";
import WorksCategories from "./WorksCategories";
import WorksPlans from "./WorksPlans";

const referenceNodes: Node[] = [
  {
    id: "tree-references",
    icon: "folder-close",
    label: "Все",
    isExpanded: true,
    isSelected: false,
    nodeData: undefined,

    childNodes: [
      {
        id: uuid(),
        icon: "folder-close",
        label: "Юридические лица",
        isExpanded: true,
        nodeData: undefined,
        childNodes: [
          {
            id: uuid(),
            icon: "document",
            label: "Контрагенты",
            nodeData: "partners",
          },

          {
            id: uuid(),
            icon: "document",
            label: "Подразделения",
            nodeData: "departments",
          },
        ],
      },

      {
        id: uuid(),
        icon: "folder-close",
        label: "Поля и места",
        isExpanded: true,
        nodeData: undefined,
        childNodes: [
          {
            id: uuid(),
            icon: "document",
            label: "Геозоны",
            nodeData: "geozones",
          },

          {
            id: uuid(),
            icon: "document",
            label: "Места хранения",
            nodeData: "store-places",
          },

          {
            id: uuid(),
            icon: "document",
            label: "Места назначения",
            nodeData: "dest-places",
          },
        ],
      },

      {
        id: uuid(),
        icon: "folder-close",
        label: "Планирование и задания",
        isExpanded: true,
        nodeData: undefined,
        childNodes: [
          {
            id: uuid(),
            icon: "folder-close",
            label: "Настройки планирования",
            isExpanded: true,
            nodeData: undefined,
            childNodes: [
              {
                id: uuid(),
                icon: "document",
                label: "Смены работ",
                nodeData: "works-plans",
              },

              {
                id: uuid(),
                icon: "document",
                label: "Ежегодные планы",
                nodeData: "annual-plans",
              },
            ],
          },

          {
            id: uuid(),
            icon: "document",
            label: "Оперативные планы",
            nodeData: "operational-plans",
          },

          {
            id: uuid(),
            icon: "document",
            label: "Групповой график работ",
            nodeData: "group-schedule",
          },

          {
            id: uuid(),
            icon: "document",
            label: "Групповые оперативные планы",
            nodeData: "group-plans",
          },

          {
            id: uuid(),
            icon: "document",
            label: "Группы товаров",
            nodeData: "goods-groups",
          },
        ],
      },

      {
        id: uuid(),
        icon: "folder-close",
        label: "Культуры и товары",
        isExpanded: true,
        nodeData: undefined,
        childNodes: [
          {
            id: uuid(),
            icon: "document",
            label: "Культуры",
            nodeData: "crops",
          },

          {
            id: uuid(),
            icon: "document",
            label: "Технологии",
            nodeData: "technologies",
          },

          {
            id: uuid(),
            icon: "document",
            label: "Товары",
            nodeData: "goods",
          },

          {
            id: uuid(),
            icon: "document",
            label: "Должности",
            nodeData: "posts",
          },
        ],
      },

      {
        id: uuid(),
        icon: "folder-close",
        label: "Сотрудники",
        isExpanded: true,
        nodeData: undefined,
        childNodes: [
          {
            id: uuid(),
            icon: "document",
            label: "Персонал",
            nodeData: "employees",
          },

          {
            id: uuid(),
            icon: "document",
            label: "Скоростные режимы",
            nodeData: "speed",
          },
        ],
      },

      {
        id: uuid(),
        icon: "folder-close",
        label: "Техника и оборудование",
        isExpanded: true,
        nodeData: undefined,
        childNodes: [
          {
            id: uuid(),
            icon: "folder-close",
            label: "Прицепы и навесное оборудование",
            isExpanded: true,
            nodeData: undefined,
            childNodes: [
              {
                id: uuid(),
                icon: "document",
                label: "Прицепы",
                nodeData: "trailers",
              },

              {
                id: uuid(),
                icon: "document",
                label: "Навесы",
                nodeData: "mounteds",
              },
            ],
          },
        ],
      },
    ],
  },
];

const fillNodes = () => {
  return cloneDeep(referenceNodes);
};

const ReferencesTree = () => {
  const navigate = useNavigate();

  const handleClick: TreeEventHandler<any> = (node) => {
    if (node.nodeData) {
      navigate(node.nodeData);
    }
  };

  return (
    <EntitiesTree
      fillNodes={fillNodes}
      className={classNames(wrapper, fullHeight)}
      handleClick={handleClick}
    />
  );
};

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
      <UserAside>
        <ReferencesTree />
      </UserAside>
      <Content>
        <Outlet />
      </Content>
    </React.Suspense>
  );
};

export default observer(References);
