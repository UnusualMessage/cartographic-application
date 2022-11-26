import { observer } from "mobx-react-lite";
import { Region, Regions } from "@blueprintjs/table";
import TableButtons from "../../../../components/auxiliary/TableButtons";
import { EmployeesStore } from "../../../../stores/entities";
import {
  CreateEmployee,
  DuplicateEmployee,
  RemoveEmployee,
  UpdateEmployee,
} from "../../../../components/forms/employee";
import { useEffect, useState } from "react";
import { getEmployeeColumns } from "../../../../utils/tables";
import { Table } from "../../../../components/common/Table";
import { Employee } from "../../../../types/entities";

const Employees = () => {
  const [regions, setRegions] = useState<Region[]>([]);

  const employee = EmployeesStore.employee;
  const employees = EmployeesStore.employees;

  const onSelection = (regions: Region[]) => {
    const row = regions[0].rows;

    if (row) {
      const rowIndex = row[0];
      const region = Regions.row(rowIndex);

      setRegions([region]);
      EmployeesStore.employee = employees[rowIndex];
    }
  };

  const columns = getEmployeeColumns(employees);

  useEffect(() => {
    EmployeesStore.employee = undefined;
    setRegions([]);
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
