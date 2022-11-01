import { observer } from "mobx-react-lite";

import { EmployeesTable } from "../../../../components/tables";
import TableButtons from "../../../../components/auxiliary/TableButtons";
import { EmployeesStore } from "../../../../stores/entities";

const Employees = () => {
  const employees = EmployeesStore.employees;

  return (
    <>
      <EmployeesTable employees={employees} />
      <TableButtons />
    </>
  );
};

export default observer(Employees);
