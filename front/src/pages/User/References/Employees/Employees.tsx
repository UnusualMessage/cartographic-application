import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import {
  CreateEmployee,
  DuplicateEmployee,
  RemoveEmployee,
  UpdateEmployee,
} from "@entities/employee/ui/forms";
import { getEmployeeColumns, useRegions } from "@shared/lib";

import { EmployeesStore } from "../../../../entities/stores/entities";
import { Employee } from "../../../../shared/api/types/entities";
import { Table } from "../../../../shared/ui/Table";
import TableButtons from "../../../../shared/ui/TableButtons";

const Employees = () => {
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

export default observer(Employees);
