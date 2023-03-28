import { Badge } from "antd";
import { observer } from "mobx-react-lite";

import { EmployeesStore } from "@entities/employee";

const EmployeesTabLabel = () => {
  const employees = EmployeesStore.employees;

  return (
    <Badge
      count={employees.length}
      size={"small"}
      color="blue"
      offset={[-10, -5]}
    >
      Сотрудники
    </Badge>
  );
};

export default observer(EmployeesTabLabel);
