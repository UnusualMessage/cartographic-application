import { Divider } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";
import { cloneDeep } from "lodash";

import { wrapper } from "./tree.module.scss";

import EntitiesTree from "../../../common/EntitiesTree";
import { Node } from "../../../../types/Node";
import { Employee } from "../../../../types/entities";
import { EmployeesStore } from "../../../../stores/entities";
import { employeeNodes } from "../../../../assets/nodes";

const fillNodes = (employees: Employee[]) => {
  const initial: Node[] = cloneDeep(employeeNodes);

  employees.forEach((employee) => {
    const area = initial[0].childNodes?.find(
      (node) => node.nodeData === employee.area.id
    );

    if (area) {
      area.childNodes?.push({
        id: employee.id,
        label: employee.fullName,
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

const Employees = () => {
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

export default observer(Employees);
