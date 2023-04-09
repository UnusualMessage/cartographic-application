import { FolderOutlined, FileOutlined } from "@ant-design/icons";
import React from "react";

import { Node } from "@shared/misc";

import { references } from "./references";

export const referenceNodes: Node[] = [
  {
    key: "tree-references",
    icon: <FolderOutlined />,
    title: "Все",

    children: [
      {
        ...references.departments,
        data: references.departments.link,
        icon: <FileOutlined />,
      },

      {
        key: "references-fields-and-places",
        icon: <FolderOutlined />,
        title: "Поля и места",

        children: [
          {
            ...references.geozones,
            data: references.geozones.link,
            icon: <FileOutlined />,
          },

          {
            ...references.stores,
            data: references.stores.link,
            icon: <FileOutlined />,
          },

          {
            ...references.destinations,
            data: references.destinations.link,
            icon: <FileOutlined />,
          },
        ],
      },

      {
        key: "references-plans-and-tasks",
        icon: <FolderOutlined />,
        title: "Планирование и задания",

        children: [
          {
            key: "references-plans-settings",
            icon: <FolderOutlined />,
            title: "Настройки планирования",

            children: [
              {
                ...references.worksPlans,
                data: references.worksPlans.link,
                icon: <FileOutlined />,
              },

              {
                ...references.worksCategories,
                data: references.worksCategories.link,
                icon: <FileOutlined />,
              },
            ],
          },

          {
            ...references.annualPlans,
            data: references.annualPlans.link,
            icon: <FileOutlined />,
          },

          {
            ...references.operationalPlans,
            data: references.operationalPlans.link,
            icon: <FileOutlined />,
          },

          {
            ...references.groupSchedule,
            data: references.groupSchedule.link,
            icon: <FileOutlined />,
          },

          {
            ...references.groupPlans,
            data: references.groupPlans.link,
            icon: <FileOutlined />,
          },
        ],
      },

      {
        key: "references-crops-and-goods",
        icon: <FolderOutlined />,
        title: "Культуры и товары",

        children: [
          {
            ...references.goodsGroups,
            data: references.goodsGroups.link,
            icon: <FileOutlined />,
          },

          {
            ...references.cropsCategories,
            data: references.cropsCategories.link,
            icon: <FileOutlined />,
          },

          {
            ...references.crops,
            data: references.crops.link,
            icon: <FileOutlined />,
          },

          {
            ...references.goods,
            data: references.goods.link,
            icon: <FileOutlined />,
          },
        ],
      },

      {
        key: "references-employees-and-users",
        icon: <FolderOutlined />,
        title: "Персонал",

        children: [
          {
            ...references.posts,
            data: references.posts.link,
            icon: <FileOutlined />,
          },

          {
            ...references.employees,
            data: references.employees.link,
            icon: <FileOutlined />,
          },

          {
            ...references.users,
            data: references.users.link,
            icon: <FileOutlined />,
          },

          {
            ...references.roles,
            data: references.roles.link,
            icon: <FileOutlined />,
          },
        ],
      },

      {
        key: "references-equipment-and-devices",
        icon: <FolderOutlined />,
        title: "Техника и оборудование",

        children: [
          {
            key: "references-mounteds-and-trailers",
            icon: <FolderOutlined />,
            title: "Прицепы и навесное оборудование",

            children: [
              {
                ...references.trailers,
                data: references.trailers.link,
                icon: <FileOutlined />,
              },

              {
                ...references.mounteds,
                data: references.mounteds.link,
                icon: <FileOutlined />,
              },
            ],
          },

          {
            ...references.equipment,
            data: references.equipment.link,
            icon: <FileOutlined />,
          },

          {
            ...references.equipmentTypes,
            data: references.equipmentTypes.link,
            icon: <FileOutlined />,
          },

          {
            ...references.speeds,
            data: references.speeds.link,
            icon: <FileOutlined />,
          },
        ],
      },
    ],
  },
];
