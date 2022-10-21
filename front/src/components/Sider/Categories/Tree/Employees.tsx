import { Divider } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";
import { cloneDeep } from "lodash";

import { wrapper } from "./tree.module.scss";

import { Node } from "../../../../types/Node";
import { employees } from "../../../../assets/nodes";
import EntitiesTree from "../../../EntitiesTree";
import { Employee } from "../../../../types/entities";
import EmployeesStore from "../../../../stores/EmployeesStore";

const fillNodes = (nodes: Employee[]) => {
  const initial: Node[] = cloneDeep(employees);

  nodes.forEach((employee) => {
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
