import { observer } from "mobx-react-lite";
import { v4 as uuid } from "uuid";

import { EmployeesStore } from "@entities/employee/model";
import { Employee, Group } from "@shared/misc";
import { Tree } from "@shared/ui";

import { employeeSelectHandler, getEmployeeNodes } from "../../model";

const EmployeesTree = () => {
  const employees = EmployeesStore.employees;

  const groups: Group<Employee>[] = [
    {
      key: uuid(),
      label: "По подразделению",
      getNodes: getEmployeeNodes,
      defaultSelected: true,
    },
  ];

  return (
    <Tree<Employee>
      source={employees}
      onSelect={employeeSelectHandler}
      defaultSelected={"tree-employees"}
      groups={groups}
    />
  );
};

export default observer(EmployeesTree);
