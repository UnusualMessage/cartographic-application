import { observer } from "mobx-react-lite";
import { Region } from "@blueprintjs/table";

import { EmployeesTable } from "../../../../components/tables";
import TableButtons from "../../../../components/auxiliary/TableButtons";
import { EmployeesStore } from "../../../../stores/entities";
import {
  CreateEmployee,
  DuplicateEmployee,
  RemoveEmployee,
  UpdateEmployee,
} from "../../../../components/forms/employee";

const Employees = () => {
  const employee = EmployeesStore.employee;
  const employees = EmployeesStore.employees;

  const onSelection = (regions: Region[]) => {
    const row = regions[0].rows;

    if (row) {
      EmployeesStore.employee = employees[row[0]];
    }
  };

  return (
    <>
      <EmployeesTable employees={employees} onSelection={onSelection} />
      <TableButtons>
        <CreateEmployee />
        <UpdateEmployee id={employee?.id} />
        <DuplicateEmployee id={employee?.id} />
        <RemoveEmployee id={employee?.id} />
      </TableButtons>
    </>
  );
};

export default observer(Employees);
