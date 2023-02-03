import { useEffect } from "react";
import { observer } from "mobx-react-lite";

import { EmployeesStore } from "../../../../entities/stores/entities";
import { useRegions } from "../../../../shared/lib/hooks";
import { Table } from "../../../../features/components/common/Table";
import { Department } from "../../../../shared/api/types/entities";
import TableButtons from "../../../../features/components/auxiliary/TableButtons";
import DepartmentsStore from "../../../../entities/stores/entities/DepartmentsStore";
import { getDepartmentColumns } from "../../../../shared/lib/utils/tables";
import {
  CreateDepartment,
  DuplicateDepartment,
  RemoveDepartment,
  UpdateDepartment,
} from "../../../../features/components/forms/department";

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
