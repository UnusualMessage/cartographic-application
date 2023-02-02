import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import TableButtons from "../../../../features/auxiliary/TableButtons";
import { Table } from "../../../../features/common/Table";
import {
  CreateEmployee,
  DuplicateEmployee,
  RemoveEmployee,
  UpdateEmployee,
} from "../../../../features/forms/employee";
import { useRegions } from "../../../../shared/lib/hooks";
import { getEmployeeColumns } from "../../../../shared/lib/utils/tables";
import { EmployeesStore } from "../../../../stores/entities";
import { Employee } from "../../../../types/entities";

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
