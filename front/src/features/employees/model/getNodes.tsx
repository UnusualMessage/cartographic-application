import { UserOutlined } from "@ant-design/icons";
import { cloneDeep } from "lodash";

import { employeeNodes } from "@shared/assets";
import { Employee, Node } from "@shared/misc";

export const getNodes = (employees?: Employee[]) => {
  const initial: Node[] = cloneDeep(employeeNodes);

  if (!employees) {
    return initial;
  }

  employees.forEach((employee) => {
    const area = initial[0].children?.find(
      (node) => node.data === employee.organization.id
    );

    if (area) {
      area.children?.push({
        key: employee.id,
        title: `${employee.secondName} ${employee.firstName} ${employee.patronymic}`,
        icon: <UserOutlined />,
        data: employee,
      });
    }
  });

  if (initial[0].children) {
    for (const folder of initial[0].children) {
      if (!folder.children?.length) {
        folder.disabled = true;
        folder.isLeaf = true;
      }
    }
  }

  return initial;
};
