import { observer } from "mobx-react-lite";

import { EmployeesStore } from "@entities/employee/model";
import { Employee } from "@shared/misc";
import { Tree } from "@shared/ui";

import { getEmployeeNodes, employeeSelectHandler } from "../../model";

const EmployeesTree = () => {
  const employees = EmployeesStore.employees;

  return (
    <Tree<Employee>
      fillNodes={getEmployeeNodes}
      source={employees}
      onSelect={employeeSelectHandler}
      defaultSelected={"tree-employees"}
    />
  );
};

export default observer(EmployeesTree);
