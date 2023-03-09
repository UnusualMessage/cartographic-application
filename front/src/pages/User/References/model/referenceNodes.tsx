import { FolderOutlined, FileOutlined } from "@ant-design/icons";
import React from "react";
import { v4 as uuid } from "uuid";

import { Node } from "@shared/misc";

import { references } from "./references";

export const referenceNodes: Node[] = [
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
        ],
      },

      {
        key: uuid(),
        icon: <FolderOutlined />,
        title: "Культуры и товары",
        data: undefined,
        children: [
          {
            key: references[11].id,
            icon: <FileOutlined />,
            title: "Группы товаров",
            data: "goods-groups",
          },

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
        ],
      },

      {
        key: uuid(),
        icon: <FolderOutlined />,
        title: "Сотрудники",
        data: undefined,
        children: [
          {
            key: references[15].id,
            icon: <FileOutlined />,
            title: "Должности",
            data: "posts",
          },

          {
            key: references[16].id,
            icon: <FileOutlined />,
            title: "Персонал",
            data: "employees",
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
            key: references[17].id,
            icon: <FileOutlined />,
            title: "Скоростные режимы",
            data: "speed",
          },

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
