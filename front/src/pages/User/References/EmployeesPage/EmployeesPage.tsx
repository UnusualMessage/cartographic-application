import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import {
  EmployeesStore,
  CreateEmployee,
  UpdateEmployee,
  DuplicateEmployee,
  RemoveEmployee,
} from "@entities/employee";
import { getEmployeeColumns, useRegions } from "@shared/lib";
import { Employee } from "@shared/misc";
import { Table, TableButtons } from "@shared/ui";

const EmployeesPage = () => {
  const employee = EmployeesStore.employee;
  const employees = EmployeesStore.employees;

  const { regions, onSelection } = useRegions((rowIndex: number) => {
    EmployeesStore.employee = employees[rowIndex];
  });

  const columns = getEmployeeColumns(employees);

  useEffect(() => {
    EmployeesStore.employee = undefined;
  }, []);

  return (
    <>
      <Table<Employee>
        items={employees}
        onSelection={onSelection}
        regions={regions}
        columns={columns}
      />
      <TableButtons>
        <CreateEmployee />
        <UpdateEmployee id={employee?.id} />
        <DuplicateEmployee id={employee?.id} />
        <RemoveEmployee id={employee?.id} />
      </TableButtons>
    </>
  );
};

export default observer(EmployeesPage);
