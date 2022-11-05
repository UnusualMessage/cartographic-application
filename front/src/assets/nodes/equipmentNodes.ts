import { Node } from "../../types/nodes";
import { types } from "../data";
import { v4 as uuid } from "uuid";

export const equipmentNodes: Node[] = [
  {
    id: "tree-equipment",
    icon: "tractor",
    label: "Техника",
    isExpanded: true,
    isSelected: true,

    childNodes: types.map((type) => {
      return {
        id: uuid(),
        icon: "folder-close",
        label: type.name,
        isExpanded: true,
        nodeData: type.id,
        childNodes: [],
      };
    }),
  },
];
