import { v4 as uuid } from "uuid";

import { Node } from "@shared/misc/types/nodes";
import { organizations } from "@shared/assets/samples/organizations";

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
