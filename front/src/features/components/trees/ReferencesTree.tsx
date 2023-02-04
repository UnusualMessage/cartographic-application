import { TreeEventHandler } from "@blueprintjs/core";
import classNames from "classnames";
import { cloneDeep } from "lodash";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

import { Node } from "@shared/api/types/nodes";

import { fullHeight, wrapper } from "./tree.module.scss";
import EntitiesTree from "../../../shared/ui/EntitiesTree";

export const referenceNodes: Node[] = [
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

              {
                id: uuid(),
                icon: "document",
                label: "Выбор справочника",
                nodeData: "select",
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

export default observer(ReferencesTree);
