import { v4 as uuid } from "uuid";

import { Node } from "../../types/nodes";
import { references } from "../data/references";

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
            label: references[0].title,
            nodeData: references[0].link,
          },

          {
            id: uuid(),
            icon: "document",
            label: references[1].title,
            nodeData: references[1].link,
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
            label: references[2].title,
            nodeData: references[2].link,
          },

          {
            id: uuid(),
            icon: "document",
            label: references[3].title,
            nodeData: references[3].link,
          },

          {
            id: uuid(),
            icon: "document",
            label: references[4].title,
            nodeData: references[4].link,
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
                label: references[5].title,
                nodeData: references[5].link,
              },

              {
                id: uuid(),
                icon: "document",
                label: references[6].title,
                nodeData: references[6].link,
              },
            ],
          },

          {
            id: uuid(),
            icon: "document",
            label: references[7].title,
            nodeData: references[7].link,
          },

          {
            id: uuid(),
            icon: "document",
            label: references[8].title,
            nodeData: references[8].link,
          },

          {
            id: uuid(),
            icon: "document",
            label: references[9].title,
            nodeData: references[9].link,
          },

          {
            id: uuid(),
            icon: "document",
            label: references[10].title,
            nodeData: references[10].link,
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
            label: references[11].title,
            nodeData: references[11].link,
          },

          {
            id: uuid(),
            icon: "document",
            label: references[12].title,
            nodeData: references[12].link,
          },

          {
            id: uuid(),
            icon: "document",
            label: references[13].title,
            nodeData: references[13].link,
          },

          {
            id: uuid(),
            icon: "document",
            label: references[14].title,
            nodeData: references[14].link,
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
            label: references[15].title,
            nodeData: references[15].link,
          },

          {
            id: uuid(),
            icon: "document",
            label: references[16].title,
            nodeData: references[16].link,
          },
        ],
      },
    ],
  },
];
