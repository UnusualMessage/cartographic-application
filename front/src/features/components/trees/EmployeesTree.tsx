import { Divider } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";
import { cloneDeep } from "lodash";

import { wrapper } from "./tree.module.scss";

import EntitiesTree from "../../../shared/ui/EntitiesTree";
import { Node } from "@shared/api/types/nodes";
import { Employee } from "../../../shared/api/types/entities";
import { EmployeesStore } from "../../../entities/stores/entities";
import { employeeNodes } from "@shared/assets";

const fillNodes = (employees?: Employee[]) => {
  const initial: Node[] = cloneDeep(employeeNodes);

  if (!employees) {
    return initial;
  }

  employees.forEach((employee) => {
    const area = initial[0].childNodes?.find(
      (node) => node.nodeData === employee.organization.id
    );

    if (area) {
      area.childNodes?.push({
        id: employee.id,
        label: `${employee.secondName} ${employee.firstName} ${employee.patronymic}`,
        icon: "person",
        nodeData: employee,
      });
    }
  });

  if (initial[0].childNodes) {
    for (const folder of initial[0].childNodes) {
      if (!folder.childNodes?.length) {
        folder.disabled = true;
        folder.isExpanded = true;
      }
    }
  }

  return initial;
};

const EmployeesTree = () => {
  const employees = EmployeesStore.employees;

  return (
    <>
      <Divider />
      <EntitiesTree<Employee>
        fillNodes={fillNodes}
        source={employees}
        className={wrapper}
      />
    </>
  );
};

export default observer(EmployeesTree);
