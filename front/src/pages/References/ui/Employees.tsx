import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import { EmployeesStore } from "@entities/business";
import {
  CreateEmployee,
  UpdateEmployee,
  DuplicateEmployee,
  RemoveEmployee,
} from "@features/edit";
import { employeeTable } from "@shared/assets";
import { mapEmployeeToTable } from "@shared/lib";
import { TableEmployee } from "@shared/misc";
import { Table, TableButtons } from "@shared/ui";

const Employees = () => {
  const employee = EmployeesStore.employee;
  const employees = EmployeesStore.employees;

  const onSelection = async (employees: TableEmployee[]) => {
    EmployeesStore.employee = await EmployeesStore.getById(employees[0].id);
  };

  useEffect(() => {
    EmployeesStore.employee = undefined;
  }, []);

  return (
    <>
      <Table<TableEmployee>
        items={employees.map(mapEmployeeToTable)}
        columns={employeeTable}
        setItems={onSelection}
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
