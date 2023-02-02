import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import { EmployeesStore } from "../../../../entities/stores/entities";
import DepartmentsStore from "../../../../entities/stores/entities/DepartmentsStore";
import {
  CreateDepartment,
  DuplicateDepartment,
  RemoveDepartment,
  UpdateDepartment,
} from "../../../../features/forms/department";
import { Department } from "../../../../shared/api/types/entities";
import { useRegions } from "../../../../shared/lib/hooks";
import { getDepartmentColumns } from "../../../../shared/lib/utils/tables";
import { Table } from "../../../../shared/ui/Table";
import TableButtons from "../../../../shared/ui/TableButtons";

const Departments = () => {
  const department = DepartmentsStore.department;
  const departments = DepartmentsStore.departments;

  const { regions, onSelection } = useRegions((rowIndex: number) => {
    DepartmentsStore.department = departments[rowIndex];
  });

  const columns = getDepartmentColumns(departments);

  useEffect(() => {
    EmployeesStore.employee = undefined;
  }, []);

  return (
    <>
      <Table<Department>
        items={departments}
        onSelection={onSelection}
        regions={regions}
        columns={columns}
      />
      <TableButtons>
        <CreateDepartment />
        <UpdateDepartment id={department?.id} />
        <DuplicateDepartment id={department?.id} />
        <RemoveDepartment id={department?.id} />
      </TableButtons>
    </>
  );
};

export default observer(Departments);
