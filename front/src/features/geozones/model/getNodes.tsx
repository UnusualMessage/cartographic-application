import { BorderOutlined } from "@ant-design/icons";
import { cloneDeep } from "lodash";

import { geozoneNodes } from "@shared/assets";
import { Geozone, Node } from "@shared/misc";

export const getNodes = (nodes?: Geozone[]) => {
  const initial: Node[] = cloneDeep(geozoneNodes);

  if (!nodes) {
    return initial;
  }

  nodes.forEach((field) => {
    const push = (node: Node, field: Geozone) => {
      const newNode: Node = {
        key: field.id,
        title: field.title,
        icon: <BorderOutlined />,
        data: field.id,
        children: [],
      };

      node.children?.push(newNode);
    };

    push(initial[0], field);
  });

  return initial;
};
