import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import {
  CreateDepartment,
  UpdateDepartment,
  DuplicateDepartment,
  RemoveDepartment,
  DepartmentsStore,
} from "@entities/department";
import { departmentTable } from "@shared/assets";
import { mapDepartmentToTable } from "@shared/lib";
import { TableDepartment } from "@shared/misc";
import { Table, TableButtons } from "@shared/ui";

const Departments = () => {
  const department = DepartmentsStore.department;
  const departments = DepartmentsStore.departments;

  const onSelection = async (departments: TableDepartment[]) => {
    DepartmentsStore.department = await DepartmentsStore.getById(
      departments[0].id
    );
  };

  useEffect(() => {
    DepartmentsStore.department = undefined;
  }, []);

  return (
    <>
      <Table<TableDepartment>
        items={departments.map(mapDepartmentToTable)}
        columns={departmentTable}
        setItems={onSelection}
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
