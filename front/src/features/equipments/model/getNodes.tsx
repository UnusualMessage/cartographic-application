import { CarOutlined } from "@ant-design/icons";
import { cloneDeep } from "lodash";

import { equipmentNodes } from "@shared/assets";
import { Equipment, Node } from "@shared/misc";

export const getNodes = (equipment?: Equipment[]) => {
  const initial: Node[] = cloneDeep(equipmentNodes);

  if (!equipment) {
    return initial;
  }

  equipment.forEach((item) => {
    const equipType = initial[0].children?.find(
      (node) => node.data === item.type.id
    );

    if (equipType) {
      equipType.children?.push({
        key: item.id,
        title: item.name,
        icon: <CarOutlined />,
        data: item,
      });
    }
  });

  if (initial[0].children) {
    for (const folder of initial[0].children) {
      if (!folder.children?.length) {
        folder.disabled = true;
      }
    }
  }

  return initial;
};
