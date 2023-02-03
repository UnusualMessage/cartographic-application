import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import TableButtons from "../../../../components/auxiliary/TableButtons";
import { EmployeesStore } from "../../../../stores/entities";
import {
  CreateEmployee,
  DuplicateEmployee,
  RemoveEmployee,
  UpdateEmployee,
} from "../../../../components/forms/employee";
import { getEmployeeColumns } from "../../../../shared/lib/utils/tables";
import { Table } from "../../../../components/common/Table";
import { Employee } from "../../../../shared/api/types/entities";
import { useRegions } from "../../../../shared/lib/hooks";

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
