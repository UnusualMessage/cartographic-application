import { FolderOutlined, FileOutlined } from "@ant-design/icons";
import { TreeProps } from "antd/es/tree";
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
import Speed from "./Speeds";
import StorePlaces from "./StorePlaces";
import Technologies from "./Technologies";
import Trailers from "./Trailers";
import { fullHeight, wrapper } from "./tree.module.scss";
import WorksCategories from "./WorksCategories";
import WorksPlans from "./WorksPlans";

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
    component: <Speed />,
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

const referenceNodes: Node[] = [
  {
    key: "tree-references",
    icon: <FolderOutlined />,
    title: "Все",
    data: undefined,

    children: [
      {
        key: uuid(),
        icon: <FolderOutlined />,
        title: "Юридические лица",
        data: undefined,
        children: [
          {
            key: references[0].id,
            icon: <FileOutlined />,
            title: "Контрагенты",
            data: "partners",
          },

          {
            key: references[1].id,
            icon: <FileOutlined />,
            title: "Подразделения",
            data: "departments",
          },
        ],
      },

      {
        key: uuid(),
        icon: <FolderOutlined />,
        title: "Поля и места",
        data: undefined,
        children: [
          {
            key: references[2].id,
            icon: <FileOutlined />,
            title: "Геозоны",
            data: "geozones",
          },

          {
            key: references[3].id,
            icon: <FileOutlined />,
            title: "Места хранения",
            data: "store-places",
          },

          {
            key: references[4].id,
            icon: <FileOutlined />,
            title: "Места назначения",
            data: "dest-places",
          },
        ],
      },

      {
        key: uuid(),
        icon: <FolderOutlined />,
        title: "Планирование и задания",
        children: [
          {
            key: uuid(),
            icon: <FolderOutlined />,
            title: "Настройки планирования",
            data: undefined,
            children: [
              {
                key: references[6].id,
                icon: <FileOutlined />,
                title: "Смены работ",
                data: "works-plans",
              },

              {
                key: references[7].id,
                icon: <FileOutlined />,
                title: "Ежегодные планы",
                data: "annual-plans",
              },
            ],
          },

          {
            key: references[8].id,
            icon: <FileOutlined />,
            title: "Оперативные планы",
            data: "operational-plans",
          },

          {
            key: references[9].id,
            icon: <FileOutlined />,
            title: "Групповой график работ",
            data: "group-schedule",
          },

          {
            key: references[10].id,
            icon: <FileOutlined />,
            title: "Групповые оперативные планы",
            data: "group-plans",
          },

          {
            key: references[11].id,
            icon: <FileOutlined />,
            title: "Группы товаров",
            data: "goods-groups",
          },
        ],
      },

      {
        key: uuid(),
        icon: <FolderOutlined />,
        title: "Культуры и товары",
        data: undefined,
        children: [
          {
            key: references[12].id,
            icon: <FileOutlined />,
            title: "Культуры",
            data: "crops",
          },

          {
            key: references[13].id,
            icon: <FileOutlined />,
            title: "Технологии",
            data: "technologies",
          },

          {
            key: references[14].id,
            icon: <FileOutlined />,
            title: "Товары",
            data: "goods",
          },

          {
            key: references[15].id,
            icon: <FileOutlined />,
            title: "Должности",
            data: "posts",
          },
        ],
      },

      {
        key: uuid(),
        icon: <FolderOutlined />,
        title: "Сотрудники",
        data: undefined,
        children: [
          {
            key: references[16].id,
            icon: <FileOutlined />,
            title: "Персонал",
            data: "employees",
          },

          {
            key: references[17].id,
            icon: <FileOutlined />,
            title: "Скоростные режимы",
            data: "speed",
          },
        ],
      },

      {
        key: uuid(),
        icon: <FolderOutlined />,
        title: "Техника и оборудование",
        data: undefined,
        children: [
          {
            key: uuid(),
            icon: <FolderOutlined />,
            title: "Прицепы и навесное оборудование",
            data: undefined,
            children: [
              {
                key: references[18].id,
                icon: <FileOutlined />,
                title: "Прицепы",
                data: "trailers",
              },

              {
                key: references[19].id,
                icon: <FileOutlined />,
                title: "Навесы",
                data: "mounteds",
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

  const handleClick: TreeProps["onSelect"] = (keys, info) => {
    const reference = references.find(
      (reference) => info.selectedNodes[0].key === reference.id
    );

    if (reference) {
      navigate(reference.link);
    }
  };

  return (
    <EntitiesTree
      fillNodes={fillNodes}
      className={classNames(wrapper, fullHeight)}
      handleSelect={handleClick}
    />
  );
};

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
