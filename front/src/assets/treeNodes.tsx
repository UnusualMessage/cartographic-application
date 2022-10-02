import {
  Classes,
  Icon,
  Intent,
  TreeNode,
  TreeNodeInfo,
} from "@blueprintjs/core";
import { ContextMenu2 } from "@blueprintjs/popover2";

export const treeNodes: TreeNodeInfo<TreeNode>[] = [
  {
    id: 0,
    icon: "folder-close",
    label: <ContextMenu2 content={<div>Hello there!</div>}>Поля</ContextMenu2>,
    isExpanded: false,
    childNodes: [
      {
        id: 1,
        icon: "document",
        label: "Item 0",
      },
      {
        id: 2,
        icon: (
          <Icon
            icon="tag"
            intent={Intent.PRIMARY}
            className={Classes.TREE_NODE_ICON}
          />
        ),
        label:
          "Organic meditation gluten-free, sriracha VHS drinking vinegar beard man.",
      },
    ],
  },

  {
    id: 3,
    icon: "folder-close",
    label: (
      <ContextMenu2 content={<div>Hello there!</div>}>Сотрудники</ContextMenu2>
    ),
    isExpanded: false,
    childNodes: [
      {
        id: 4,
        icon: "document",
        label: "Item 0",
      },
      {
        id: 5,
        icon: (
          <Icon
            icon="tag"
            intent={Intent.PRIMARY}
            className={Classes.TREE_NODE_ICON}
          />
        ),
        label:
          "Organic meditation gluten-free, sriracha VHS drinking vinegar beard man.",
      },
    ],
  },

  {
    id: 6,
    icon: "folder-close",
    label: (
      <ContextMenu2 content={<div>Hello there!</div>}>Машины</ContextMenu2>
    ),
    isExpanded: false,
    childNodes: [
      {
        id: 7,
        icon: "document",
        label: "Item 0",
      },
      {
        id: 8,
        icon: (
          <Icon
            icon="tag"
            intent={Intent.PRIMARY}
            className={Classes.TREE_NODE_ICON}
          />
        ),
        label:
          "Organic meditation gluten-free, sriracha VHS drinking vinegar beard man.",
      },
    ],
  },
];
