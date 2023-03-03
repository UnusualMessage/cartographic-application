import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import {
  CreateDepartment,
  UpdateDepartment,
  DuplicateDepartment,
  RemoveDepartment,
  DepartmentsStore,
} from "@entities/department";
import { getDepartmentTable, mapDepartmentToTable } from "@shared/lib";
import { TableDepartment } from "@shared/misc";
import { Table, TableButtons } from "@shared/ui";

const Departments = () => {
  const department = DepartmentsStore.department;
  const departments = DepartmentsStore.departments;

  const columns = getDepartmentTable();

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
        columns={columns}
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
