import { CarOutlined, FolderOutlined } from "@ant-design/icons";

import type { Node } from "../../../misc";
import { types } from "../../samples";

export const equipmentNodes: Node[] = [
  {
    key: "tree-equipments",
    icon: <CarOutlined />,
    title: "Техника",

    children: types.map((type) => {
      return {
        key: `tree-equipments-type-${type.id}`,
        icon: <FolderOutlined />,
        title: type.name,
        data: type.id,
        children: [],
      };
    }),
  },
];
