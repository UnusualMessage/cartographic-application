import { CarOutlined, FolderOutlined } from "@ant-design/icons";
import { cloneDeep } from "lodash";

import { equipmentNodes, types } from "@shared/assets";
import { translateStatus } from "@shared/lib";
import { Equipment, Node, Status } from "@shared/misc";

export const getNodesByType = (equipment?: Equipment[]) => {
  const initial: Node[] = cloneDeep(equipmentNodes);

  if (!equipment) {
    return initial;
  }

  initial[0].children = types.map((type) => {
    return {
      key: `tree-equipments-type-${type.id}`,
      icon: <FolderOutlined />,
      title: type.name,
      data: type.id,
      children: [],
    };
  });

  equipment.forEach((item) => {
    const type = initial[0].children?.find(
      (node) => node.data === item.type.id
    );

    if (type) {
      type.children?.push({
        key: item.id,
        title: item.name,
        icon: <CarOutlined />,
        data: item,
      });
    }
  });

  for (const folder of initial[0].children) {
    if (!folder.children?.length) {
      folder.disabled = true;
    }
  }

  return initial;
};

export const getNodesByStatus = (equipment?: Equipment[]) => {
  const initial: Node[] = cloneDeep(equipmentNodes);

  if (!equipment) {
    return initial;
  }

  const statusesRecord: Record<string, number> = {};

  for (const item of equipment) {
    const key = item.status;
    statusesRecord[key] = 1;
  }

  const statuses: Status[] = [];

  for (const key in statusesRecord) {
    statuses.push(key as Status);
  }

  initial[0].children = statuses.map((status) => {
    return {
      key: `tree-equipments-${status}`,
      icon: <FolderOutlined />,
      title: translateStatus(status, "ru"),
      data: status,
      children: [],
    };
  });

  equipment.forEach((item) => {
    const statusNode = initial[0].children?.find(
      (node) => node.data === item.status
    );

    if (statusNode) {
      statusNode.children?.push({
        key: item.id,
        title: item.name,
        icon: <CarOutlined />,
        data: item.id,
      });
    }
  });

  for (const folder of initial[0].children) {
    if (!folder.children?.length) {
      folder.disabled = true;
    }
  }

  return initial;
};
