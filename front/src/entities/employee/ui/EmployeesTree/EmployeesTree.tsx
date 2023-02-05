import { Divider } from "@blueprintjs/core";
import { cloneDeep } from "lodash";
import { observer } from "mobx-react-lite";

import { Employee } from "@shared/api/types/entities";
import { Node } from "@shared/api/types/nodes";
import { employeeNodes } from "@shared/assets";
import { tree } from "@shared/styles";
import EntitiesTree from "@shared/ui/EntitiesTree";

import { EmployeesStore } from "../../../stores/entities";

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
        className={tree}
      />
    </>
  );
};

export default observer(EmployeesTree);
