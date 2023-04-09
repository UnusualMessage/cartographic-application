import { FolderOutlined, TeamOutlined } from "@ant-design/icons";
import { v4 as uuid } from "uuid";

import type { Node } from "../../../misc";
import { organizations } from "../../samples";

export const employeeNodes: Node[] = [
  {
    key: "tree-employees",
    icon: <TeamOutlined />,
    title: "Сотрудники",

    children: organizations.map((organization) => {
      return {
        key: uuid(),
        icon: <FolderOutlined />,
        title: organization.title,
        data: organization.id,
        children: [],
      };
    }),
  },
];
