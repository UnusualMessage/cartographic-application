import { v4 as uuid } from "uuid";

import { Node } from "../../types/Node";

export const planNodes: Node[] = [
  {
    id: "tree-plans",
    icon: "timeline-events",
    label: "Планы и цели",
    isExpanded: true,
    isSelected: true,

    childNodes: [
      {
        id: uuid(),
        icon: "folder-close",
        label: "2021",
        isExpanded: true,
        nodeData: 2021,
        childNodes: [],
      },

      {
        id: uuid(),
        icon: "folder-close",
        label: "2022",
        isExpanded: true,
        nodeData: 2022,
        childNodes: [],
      },
    ],
  },
];
