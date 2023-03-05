import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import {
  EmployeesStore,
  CreateEmployee,
  UpdateEmployee,
  DuplicateEmployee,
  RemoveEmployee,
} from "@entities/employee";
import { getEmployeeTable, mapEmployeeToTable } from "@shared/lib";
import { TableEmployee } from "@shared/misc";
import { Table, TableButtons } from "@shared/ui";

const Employees = () => {
  const employee = EmployeesStore.employee;
  const employees = EmployeesStore.employees;

  const columns = getEmployeeTable();

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
        columns={columns}
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
