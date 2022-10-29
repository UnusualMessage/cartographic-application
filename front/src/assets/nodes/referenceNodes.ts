import { v4 as uuid } from "uuid";

import { Node } from "../../types/Node";
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
            label: "Контрагенты",
            nodeData: references[0],
          },

          {
            id: uuid(),
            icon: "document",
            label: "Организации",
            nodeData: references[1],
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
            nodeData: references[2],
          },

          {
            id: uuid(),
            icon: "document",
            label: "Места хранения",
            nodeData: references[3],
          },

          {
            id: uuid(),
            icon: "document",
            label: "Места назначения",
            nodeData: references[4],
          },
        ],
      },
    ],
  },
];
