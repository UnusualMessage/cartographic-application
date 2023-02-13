import { v4 as uuid } from "uuid";

import { organizations } from "@shared/assets/samples";
import { Node } from "@shared/misc/types/nodes";

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
