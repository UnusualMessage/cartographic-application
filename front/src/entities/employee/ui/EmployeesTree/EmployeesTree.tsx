import { observer } from "mobx-react-lite";

import { Employee } from "@shared/misc";
import { Tree } from "@shared/ui";

import {
  EmployeesStore,
  employeeSelectHandler,
  getEmployeeNodes,
} from "../../model";

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
