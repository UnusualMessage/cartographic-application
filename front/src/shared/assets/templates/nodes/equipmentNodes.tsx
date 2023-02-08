import { Node } from "@shared/api/types/nodes";

import { types } from "../../samples/types";

export const equipmentNodes: Node[] = [
  {
    id: "tree-equipments",
    icon: "tractor",
    label: "Техника",
    isExpanded: true,
    isSelected: true,

    childNodes: types.map((type) => {
      return {
        id: `tree-equipments-type-${type.id}`,
        icon: "folder-close",
        label: type.name,
        isExpanded: true,
        nodeData: type.id,
        childNodes: [],
      };
    }),
  },
];
