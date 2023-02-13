import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import DepartmentsStore from "@entities/department/model/DepartmentsStore";
import {
  CreateDepartment,
  DuplicateDepartment,
  RemoveDepartment,
  UpdateDepartment,
} from "@entities/department/ui/forms";
import { EmployeesStore } from "@entities/employee";
import { getDepartmentColumns, useRegions } from "@shared/lib";
import { Table } from "@shared/ui";

import { Department } from "../../../../shared/misc/types/entities";
import TableButtons from "../../../../shared/ui/TableButtons";

const DepartmentsPage = () => {
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

export default observer(DepartmentsPage);
