import { v4 as uuid } from "uuid";

import { Node } from "../../types/Node";
import { areas } from "../data";

export const employeeNodes: Node[] = [
  {
    id: "tree-employees",
    icon: "people",
    label: "Сотрудники",
    isExpanded: true,
    isSelected: true,

    childNodes: areas.map((area) => {
      return {
        id: uuid(),
        icon: "folder-close",
        label: area.title,
        isExpanded: true,
        nodeData: area.id,
        childNodes: [],
      };
    }),
  },
];
