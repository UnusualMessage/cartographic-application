import { CarryOutOutlined, FolderOutlined } from "@ant-design/icons";
import { v4 as uuid } from "uuid";

import type { Node } from "../../../misc";

export const planNodes: Node[] = [
  {
    key: "tree-plans",
    icon: <CarryOutOutlined />,
    title: "Планы и цели",
    data: undefined,

    children: [
      {
        key: uuid(),
        icon: <FolderOutlined />,
        title: "2021",
        data: 2021,
        children: [],
      },

      {
        key: uuid(),
        icon: <FolderOutlined />,
        title: "2022",
        data: 2022,
        children: [],
      },
    ],
  },
];
