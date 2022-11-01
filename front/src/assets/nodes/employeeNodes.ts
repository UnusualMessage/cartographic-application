import { v4 as uuid } from "uuid";

import { Node } from "../../types/Node";
import { organizations } from "../data";

export const employeeNodes: Node[] = [
  {
    id: "tree-employees",
    icon: "people",
    label: "Сотрудники",
    isExpanded: true,
    isSelected: true,

    childNodes: organizations.map((organization) => {
      return {
        id: uuid(),
        icon: "folder-close",
        label: organization.title,
        isExpanded: true,
        nodeData: organization.id,
        childNodes: [],
      };
    }),
  },
];
