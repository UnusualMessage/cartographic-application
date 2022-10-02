import { TreeNode, TreeNodeInfo } from "@blueprintjs/core";

export const treeNodes: TreeNodeInfo<TreeNode>[] = [
  {
    id: 0,
    icon: "folder-close",
    label: "Поля",
    isExpanded: false,
    childNodes: [
      {
        id: 1,
        icon: "document",
        label: "Item 0",
      },
      {
        id: 2,
        icon: "tag",
        label:
          "Organic meditation gluten-free, sriracha VHS drinking vinegar beard man.",
      },
    ],
  },

  {
    id: 3,
    icon: "folder-close",
    label: "Сотрудники",
    isExpanded: false,
    childNodes: [
      {
        id: 4,
        icon: "document",
        label: "Item 0",
      },
      {
        id: 5,
        icon: "tag",
        label:
          "Organic meditation gluten-free, sriracha VHS drinking vinegar beard man.",
      },
    ],
  },

  {
    id: 6,
    icon: "folder-close",
    label: "Машины",
    isExpanded: false,
    childNodes: [
      {
        id: 7,
        icon: "document",
        label: "Item 0",
      },
      {
        id: 8,
        icon: "tag",
        label:
          "Organic meditation gluten-free, sriracha VHS drinking vinegar beard man.",
      },
    ],
  },
];
