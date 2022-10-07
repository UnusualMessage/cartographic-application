import { Node } from "../types/Node";

export const emptyNodes: Node[] = [
  {
    id: "fields",
    icon: "folder-close",
    label: "Поля",
    isExpanded: false,
    childNodes: [],
  },

  {
    id: "auto",
    icon: "folder-close",
    label: "Техника",
    isExpanded: false,
    childNodes: [],
  },

  {
    id: "staff",
    icon: "folder-close",
    label: "Сотрудники",
    isExpanded: false,
    childNodes: [],
  },
];
