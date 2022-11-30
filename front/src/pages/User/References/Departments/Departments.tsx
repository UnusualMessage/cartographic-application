import { EmployeesStore } from "../../../../stores/entities";
import { useRegions } from "../../../../hooks";
import { useEffect } from "react";
import { Table } from "../../../../components/common/Table";
import { Department } from "../../../../types/entities";
import TableButtons from "../../../../components/auxiliary/TableButtons";
import DepartmentsStore from "../../../../stores/entities/DepartmentsStore";
import { getDepartmentColumns } from "../../../../utils/tables";
import {
  CreateDepartment,
  DuplicateDepartment,
  RemoveDepartment,
  UpdateDepartment,
} from "../../../../components/forms/department";

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

export default Departments;
